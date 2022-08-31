
import React, { createContext, useContext } from "react";

const AppContext = createContext();

export function useAppContext() {
    return useContext(AppContext)
} 

export function AppContextProvider({ children }) {
    const value = {name:"nnaemeka"}
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
