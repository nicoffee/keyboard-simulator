import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResultsPage from './../components/ResultsPage';

Enzyme.configure({ adapter: new Adapter() });

describe('ResultsPage', () => {
  let props;
  let mountedResultsPage;
  const resultsPage = props => {
    if (!mountedResultsPage) {
      mountedResultsPage = mount(
        <Router>
          <ResultsPage {...props} />
        </Router>
      );
    }
    return mountedResultsPage;
  };

  beforeEach(() => {
    props = {
      errorsCount: undefined,
      remainingTime: undefined,
      status: 'positive'
    };
    mountedResultsPage = undefined;
  });

  describe('when `remainingTime` is passed', () => {
    beforeEach(() => {
      props.remainingTime = 50;
    });

    it('renders a second `p`', () => {
      expect(resultsPage(props).find('p').length).toBe(2);
    });
  });

  describe('when `status` is not passed', () => {
    beforeEach(() => {
      props.status = undefined;
    });

    it('renders a `h1`', () => {
      expect(resultsPage(props).children.length).toBe(1);
    });
  });

  describe('when `status` is positive', () => {
    beforeEach(() => {
      props.status = 'positive';
    });

    it('renders a positive text', () => {
      expect(
        resultsPage(props)
          .find('h1')
          .text()
      ).toBe('Успех');
    });
  });

  describe('when `status` is unfinished', () => {
    beforeEach(() => {
      props.status = 'unfinished';
    });

    it('renders a unfinished text', () => {
      expect(
        resultsPage(props)
          .find('h1')
          .text()
      ).toBe('Не завершено');
    });
  });

  describe('when `status` is negative', () => {
    beforeEach(() => {
      props.status = 'negative';
    });

    it('renders a negative text', () => {
      expect(
        resultsPage(props)
          .find('h1')
          .text()
      ).toBe('Неудача');
    });
  });

  describe('when `errorsCount` is passed', () => {
    beforeEach(() => {
      props.errorsCount = 10;
    });

    it('renders a `p` with errorsCount text', () => {
      expect(
        resultsPage(props)
          .find('p')
          .text()
      ).toBe('Ошибок: 10');
    });
  });
});
