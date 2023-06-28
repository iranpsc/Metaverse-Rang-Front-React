import { Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";

const MapFlag = ({polygons}) => {
  const map = useMap();
  
  const FitBounds = () => {
    useEffect(() => {
      if (polygons.length > 0 && polygons.length <= 2) {
        const bounds = polygons.reduce((acc, polygon) => {
          const polygonBounds = L.latLngBounds(polygon.coordinates);
          return acc.extend(polygonBounds);
        }, L.latLngBounds(polygons[0].coordinates));
        map.fitBounds(bounds);
      }
    }, [map, polygons]);

    return null;
  };

  const mappedPolygons = useMemo(
    () =>
      polygons.map((polygon, index) => {
        return (
          <Polygon
            key={index}
            positions={polygon.coordinates}
            fillColor={polygon.color}
          />
        );
      }),
    [polygons]
  );
  return (
    <>
      {mappedPolygons}
      {polygons.length > 0 && polygons.length <= 2 && <FitBounds />}
    </>
  );
};

export default MapFlag;
