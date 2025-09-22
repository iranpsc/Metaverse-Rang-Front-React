// در یک فایل به نام MapContext.js
import { createContext, useContext, useState } from "react";

export const MapContext = createContext();

export const useMapData = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapData must be used within a MapContextProvider");
  }
  return context;
};

export const MapContextProvider = ({ children }) => {
  const [flags, setFlags] = useState([]);
  const [polygons, setPolygons] = useState([]);

  return (
    <MapContext.Provider value={{ flags, setFlags, polygons, setPolygons }}>
      {children}
    </MapContext.Provider>
  );
};
