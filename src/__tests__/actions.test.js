import * as actions from './../actions';

describe('actions', () => {
  it('should create an action to update results', () => {
    const payload = { errorsCount: 0, status: 'positive', remainingTime: 0 };
    const expectedAction = {
      type: 'UPDATE_RESULTS',
      payload
    };
    expect(actions.updateResults(payload)).toEqual(expectedAction);
  });
});
