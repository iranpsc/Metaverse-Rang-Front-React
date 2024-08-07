import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { useMap } from "react-map-gl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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

function flyToPosition({ latitude, longitude, mapRef, zoom = 14 }) {
  mapRef.default.flyTo({
    center: [longitude, latitude],
    zoom: zoom,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  });
}

function rotateCamera(map, duration = 3000) {
  const startRotation = map.default.getBearing();
  const targetRotation = startRotation + 360;
  let start = null;

  const rotate = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const rotation = startRotation + (progress / duration) * 360;

    map.default.rotateTo(rotation, { duration: 0 });

    if (progress < duration) {
      requestAnimationFrame(rotate);
    } else {
      map.default.rotateTo(targetRotation, { duration: 0 }); // Ensure exact final rotation
    }
  };

  requestAnimationFrame(rotate);
}

const Buttons = ({ item }) => {
  const Navigate = useNavigate();
  const center = calculatePolygonCentroid(item?.coordinates);
  const map = useMap();
  console.log(map);
  const items = [
    {
      id: 1,
      label: "خرید",
      icon: <LuShoppingCart />,
      onClick: () =>
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1 },
        }),
    },
    {
      id: 2,
      label: "پیشنهاد",
      icon: <HiOutlineCurrencyDollar />,
      onClick: () => {
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1, activeTab: 1 },
        });
      },
    },
    {
      id: 3,
      label: "لوکیشن",
      icon: <HiOutlineLocationMarker />,
      onClick: () => {
        flyToPosition({
          latitude: center.y,
          longitude: center.x,
          mapRef: map,
          zoom: 17,
        });
        rotateCamera(map); // اضافه کردن چرخش دوربین
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
