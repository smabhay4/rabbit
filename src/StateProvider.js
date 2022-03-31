import React, { createContext, useContext, useReducer } from "react"; //these are hooks (provide features of class component inside function component)

//createContext() hook  will create the datalayer
export const StateContext = createContext();

//useReducer() hook is an alternative to useState() hook

//it will help to store data in datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//exporting datalayer using useContext() hook so that other component can pull data from it
export const useStateValue = () => useContext(StateContext);
