import React from "react";
import styled from "styled-components";
import one from "../../Assets/images/Frame 3801.png";
import Tow from "../../Assets/images/Frame 3802.png";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useTranslation } from "react-i18next";

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
    background-color: ${(props) => props.theme.colors.primary};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
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
const createSVG = (color) =>
  `data:image/svg+xml;utf8,<svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7334 0.823747V39.1763C8.7334 33.2923 6.43704 27.6407 2.33308 23.4243C0.477911 21.5183 0.47791 18.4817 2.33308 16.5757C6.43704 12.3593 8.7334 6.70767 8.7334 0.823747Z" fill="/></svg>`;

const Tooltip = styled.div`
  width: 262px;
  height: 161px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  color: #868b90;
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
  gap: 3px;

  ::after {
    content: "";
    position: absolute;
    background: ${(props) => `url('${createSVG(props.theme.tooltipBg)}')`};
    width: 9px;
    height: 40px;
    right: ${(props) => (props.lang == "en" ? "-8px" : "auto")};
    left: ${(props) => (props.lang == "en" ? "auto" : "-8px")};
    rotate: ${(props) => (props.lang == "en" ? "180deg" : "0")};
    top: 10px;
  }
`;

const Text = styled.p`
  background-color: ${(props) => props.theme.colors.primary};
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
  background-color: ${(props) => props.theme.colors.primary};
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
const positionsData = [
  { src: one, name: "مزار شهدای گمنام قزوین" },
  { src: Tow, name: "دفتر" },
  { src: one, name: "قزوین" },
  { src: Tow, name: "قشم" },
];

const TooltipContent = ({ imgSrc, name, lang }) => {
  return (
    <Tippy
      content={
        <Tooltip lang={lang}>
          {name}
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
      <ImgPosition src={imgSrc} />
    </Tippy>
  );
};

const ListPositions = () => {
  const { i18n } = useTranslation();

  return (
    <Container>
      <ContainerList>
        {positionsData.map((position, index) => (
          <React.Fragment key={index}>
            <TooltipContent
              imgSrc={position.src}
              name={position.name}
              lang={i18n.language}
            />
            {index !== positionsData.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </ContainerList>
      <BtnAllList>
        {getFieldTranslationByNames("central-page", "complete list")}
      </BtnAllList>
    </Container>
  );
};

export default ListPositions;
