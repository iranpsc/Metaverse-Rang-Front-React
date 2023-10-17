import React from "react";
import styled from "styled-components";
import LogoIcon from "../../Assets/svg/logoMeta.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useMenuContext } from "../../Services/Reducers/MenuContext";

const Logo = styled.img`
  width: 37px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "start" : "center")};
  gap: 5px;
  width: 100%;
`;

const ContainerText = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.p`
  color: ${(props) => props.theme.headerMenuColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
`;

const Details = styled.p`
  color: #939393;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
`;
const BtnOpenCloseMenu = styled.button`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aquamarine;
  position: ${(props) => (props.isOpen ? "inherit" : "absolute")};
  right: 5.12%;
  top: 3.3%;
  z-index: 1200;
`;
const Header = () => {
  const { isOpen, toggleMenu } = useMenuContext();

  return (
    <Container isOpen={isOpen}>
      <Logo src={LogoIcon} />
      <ContainerText isOpen={isOpen}>
        <Title>{getFieldTranslationByNames("central-page", "meta rgb")}</Title>
        <Details>
          {getFieldTranslationByNames("central-page", "metaverse rang")}
        </Details>
      </ContainerText>
      <BtnOpenCloseMenu onClick={toggleMenu} isOpen={isOpen} />
    </Container>
  );
};

export default Header;
