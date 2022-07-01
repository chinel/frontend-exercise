const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STOP_WATCH": {
      return {
        ...state,
        runningStopWatches: [...state.runningStopWatches, action.payload],
      };
    }
    case "REMOVE_STOP_WATCH": {
      const filteredData = state.runningStopWatches.filter(
        (item) => item != action.payload
      );
      return {
        ...state,
        runningStopWatches: [...filteredData],
      };
    }
    default:
      return state;
  }
};

export default appReducer;
