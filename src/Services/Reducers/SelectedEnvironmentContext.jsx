import React, { createContext, useContext, useState } from "react";

const SelectedEnvironmentContext = createContext();

export const useSelectedEnvironment = () =>
  useContext(SelectedEnvironmentContext);

export const SelectedEnvironmentProvider = ({ children }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState([]);
  const [confirmation, setConfirmation] = useState(false); // تاییدیه

  const addSelectedEnvironment = (data) => {
    setSelectedEnvironment([data]);
  };

  const toggleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  return (
    <SelectedEnvironmentContext.Provider
      value={{
        selectedEnvironment,
        addSelectedEnvironment,
        confirmation,
        toggleConfirmation,
      }}
    >
      {children}
    </SelectedEnvironmentContext.Provider>
  );
};
