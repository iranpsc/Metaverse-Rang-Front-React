import React, { createContext, useContext, useState } from "react";

const SelectedEnvironmentContext = createContext();

export const useSelectedEnvironment = () =>
  useContext(SelectedEnvironmentContext);

export const SelectedEnvironmentProvider = ({ children }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState({});
  const [confirmation, setConfirmation] = useState(false);
  const [formState, setFormState] = useState({});

  const addSelectedEnvironment = (data) => {
    setSelectedEnvironment((prev) => ({ ...prev, ...data }));
  };

  const updateFormState = (data) => {
    setFormState((prev) => ({ ...prev, ...data }));
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
        formState,
        updateFormState,
      }}
    >
      {children}
    </SelectedEnvironmentContext.Provider>
  );
};
