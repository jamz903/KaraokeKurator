"use client";

import React, { useContext } from "react";

export const AppContext = React.createContext({
  authToken: "",
  changeAuthToken(token) {}
});

export const useAppContext = () => useContext(AppContext);
