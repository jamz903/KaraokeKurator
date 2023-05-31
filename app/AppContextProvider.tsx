"use client";
import { useState } from "react";
import { AppContext } from "./AppContext";

const AppContextProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState("");

  return (
    <AppContext.Provider
      value={{
        authToken: authToken,
        changeAuthToken: setAuthToken
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
