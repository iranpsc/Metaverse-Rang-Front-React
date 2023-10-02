import React from "react";
import styled from "styled-components";
import LogoIcon from "../../Assets/svg/logoMeta.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";
const Logo = styled.img`
  width: 37px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;
const ContainerText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.p`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 32.4px */
`;
const Details = styled.p`
  color: #939393;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%; /* 25.2px */
`;
const Header = () => {
  return (
    <Container>
      <Logo src={LogoIcon} />
      <ContainerText>
        <Title>{getFieldTranslationByNames("central-page", "meta rgb")}</Title>
        <Details>
          {getFieldTranslationByNames("central-page", "metaverse rang")}
        </Details>
      </ContainerText>
    </Container>
  );
};

export default Header;
