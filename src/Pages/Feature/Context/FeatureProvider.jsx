import React, { createContext, useEffect, useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";

export const FeatureContext = createContext({});

export default function FeatureProvider({ children, id }) {
  const [feature, setFeature] = useState({});
  const { Request } = useRequest();

  const refreshFeature = async () => {
    const response = await Request(`features/${id}`);
    setFeature(response.data.data);
  };

  useEffect(() => {
    refreshFeature();
  }, []);

  return (
    <FeatureContext.Provider value={[feature, setFeature, refreshFeature]}>
      {children}
    </FeatureContext.Provider>
  );
}
