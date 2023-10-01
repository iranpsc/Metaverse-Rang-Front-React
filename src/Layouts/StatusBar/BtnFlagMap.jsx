import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ReactComponent as FilterIcon } from "../../Assets/svg/filter.svg";
import { ReactComponent as LocationIcon } from "../../Assets/svg/location.svg";
import useRequest from "../../Services/Hooks/useRequest";

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
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
`;
const IconLocation = styled(LocationIcon)`
  width: 16px;
  fill: ${(props) => (props.active ? "#FFC700" : "#868B90")};
  fill-opacity: ${(props) => (props.active ? "1" : "0.5")};
  cursor: pointer;
`;
const TitleFlag = styled.p`
  color: #868b90;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  text-transform: capitalize;
  white-space: nowrap;
  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;
const ContainerIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const BtnFlagMap = ({ handleButtonClick }) => {
  const [flags, setFlags] = useState([]);
  const [activeMapIds, setActiveMapIds] = useState([]);
  const [clickState, setClickState] = useState({});
  const { Request } = useRequest();
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

  return (
    <>
      {flags.map((flag) => (
        <Btn key={flag.id} className={clickState[flag.id] ? "active" : ""}>
          <ContainerIcon>
            <IconFilter></IconFilter>
            <IconLocation
              active={clickState[flag.id]}
              onClick={() => handleClick(flag.id)}
            ></IconLocation>
          </ContainerIcon>
          <TitleFlag>
            {flag.name.length > 4 ? "..." + flag.name.slice(0, 4) : flag.name}
          </TitleFlag>
        </Btn>
      ))}
    </>
  );
};

export default BtnFlagMap;
