import React from "react";
import styled from "styled-components";
import one from "../../Assets/images/Frame 3801.png";
import Tow from "../../Assets/images/Frame 3802.png";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 5px;
`;
const ContainerList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  flex-direction: column;
  max-height: 90%;
  gap: 5px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollColor};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000; // این رنگ را به یک رنگ با کنتراست بیشتر مثل مشکی تغییر دهید
`;
const Tooltip = styled.div`
  width: 262px;
  height: 161px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => props.theme.tooltipBg};
  border-radius: 10px;
  color: #868b90;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  gap: 3px;
`;
const Text = styled.p`
  background-color: ${(props) => props.theme.tooltipBadge};
  font-size: 12px;
  padding: 0px 8px;
  border-radius: 78px;
`;
const ContainerTextTooltip = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
const BtnAllList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.btnListPosition};
  min-height: 36px;
  color: #868b90;
`;
const ImgPosition = styled.img`
  width: 100%;
  height: 114px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 126px;
  }
`;
const ListPositions = () => {
  return (
    <Container>
      <ContainerList>
        <Tippy
          content={
            <Tooltip>
              مزار شهدای گمنام قزوین
              <ContainerTextTooltip>
                {getFieldTranslationByNames("central-page", "people online")}
                <Text>200 نفر آنلاین</Text>
              </ContainerTextTooltip>
              <ContainerTextTooltip>
                {getFieldTranslationByNames("central-page", "entrance fee")}
                <Text> 300.000</Text>
              </ContainerTextTooltip>
            </Tooltip>
          }
          zIndex={10000}
          placement="right-end"
          interactive={true}
          delay={50}
          animation="scale"
        >
          <ImgPosition src={one} />
        </Tippy>
        <Line />
        <ImgPosition src={Tow} />
        <Line />
        <ImgPosition src={one} />
        <Line />
        <ImgPosition src={Tow} />
        <Line />
      </ContainerList>
      <BtnAllList>
        {getFieldTranslationByNames("central-page", "complete list")}
      </BtnAllList>
    </Container>
  );
};

export default ListPositions;
