import React, { createContext, useEffect, useState } from "react";
import useRequest from "../../../services/Hooks/useRequest";

export const FeatureContext = createContext({});

export default function FeatureProvider({ children, id }) {
  const [feature, setFeature] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request(`features/${id}`).then((response) => {
      setFeature(response.data.data);
    });
  }, []);
  return (
    <FeatureContext.Provider value={[feature, setFeature]}>
      {children}
    </FeatureContext.Provider>
  );
}
