import React, { useState, createContext } from "react";


const initState = {

  activeStation: {},
  admin: false,
  showNavBar: true,
};
export const Context = createContext(initState);
export default function Store({ children }) {
  const [state, setState] = useState(initState);
  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
}