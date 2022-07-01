import React, { createContext, useEffect } from "react";
import appReducer from "../reducer/app.reducer";

export const AppContext = createContext({
  runningStopWatches: [],
});

export const AppContextProvider = ({ children }) => {
  const initialState = React.useContext(AppContext);
  const [state, dispatch] = React.useReducer(
    appReducer,
    initialState,
    (initial) => JSON.parse(localStorage.getItem("stopWatchData")) || initial
  );
  useEffect(() => {
    localStorage.setItem("stopWatchData", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
