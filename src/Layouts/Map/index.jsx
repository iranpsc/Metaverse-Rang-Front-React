import "leaflet/dist/leaflet.css";
import "./MapLayout.css";
import { MapContainer, Polygon, TileLayer, useMap } from "react-leaflet";
import { ScenegraphLayer } from "@deck.gl/mesh-layers";
import { LeafletLayer } from "deck.gl-leaflet";
import { MapView } from "@deck.gl/core";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { createContext } from "react";

import MapPolygons from "./MapPolygons";
import Main from "../Main";
import useAuth from "../../Services/Hooks/useAuth";
import MapFlag from "./MapFlag";
import AdviserIcon from "./Adviser";
import flyToPosition from "./FlyToGift";
import flyToGif from "../../Assets/gif/Flyto.gif";
import ContextMenu from "./ContextMenu/ContextMenu";
import ToolTip from "../../Components/Tooltip";
import Routes from "./Routers";
import useRequest from "../../Services/Hooks/useRequest";

import LocationPin from "../../Assets/gif/location-pin.gif";
import BtnFlagMap from "./BtnFlagMap";
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
export const TransactionContext = createContext();
// This is a functional component named Map.
const Map = () => {
  // A reference to the map container element.
  const mapRef = useRef();
  const [selectedTransaction, setSelectedTransaction] = useState([]);
  // A custom hook to get user authentication details. setUserWithToken function is being destructured from useAuth.
  const { setUserWithToken } = useAuth();
  const [flags, setFlags] = useState([]);
  const [polygons, setPolygons] = useState([]);
  // useEffect hook to set the user with token when the component mounts. An empty dependency array is passed to avoid multiple calls.
  const { Request } = useRequest();
  useEffect(() => {
    setUserWithToken();
    async function fetchMap() {
      const response = await Request("maps");
      setFlags(response.data.data);
    }
    // fetchMap();
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

  const handleButtonClick = async (id) => {
    const response = await Request(`maps/${id}/border`);
    const parsedCoordinates = JSON.parse(response.data.data.border_coordinates);

    // بدست آوردن شاخص اولین ورودی مورد نظر در آرایه
    const existingPolygonIndex = polygons.findIndex(
      (polygon) => polygon.id === id
    );

    if (existingPolygonIndex !== -1) {
      // اگر پلیگان با این id قبلا وجود داشت، آن را حذف کنید
      setPolygons((prevPolygons) => {
        const updatedPolygons = [...prevPolygons];
        updatedPolygons.splice(existingPolygonIndex, 1);
        return updatedPolygons;
      });
    } else {
      // اگر پلیگان با این id وجود نداشت، آن را اضافه کنید
      const newPolygon = {
        id: id,
        coordinates: parsedCoordinates,
      };
      setPolygons((prevPolygons) => [...prevPolygons, newPolygon]);
    }
  };

  return (
    <TransactionContext.Provider
      value={{ selectedTransaction, setSelectedTransaction }}
    >
      <MapContext.Provider value={mapRef}>
        <MapContainer
          center={[36.32, 50.02]} // The initial center of the map at given longitude and latitude.
          zoom={15} // The initial zoom level of the map.
          className="map"
          ref={mapRef} // A reference to the map container element.
          layers={deckLayer} // The deck.gl overlay layer to be added on top of the map.
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" // The source of the tile images for the map.
          />
          {/* 
          <MapPolygons />

          <Main />
         
          <ContextMenu />
          <AdviserIcon />
          <MapFlag polygons={polygons} flags={flags} /> */}
        </MapContainer>
        {/* <BtnFlagMap flags={flags} handleButtonClick={handleButtonClick} /> */}
        <Routes />
      </MapContext.Provider>
    </TransactionContext.Provider>
  );
};

export default Map;
