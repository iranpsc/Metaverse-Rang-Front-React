import React from "react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { useMap } from "react-map-gl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const IconWrapper = styled.div`
  border-radius: 60px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.newColors.primaryText};
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 8px 12px 3px 15px;
  gap: 5px;
  cursor: pointer;
  svg {
    font-size: 23px;
    padding-top: 5px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  gap: 15px;
`;

// Function to calculate the centroid of a polygon
function calculatePolygonCentroid(vertices) {
  const numVertices = vertices.length;
  let sumX = 0;
  let sumY = 0;

  for (let i = 0; i < numVertices; i++) {
    sumX += parseFloat(vertices[i].x);
    sumY += parseFloat(vertices[i].y);
  }

  const centroidX = sumX / numVertices;
  const centroidY = sumY / numVertices;

  return { x: centroidX, y: centroidY };
}

// Function to fly the map to a specific position and add a marker
function flyToPosition({ latitude, longitude, mapRef, zoom = 17 }) {
  const map = mapRef.default.getMap();

  // Remove any existing location icon
  if (map.getSource("location-icon")) {
    map.removeLayer("location-icon-layer");
    map.removeSource("location-icon");
  }

  // Add a new location icon
  map.loadImage(
    "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
    (error, image) => {
      if (error) throw error;
      if (!map.hasImage("custom-marker")) map.addImage("custom-marker", image);

      map.addSource("location-icon", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
        },
      });

      map.addLayer({
        id: "location-icon-layer",
        type: "symbol",
        source: "location-icon",
        layout: {
          "icon-image": "custom-marker",
          "icon-size": 0.65,
          "icon-offset": [0, -15], // Adjust the icon position
        },
      });
    }
  );

  // Fly to the specified location
  map.flyTo({
    center: [longitude, latitude],
    zoom: zoom,
    bearing: 0,
    essential: true,
    speed: 1.2,
    curve: 1.42,
  });

  // Check if the position and zoom level are correct
  const checkPosition = () => {
    const currentZoom = map.getZoom();
    const currentCenter = map.getCenter();

    if (
      Math.abs(currentZoom - zoom) < 0.1 &&
      Math.abs(currentCenter.lng - longitude) < 0.0001 &&
      Math.abs(currentCenter.lat - latitude) < 0.0001
    ) {
      // If the position is correct, start rotating the camera
      rotateCamera();
    } else {
      // If not, check again
      requestAnimationFrame(checkPosition);
    }
  };

  // Function to rotate the camera
  let rotation = 0;
  const rotateCamera = () => {
    rotation += 3; // Rotation per frame
    if (rotation <= 360) {
      map.rotateTo(rotation, { duration: 100 }); // Set rotation amount and speed
      requestAnimationFrame(rotateCamera);
    }
  };

  // Schedule the position check to start after flying
  setTimeout(() => {
    checkPosition();
  }, 3000);
}

const Buttons = ({ item }) => {
  const Navigate = useNavigate();
  const center = calculatePolygonCentroid(item?.coordinates);
  const mapRef = useMap();

  const items = [
    {
      id: 1,
      label: getFieldTranslationByNames("search-in-metarang", "buy"),
      icon: <LuShoppingCart />,
      onClick: () =>
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1 },
        }),
    },
    {
      id: 2,
      label: getFieldTranslationByNames("search-in-metarang", "suggested"),
      icon: <HiOutlineCurrencyDollar />,
      onClick: () => {
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1, activeTab: 1 },
        });
      },
    },
    {
      id: 3,
      label: getFieldTranslationByNames("search-in-metarang", "location"),
      icon: <HiOutlineLocationMarker />,
      onClick: () => {
        flyToPosition({
          latitude: center.y,
          longitude: center.x,
          mapRef: mapRef,
          zoom: 17,
        });
      },
    },
  ];

  return (
    <Container>
      {items.map((item) => (
        <IconWrapper key={item.id} onClick={item.onClick}>
          <span>{item.icon}</span>
          <h2>{item.label}</h2>
        </IconWrapper>
      ))}
    </Container>
  );
};

export default Buttons;
