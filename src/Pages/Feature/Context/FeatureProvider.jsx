import React, { createContext, useEffect, useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";

export const FeatureContext = createContext({});

export default function FeatureProvider({ children, id }) {
  const [feature, setFeature] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request(`features/${id}`).then((response) => {
      setFeature(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <FeatureContext.Provider value={[feature, setFeature]}>
      { children }
    </FeatureContext.Provider>
  );
}
