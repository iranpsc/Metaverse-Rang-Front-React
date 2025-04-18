import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useMapData } from "../../Services/Reducers/mapContext";
import { Layer, Marker, Source, useMap } from "react-map-gl";
import L from "leaflet";
const FlagIcon = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: baseline;
`;

const Div2 = styled.div`
  width: 85%;
  height: 8px;
  background: linear-gradient(
    to bottom,
    ${(props) => props.color || "blue"},
    white,
    ${(props) => props.color || "blue"}
  );
  border-radius: 2px;
`;

const Div3 = styled.div`
  width: 70%;
  background: ${(props) => props.color || "blue"};
  writing-mode: vertical-rl;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-family: brunoace;
`;

const Div4 = styled.div`
  width: 8px;
  height: 20px;
  background: linear-gradient(
    to right,
    ${(props) => props.color || "blue"},
    white,
    ${(props) => props.color || "blue"}
  );
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const MapFlag = () => {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(map.current.getZoom());
  const { flags, polygons } = useMapData();

  useEffect(() => {
    const handleViewportChange = () => {
      setZoomLevel(map.current.getZoom());
    };

    map.current.on("zoomend", handleViewportChange);

    return () => {
      map.current.off("zoomend", handleViewportChange);
    };
  }, [map]);
  const mappedFlags = useMemo(
    () =>
      zoomLevel < 14
        ? flags.map((flag, index) => {
            const coordinates = JSON.parse(flag.central_point_coordinates);
            const [latitude, longitude] = coordinates;
            return (
              <Marker
                key={index}
                longitude={longitude}
                latitude={latitude}
                style={{ top: "-50px" }}
              >
                <FlagIcon>
                  <Div2 color={flag.color} />
                  <Div3 color={flag.color}> {flag.name}</Div3>
                  <Div4 color={flag.color} />
                </FlagIcon>
              </Marker>
            );
          })
        : [],
    [flags, zoomLevel]
  );
  const mappedPolygons = useMemo(
    () => (
      <>
        <Source
          id="area"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: polygons.map(
              (polygon) => (
               
                {
                  type: "Feature",
                  properties: {
                    id: polygon.id,
                  },
                  geometry: {
                    type: "Polygon",
                    coordinates: [
                      polygon.coordinates.map((coordArray) =>
                        coordArray.reverse()
                      ),
                    ],
                  },
                }
              )
            ),
          }}
        >
          <Layer
            id="polygon-fill"
            type="fill"
            paint={{
              "fill-color": "blue",
              "fill-opacity": 0.4,
            }}
          />
        </Source>
      </>
    ),
    [polygons]
  );
  useEffect(() => {
    if (polygons.length > 0 && polygons.length <= 2) {
      let minLat = Infinity,
        minLng = Infinity,
        maxLat = -Infinity,
        maxLng = -Infinity;

      polygons.forEach((polygon) => {
        polygon.coordinates.forEach(([lat, lng]) => {
          minLat = Math.min(minLat, lat);
          minLng = Math.min(minLng, lng);
          maxLat = Math.max(maxLat, lat);
          maxLng = Math.max(maxLng, lng);
        });
      });

      const bounds = [
        [minLat, minLng],
        [maxLat, maxLng],
      ];

      // If reversing is needed for the second data
      if (polygons.length === 2 /* or any other condition */) {
        bounds.forEach((coordinate) => {
          coordinate.reverse();
        });
      }

      map.current.fitBounds(bounds);
    }
  }, [map, polygons]);
  return (
    <>
      {mappedPolygons}
      {mappedFlags}
    </>
  );
};

export default MapFlag;
