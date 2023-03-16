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

const IconFlyTo = styled.img`
  position: absolute;
  z-index: 500;
  top:50%;
  right: 0px;
  width: 116px;
  cursor: pointer;
`;

export default function Map() {
  const mapRef = useRef();

  const { setUserWithToken } = useAuth();

  useEffect(() => {
    setUserWithToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const flyToPosition = () => {
    mapRef.current.flyTo([26.264711, 55.305572], 14);
  };

  const deckLayer = new LeafletLayer({
    views: [
      new MapView({
        controller: true,
      }),
    ],

    layers: [
      new ScenegraphLayer({
        id: "scenegraph-layer",
        data: [0],
        pickable: false,
        scenegraph: "house.gltf",
        getOrientation: (d) => [0, 0, 90],
        getPosition: (d) => [50.0639, 36.32746],
        sizeScale: 1,
        _lighting: "pbr",
      }),
    ],
  });

  return (
    <MapContainer
      center={[36.32, 50.02]}
      zoom={15}
      style={{ width: "100%", height: "100vh" }}
      ref={mapRef}
      layers={deckLayer}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

      <MapPolygons />
      <Main />

      <ContextMenu />
      <AdviserIcon />
      <IconFlyTo src={flyToGif} onClick={flyToPosition} />
    </MapContainer>
  );
}
