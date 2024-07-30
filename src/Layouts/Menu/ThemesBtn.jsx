import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../Services/Reducers/ThemeContext";
import { ReactComponent as LightSvg } from "../../Assets/svg/light.svg";
import { ReactComponent as DarkSvg } from "../../Assets/svg/dark.svg";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import { getFieldTranslationByNames } from "../../Services/Utility";
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: ${(props) => (props.isOpen ? " 5px 10px" : "0px")};
  background-color: ${(props) => props.theme.colors.primary}!;
  border-radius: ${(props) => (props.isOpen ? "100px" : "100%")};
  align-items: center;
  justify-content: center;
  min-height: ${(props) => (props.isOpen ? "40px" : "45px")};
`;

const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: ${(props) =>
    props.active ? props.theme.btnActiveTheme : "transparent"};
  color: ${(props) =>
    props.active ? props.theme.btnActiveThemeText : "#868B90"};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  gap: 5px;
  width: 50%;
  padding: 3px 0;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.active ? "0px 4px 11px 0px rgba(0, 0, 0, 0.1)" : "none"};
`;
const Light = styled(LightSvg)`
  width: 18.364px;
  height: 18.364px;
  fill: ${(props) =>
    props.active ? props.theme.btnActiveThemeText : "#868B90"};
`;
const Dark = styled(DarkSvg)`
  width: 18.364px;
  height: 18.364px;
  stroke: ${(props) => (props.active ? "#f8f8f8" : "#868B90")};
`;
const ThemesBtn = () => {
  const { toggleTheme } = useTheme();
  const [isActive, setIsActive] = useState(false);
  const { isOpen } = useMenuContext();
  const handleDarkClick = () => {
    setIsActive(true);
    toggleTheme();
  };

  const handleLightClick = () => {
    setIsActive(false);
    toggleTheme();
  };

  return (
    <Container isOpen={isOpen}>
      {isOpen ? (
        <>
          <Btn active={isActive} onClick={handleDarkClick}>
            {isOpen && getFieldTranslationByNames("central-page", "dark")}
            <Dark active={isActive} />
          </Btn>
          <Btn active={!isActive} onClick={handleLightClick}>
            {isOpen && getFieldTranslationByNames("central-page", "light")}
            <Light active={!isActive} />
          </Btn>
        </>
      ) : (
        <Btn onClick={isActive ? handleLightClick : handleDarkClick}>
          {isActive ? <Dark active={true} /> : <Light active={true} />}
        </Btn>
      )}
    </Container>
  );
};

export default ThemesBtn;
