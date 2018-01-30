import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from './../store/configureStore';
import TrainingPageContainer from './../containers/TrainingPageContainer';

const store = configureStore();

Enzyme.configure({ adapter: new Adapter() });

describe('TrainingPage', () => {
    let mountedTrainingPage;
    const trainingPage = () => {
        if (!mountedTrainingPage) {
            mountedTrainingPage = mount(
                <Provider store={store}>
                    <Router>
                        <TrainingPageContainer />
                    </Router>
                </Provider>
            );
        }
        return mountedTrainingPage;
    };

    beforeEach(() => {
        mountedTrainingPage = undefined;
    });

    it('always renders a `div`', () => {
        expect(trainingPage().find("div").length).toBe(26);
    });
});