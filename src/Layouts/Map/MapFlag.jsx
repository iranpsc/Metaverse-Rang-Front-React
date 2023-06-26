import { Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";

const MapFlag = () => {
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
    setPolygons((prevPolygons) => [
      ...prevPolygons,
      JSON.parse(response.data.data.border_coordinates),
    ]);
  };

  const FitBounds = () => {
    const map = useMap();
    if (polygons.length > 0) {
      const bounds = polygons.reduce((acc, polygon) => {
        const polygonBounds = L.latLngBounds(polygon);
        return acc.extend(polygonBounds);
      }, L.latLngBounds(polygons[0]));

      map.fitBounds(bounds);
    }
  };

  const mappedPolygons = useMemo(
    () =>
      polygons.map((polygon, index) => {
        return <Polygon key={index} positions={polygon} fillColor="red" />;
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
            style={{zIndex:1200,position:"absolute"}}
          >
            {flag.name}
          </button>
        ))}
      </>
    );
  };
console.log(1)
  return (
    <>
      {mappedPolygons}
      <FlagButtons />
      {FitBounds()} {/* Call the function here instead of returning it */}
    </>
  );
};

export default MapFlag;
