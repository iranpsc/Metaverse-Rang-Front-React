import React from "react";
import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { useMap } from "react-map-gl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { flyToMapPosition } from "../../../../services/Utility/flyToMapPosition";
import { calculatePolygonCentroid  } from "../../../../services/Utility/calculatePolygonCentroid";

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



const Buttons = ({ item }) => {
  const Navigate = useNavigate();
  const center = calculatePolygonCentroid(item?.coordinates);
  const mapRef = useMap();
  const items = [
    {
      id: 1,
      label: getFieldTranslationByNames("353"),
      icon: <LuShoppingCart />,
      onClick: () =>
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1 },
        }),
    },
    {
      id: 2,
      label: getFieldTranslationByNames("472"),
      icon: <HiOutlineCurrencyDollar />,
      onClick: () => {
        Navigate(`/metaverse/feature/${item?.id}`, {
          state: { activePageNumber: 1, activeTab: 1 },
        });
      },
    },
    {
      id: 3,
      label: getFieldTranslationByNames("473"),
      icon: <HiOutlineLocationMarker />,
      onClick: () => {
        flyToMapPosition({
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
