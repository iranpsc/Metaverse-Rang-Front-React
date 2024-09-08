import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../Assets/svg/filter.svg";
import { ReactComponent as LocationIcon } from "../../Assets/svg/location.svg";
import useRequest from "../../Services/Hooks/useRequest";
import { useMapData } from "../../Services/Reducers/mapContext";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { useTranslation } from "react-i18next";
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-radius: 0 5px 5px 0;
  &.active {
    border: ${(props) => `${props.border} 3px solid`};
  }
`;

const IconFilter = styled(FilterIcon)`
  width: 16px;
  cursor: pointer;
  cursor: "not-allowed";
  width: 14px;
  height: 16px;
`;
const IconLocation = styled(LocationIcon)`
  width: 14px;
  height: 16px;
  fill: ${(props) => (props.active ? "#FFC700" : "#868B90")};
  fill-opacity: ${(props) => (props.active ? "1" : "0.5")};
  cursor: pointer;
`;
const TitleFlag = styled.p`
  color: #868b90;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  text-transform: capitalize;
  white-space: nowrap;
  @media (min-width: 1024px) {
    font-size: 17px;
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const createSVG = (color) =>
  `data:image/svg+xml;utf8,<svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7334 0.823747V39.1763C8.7334 33.2923 6.43704 27.6407 2.33308 23.4243C0.477911 21.5183 0.47791 18.4817 2.33308 16.5757C6.43704 12.3593 8.7334 6.70767 8.7334 0.823747Z" fill=
  )}"/></svg>`;
const Tooltip = styled.div`
  width: 146px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  border-radius: 10px;
  color: #868b90;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  ::after {
    content: "";
    position: absolute;
    background: ${(props) => `url('${createSVG(props.theme.tooltipBg)}')`};
    width: 9px;
    height: 40px;
    right: ${(props) => (props.lang == "en" ? "-8px" : "auto")};
    left: ${(props) => (props.lang == "en" ? "auto" : "-8px")};
    rotate: ${(props) => (props.lang == "en" ? "180deg" : "0")};
  }
`;
const BtnFlagMap = () => {
  const { flags, setFlags, polygons, setPolygons } = useMapData();
  const [activeMapIds, setActiveMapIds] = useState([]);
  const [clickState, setClickState] = useState({});
  const { Request } = useRequest();
  const { i18n } = useTranslation();
  useEffect(() => {
    async function fetchMap() {
      const response = await Request("maps");
      setFlags(response.data.data);
    }
    fetchMap();
  }, []);

  const handleClick = (flagId) => {
    const { [flagId]: currentClickState, ...updatedClickState } = clickState;
    if (!currentClickState) {
      if (activeMapIds.length >= 2) {
        return;
      }

      setActiveMapIds((prevActiveMapIds) => [...prevActiveMapIds, flagId]);
      setClickState((prevState) => ({
        ...prevState,
        ...updatedClickState,
        [flagId]: true,
      }));

      handleButtonClick(flagId);
    } else {
      setActiveMapIds((prevActiveMapIds) =>
        prevActiveMapIds.filter((id) => id !== flagId)
      );
      setClickState((prevState) => ({
        ...prevState,
        ...updatedClickState,
        [flagId]: false,
      }));

      handleButtonClick(flagId);
    }
  };
  const handleButtonClick = async (id) => {
    const response = await Request(`maps/${id}/border`);
    const parsedCoordinates = JSON.parse(response.data.data.border_coordinates);

    const existingPolygonIndex = polygons.findIndex(
      (polygon) => polygon.id === id
    );
    if (existingPolygonIndex !== -1) {
      setPolygons((prevPolygons) => {
        const updatedPolygons = [...prevPolygons];
        updatedPolygons.splice(existingPolygonIndex, 1);
        return updatedPolygons;
      });
    } else {
      const newPolygon = {
        id: id,
        coordinates: parsedCoordinates,
      };
      setPolygons((prevPolygons) => [...prevPolygons, newPolygon]);
    }
  };
  return (
    <>
      {flags.map((flag) => (
        <Tippy
          content={<Tooltip lang={i18n.language}>{flag.name}</Tooltip>}
          zIndex={10000}
          placement="right"
          interactive={true}
          delay={50}
          animation="scale"
        >
          <Btn key={flag.id} className={clickState[flag.id] ? "active" : ""}>
            <ContainerIcon>
              <IconFilter></IconFilter>
              <IconLocation
                active={clickState[flag.id]}
                onClick={() => handleClick(flag.id)}
              ></IconLocation>
            </ContainerIcon>
            <TitleFlag>{flag.name}</TitleFlag>
          </Btn>
        </Tippy>
      ))}
    </>
  );
};

export default BtnFlagMap;
