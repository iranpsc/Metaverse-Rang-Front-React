//Importing required modules and components
import { memo, useEffect, useState } from "react";
import { BORDER_COLORS } from "../../Services/Constants/BorderColors";
import { POLYGON_COLORS } from "../../Services/Constants/PolygonColors";
import useRequest from "../../Services/Hooks/useRequest";
import { Layer, Source, useMap } from "react-map-gl";

//Defining a component MapPolygons as a memoized function
const MapPolygons = () => {
  //Declaring state variables using useState hook
  const map = useMap();
  const bounds = map.current.getBounds();
  const [features, setFeatures] = useState([]); //An array of features on the map
  const [zoom, setZoom] = useState(map.current.getZoom()); //The zoom level of the map
  //Custom hook for handling API requests
  const { Request } = useRequest();

  useEffect(() => {
    const handleViewportChange = () => {
      setZoom(map.current.getZoom());
    };

    map.current.on("zoomend", handleViewportChange);

    return () => {
      map.current.off("zoomend", handleViewportChange);
    };
  }, [map]);

  useEffect(() => {
    window.Echo.channel("feature-status").listen(
      ".feature-status-changed",
      (e) => {
        const data = [];
        for (const feature of features) {
          if (parseInt(feature.id) === parseInt(e.data.id)) {
            feature.rgb = e.data.rgb;
          }
          data.push(feature);
        }

        setFeatures(data); //Updating the features state with new data
      }
    );
  }, [features]);

  // //A side effect hook for updating the features state whenever bounds changes
  useEffect(() => {
    if (bounds.getSouthWest().lng && zoom >= 15) {
      //Checking if bounds is not null
      Request(
        //Sending API request to get features data
        `features?points[]=${bounds.getSouthWest().lng},${
          bounds.getSouthWest().lat
        }&points[]=${bounds.getSouthEast().lng},${
          bounds.getSouthEast().lat
        }&points[]=${bounds.getNorthWest().lng},${
          bounds.getNorthWest().lat
        }&points[]=${bounds.getNorthEast().lng},${bounds.getNorthEast().lat}`
      ).then((response) => {
        const features = []; //An empty array for storing features data
        for (const feature of response?.data?.data) {
          features.push({
            id: feature?.geometry?.feature_id,
            rgb: feature?.properties?.rgb,
            coordinates: feature?.geometry?.coordinates.map((coordinate) => [
              parseFloat(coordinate.x),
              parseFloat(coordinate.y),
            ]),
          }); //Parsing and formatting the features data and pushing it into the array
        }

        setFeatures(features); //Updating the features state with new data
      });
    }
  }, [bounds.getSouthWest().lng]);

  return (
    <>
      {zoom >= 15 && (
        <Source
          id="polygons"
          type="geojson"
          data={{
            type: "FeatureCollection",
            features: features.map((polygon) => ({
              type: "Feature",
              properties: {
                id: polygon.id,
                fill: POLYGON_COLORS[polygon.rgb],
                border: BORDER_COLORS[polygon.rgb],
              },
              geometry: {
                type: "Polygon",
                coordinates: [polygon.coordinates],
              },
            })),
          }}
        >
          <Layer
            id="polygon-fill-layer"
            type="fill"
            paint={{
              "fill-color": ["get", "fill"],
            }}
          />
          <Layer
            id="polygon-outline-layer"
            type="line"
            paint={{
              "line-color": ["get", "border"],
              "line-width": 3,
            }}
          />
        </Source>
      )}
    </>
  );
};

export default MapPolygons;
