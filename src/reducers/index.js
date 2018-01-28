const rootReducer = (state = { errorsCount: 0, status: null }, action) => {
  switch (action.type) {
    case 'UPDATE_ERROS_COUNT':
      return {
        ...state,
        errorsCount: ++action.payload
      };
    case 'UPDATE_RESULT_STATUS':
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
