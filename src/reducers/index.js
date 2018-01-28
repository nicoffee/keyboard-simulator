const rootReducer = (
  state = { errorsCount: 0, status: null, remainingTime: null },
  action
) => {
  switch (action.type) {
    case 'UPDATE_RESULTS':
      return {
        remainingTime: action.payload.remainingTime,
        status: action.payload.status,
        errorsCount: action.payload.errorsCount
      };
    case 'RESET_RESULTS':
      return { errorsCount: 0, status: null, remainingTime: null };
    default:
      return state;
  }
};

export default rootReducer;
