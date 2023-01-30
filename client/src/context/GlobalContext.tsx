import React, { createContext, useState } from "react";

interface IGlobalContextProvider {
  children: React.ReactNode;
}

export const GlobalContext = createContext<any>({});

export const GlobalContextProvider = ({ children }: IGlobalContextProvider) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={[count, setCount]}>
      {children}
    </GlobalContext.Provider>
  );
};
