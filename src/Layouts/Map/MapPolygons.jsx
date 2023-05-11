//Importing required modules and components
import { memo, useEffect, useState } from "react";
import { Polygon, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router";
import { BORDER_COLORS } from "../../Services/Constants/BorderColors";
import { POLYGON_COLORS } from "../../Services/Constants/PolygonColors";
import useRequest from "../../Services/Hooks/useRequest";

//Defining a component MapPolygons as a memoized function
const MapPolygons = memo(() => {
  //Declaring state variables using useState hook
  const [features, setFeatures] = useState([]); //An array of features on the map
  const [zoom, setZoom] = useState(15); //The zoom level of the map
  const [bounds, setBounds] = useState(null); //The bounds of the map

  //Custom hook for handling API requests
  const { Request } = useRequest();

  //Custom hook for handling navigation
  const Navigate = useNavigate();

  //Custom hook for listening to map events
  const MapEvents = useMapEvents({
    //Updating the zoom level on zoomend event
    zoomend: () => {
      setZoom(MapEvents.getZoom());
    },
    //Updating the bounds if current zoom is greater or equal to 16
    moveend: () => {
      if (zoom >= 16) {
        setBounds(MapEvents.getBounds());
      }
    },
  });

  //A side effect hook for updating the features state whenever feature status changes
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

  //A side effect hook for updating the features state whenever bounds changes
  useEffect(() => {
    if (bounds) { //Checking if bounds is not null
      Request( //Sending API request to get features data
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
              coordinate.y,
              coordinate.x,
            ]),
          }); //Parsing and formatting the features data and pushing it into the array
        }

        setFeatures(features); //Updating the features state with new data
      });
    }
  }, [bounds]);

  return (
    <>
      {zoom >= 17 && //Rendering a Polygon component for each feature in the features array if zoom level is greater or equal to 17
        features.map((feature) => (
          <Polygon
            eventHandlers={{
              click: () => Navigate(`/metaverse/feature/${feature.id}`), //Handling click event and navigating to the feature detail page
            }}
            key={feature.id}
            pathOptions={{
              color: BORDER_COLORS[feature.rgb], //Setting border color based on rgb value of the feature
              fillColor: POLYGON_COLORS[feature.rgb], //Setting fill color based on rgb value of the feature
              fillOpacity: 0.5, //Setting fill opacity to 0.5
            }}
            positions={feature.coordinates} //Passing an array of coordinates to the Polygon component
          />
        ))}
    </>
  );
});

export default MapPolygons;
