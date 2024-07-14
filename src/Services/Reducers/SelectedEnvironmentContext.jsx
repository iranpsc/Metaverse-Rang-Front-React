import React, { createContext, useContext, useState } from "react";

const SelectedEnvironmentContext = createContext();

export const useSelectedEnvironment = () =>
  useContext(SelectedEnvironmentContext);

export const SelectedEnvironmentProvider = ({ children }) => {
  const [selectedEnvironment, setSelectedEnvironment] = useState({});
  const [confirmation, setConfirmation] = useState(false);
  const [hiddenModel, setHiddenModel] = useState(false);
  const [formState, setFormState] = useState({});
  const [isSelectable, setIsSelectable] = useState(false);

  const addSelectedEnvironment = (data) => {
    setSelectedEnvironment((prev) => ({ ...prev, ...data }));
  };

  const updateFormState = (data) => {
    setFormState((prev) => ({ ...prev, ...data }));
  };

  const toggleConfirmation = () => {
    setConfirmation(!confirmation);
  };

  const toggleIsSelectable = () => {
    setIsSelectable(!isSelectable);
  };

  const resetStates = () => {
    setSelectedEnvironment({});
    setConfirmation(false);
    setHiddenModel(false);
    setFormState({});
    setIsSelectable(false);
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
        hiddenModel,
        setHiddenModel,
        isSelectable,
        toggleIsSelectable,
        resetStates,
      }}
    >
      {children}
    </SelectedEnvironmentContext.Provider>
  );
};
