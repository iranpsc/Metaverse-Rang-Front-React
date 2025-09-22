import React, { createContext, useEffect, useState } from "react";
import useRequest from "../../../Services/Hooks/useRequest";

export const KycContext = createContext({});

export default function KycProvider({ children, id }) {
  const [kyc, setKyc] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request(`kyc`).then((response) => {
      setKyc(response.data.data);
    });

  }, []);

  return (
    <KycContext.Provider value={[kyc, setKyc]}>
      { children }
    </KycContext.Provider>
  );
}
