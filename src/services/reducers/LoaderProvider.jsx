import { createContext, useState } from "react";

import Loading from "../../components/Loading/index";

export const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <Loading />}
    </LoaderContext.Provider>
  );
};
