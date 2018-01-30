import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
import StartPage from './../components/StartPage';

Enzyme.configure({ adapter: new Adapter() });

describe('StartPage', () => {
    let mountedStartPage;
    const startPage = () => {
        if (!mountedStartPage) {
            mountedStartPage = mount(
                <Router>
                    <StartPage />
                </Router>
            );
        }
        return mountedStartPage;
    };

    beforeEach(() => {
        mountedStartPage = undefined;
    });

    it('always renders a `div`', () => {
        expect(startPage().find("div").length).toBe(1);
    });

    it('always renders a `button`', () => {
        expect(startPage().find("button").length).toBe(1);
    });

    it('always renders a `Link`', () => {
        expect(startPage().find(Link).length).toBe(1);
    });
});