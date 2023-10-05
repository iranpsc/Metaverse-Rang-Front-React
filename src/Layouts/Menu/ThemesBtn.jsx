import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../Services/Reducers/ThemeContext";
import { ReactComponent as LightSvg } from "../../Assets/svg/light.svg";
import { ReactComponent as DarkSvg } from "../../Assets/svg/dark.svg";
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 10px;
  background-color: #000;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: ${(props) => (props.active ? "#1a1a18" : "transparent")};
  color: ${(props) => (props.active ? "#f8f8f8" : "#868B90")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  gap: 5px;
  width: 50%;
  padding: 3px 0;
  cursor: pointer;
  box-shadow: 0px 4px 11px 0px rgba(0, 0, 0, 0.1);
`;
const Light = styled(LightSvg)`
  width: 18.364px;
  height: 18.364px;
  fill: ${(props) => (props.active ? "#f8f8f8" : "#868B90")};
`;
const Dark = styled(DarkSvg)`
  width: 18.364px;
  height: 18.364px;
  stroke: ${(props) => (props.active ? "#f8f8f8" : "#868B90")};
`;
const ThemesBtn = () => {
  const { themes, toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(themes === "dark");

  const handleDarkClick = () => {
    setIsActive(true);
    toggleTheme();
  };

  const handleLightClick = () => {
    setIsActive(false);
    toggleTheme();
  };

  return (
    <Container>
      <Btn active={isActive} onClick={handleDarkClick}>
        تیره
        <Dark active={isActive} />
      </Btn>
      <Btn active={!isActive} onClick={handleLightClick}>
        روشن
        <Light active={!isActive} />
      </Btn>
    </Container>
  );
};

export default ThemesBtn;
