import { Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";

const MapFlag = () => {
  const map = useMap(); 
  const [flags, setFlags] = useState([]);
  const [polygons, setPolygons] = useState([]);

  const { Request } = useRequest();
  useEffect(() => {
    async function fetchMap() {
      const response = await Request("maps");
      setFlags(response.data.data);
    }
    fetchMap();
  }, []);

  const handleButtonClick = async (id) => {
    const response = await Request(`maps/${id}/border`);
    const parsedCoordinates = JSON.parse(response.data.data.border_coordinates);

    // Check if the polygon with the given ID already exists
    const existingPolygon = polygons.find(polygon => polygon.id === id);

    if (existingPolygon) {
      // Remove the existing polygon
      setPolygons(prevPolygons => prevPolygons.filter(polygon => polygon.id !== id));
    } else {
      // Add a new polygon
      const newPolygon = {
        id: id,
        coordinates: parsedCoordinates,
      };
      setPolygons(prevPolygons => [...prevPolygons, newPolygon]);
    }
  };

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

  const FlagButtons = () => {
    return (
      <>
        {flags.map((flag) => (
          <button
            key={flag.id}
            onClick={() => handleButtonClick(flag.id)}
            style={{ zIndex: 1200, position: "absolute" }}
          >
            {flag.name}
          </button>
        ))}
      </>
    );
  };

  return (
    <>
      {mappedPolygons}
      <FlagButtons />
      {FitBounds()} 
    </>
  );
};

export default MapFlag;
