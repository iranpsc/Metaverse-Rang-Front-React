import "leaflet/dist/leaflet.css";
import "./MapLayout.css";

import { MapContainer, TileLayer } from "react-leaflet";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";
import { LeafletLayer } from "deck.gl-leaflet";
import { MapView } from "@deck.gl/core";
import MapPolygons from "./MapPolygons";
import Main from "../Main";
import useAuth from "../../Services/Hooks/useAuth";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import flyToGif from "../../Assets/gif/Flyto.gif";
import ContextMenu from "./ContextMenu/ContextMenu";
import AdviserIcon from "./Adviser";
import ToolTip from "../../Components/Tooltip";
import flyToPosition from "./FlyToGift";
import LocationPin from "../../Assets/gif/location-pin.gif";

import { createContext } from "react";
import Routes from "./Routers";
const IconFlyTo = styled.img`
  position: absolute;
  z-index: 500;
  top: 56%;
  right: 0px;
  width: 100px;
  aspect-ratio: 1/1;
  cursor: pointer;
  @media (min-width: 1536px) {
    top: 50%;
  }
`;
export const MapContext = createContext();
// This is a functional component named Map.
const Map = () => {
  // A reference to the map container element.
  const mapRef = useRef();

  // A custom hook to get user authentication details. setUserWithToken function is being destructured from useAuth.
  const { setUserWithToken } = useAuth();

  // useEffect hook to set the user with token when the component mounts. An empty dependency array is passed to avoid multiple calls.
  useEffect(() => {
    setUserWithToken();
  }, []);

  // A LeafletLayer component that represents the deck.gl overlay for the map.
  const deckLayer = new LeafletLayer({
    views: [
      // A MapView instance is created with controller property set to true.
      new MapView({
        controller: true,
      }),
    ],

    layers: [
      // A ScenegraphLayer instance that displays a glTF model on the map.
      new ScenegraphLayer({
        id: "scenegraph-layer",
        data: [0],
        pickable: false,
        scenegraph: "house.gltf", // The source of the glTF model file.
        getOrientation: (d) => [0, 0, 90],
        getPosition: (d) => [50.0639, 36.32746], // The longitude and latitude coordinates where the model should be placed.
        sizeScale: 1,
        _lighting: "pbr", // The type of lighting to apply to the model.
      }),
    ],
  });

  // Return a MapContainer component that renders the leaflet map.
  return (
    <MapContext.Provider value={mapRef}>
      <MapContainer
        center={[36.32, 50.02]} // The initial center of the map at given longitude and latitude.
        zoom={15} // The initial zoom level of the map.
        style={{ width: "100%", height: "100vh" }}
        ref={mapRef} // A reference to the map container element.
        layers={deckLayer} // The deck.gl overlay layer to be added on top of the map.
      >
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" // The source of the tile images for the map.
          options={{
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }}
        />
        {/* A MapPolygons component */}
        <MapPolygons />
        {/* A Main component */}
        <Main />
        {/* A ContextMenu component */}
        <ContextMenu />
        {/* An AdviserIcon component */}
        <AdviserIcon />
        {/* A ToolTip component that renders an icon which, when clicked, adjusts the map's position and displays a tooltip. */}
        <ToolTip
          Chidren={
            <IconFlyTo
              src={flyToGif}
              onClick={() =>
                flyToPosition({
                  latitude: 26.264711,
                  longitude: 55.305572,
                  icon: "https://cdn-icons-png.flaticon.com/512/3549/3549693.png",
                  mapRe: mapRef,
                  zoom: 17,
                })
              }
            />
          }
          TitleToltip={"تنب بزرگ"}
          ContentToltip={"برای انتقال به تنب بزرگ کلیک کنید"}
          classNamePosstion={"tw-flyto"}
        />
      </MapContainer>
        <Routes />
    </MapContext.Provider>
  );
};

export default Map;
