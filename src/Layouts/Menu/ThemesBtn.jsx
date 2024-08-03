import React, { useState, useEffect } from "react";
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.themeBtn};
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
    props.active
      ? props.theme.colors.newColors.otherColors.menuBg
      : "transparent"};
  color: ${(props) => (props.active && props.isActive ? "red" : "#868B90")};
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
    props.active && props.isActive
      ? props.theme.colors.newColors.shades[20]
      : "#868B90"};
`;

const Dark = styled(DarkSvg)`
  width: 18.364px;
  height: 18.364px;
  stroke: ${(props) =>
    props.active ? props.theme.colors.newColors.shades[100] : "#868B90"};
`;

const ThemesBtn = () => {
  const { toggleTheme, theme } = useTheme();
  const [isActive, setIsActive] = useState(theme === "dark");
  const { isOpen } = useMenuContext();

  useEffect(() => {
    setIsActive(theme === "dark");
  }, [theme]);

  const handleDarkClick = () => {
    if (theme !== "dark") {
      setIsActive(true);
      toggleTheme();
    }
  };

  const handleLightClick = () => {
    if (theme !== "light") {
      setIsActive(false);
      toggleTheme();
    }
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
        <Btn
          onClick={isActive ? handleLightClick : handleDarkClick}
          isActive={isActive}
        >
          {isActive ? (
            <Dark active={true} dark={true} />
          ) : (
            <Light active={true} />
          )}
        </Btn>
      )}
    </Container>
  );
};

export default ThemesBtn;
