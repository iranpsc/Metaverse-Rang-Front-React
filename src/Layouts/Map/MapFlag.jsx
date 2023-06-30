import { Marker, Polygon, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { renderToString } from "react-dom/server";

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

const MapFlag = ({ polygons, flags }) => {
  const map = useMap();
  const [zoomLevel, setZoomLevel] = useState(map.getZoom());

 

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

  const mappedFlags = useMemo(
    () =>
      zoomLevel < 17
        ? flags.map((flag, index) => {
            const icon = L.divIcon({
              className: "custom-marker",
              html: renderToString(
                <FlagIcon>
                  <Div2 color={flag.color} />
                  <Div3 color={flag.color}> {flag.name}</Div3>
                  <Div4 color={flag.color} />
                </FlagIcon>
              ),
              iconSize: [40, 80],
              iconAnchor: [25, 90],
            });
            return (
              <Marker
                key={index}
                position={JSON.parse(flag.central_point_coordinates)}
                icon={icon}
              ></Marker>
            );
          })
        : [],
    [flags, zoomLevel]
  );

  const mappedPolygons = useMemo(
    () =>
      polygons.map((polygon, index) => (
        <Polygon
          key={index}
          positions={polygon.coordinates}
          fillColor={polygon.color}
        />
      )),
    [polygons]
  );
 useEffect(() => {
    map.on("zoomend", () => {
      setZoomLevel(map.getZoom());
    });
  }, [map]);
  return (
    <>
      {mappedPolygons}
      {mappedFlags}
      {polygons.length > 0 && polygons.length <= 2 && <FitBounds />}
    </>
  );
};

export default MapFlag;
