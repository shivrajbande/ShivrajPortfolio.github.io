
import React, { createContext, useContext, useState } from "react";
export const NabIndexContext = createContext();

export const NavBarProvider = ({children}) => {
  const [navIndex, setNavIndex] = useState(0);
  return(
    <NabIndexContext.Provider
    value={{
        navIndex,
        setNavIndex
    }}
    >{children}</NabIndexContext.Provider>
  )
};
