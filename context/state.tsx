import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any | null>(null);

export const AppWrapper = ({ children }) => {
  const [user, setUser] = useState<any>({});

  return (
    <AppContext.Provider
      value={{
        setUser,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
