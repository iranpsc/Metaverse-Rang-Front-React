import React from "react";
import styled from "styled-components";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { getFieldTranslationByNames } from "../../services/Utility";
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
  justify-content: start;
  flex-direction: column;
  max-height: 90%;
  padding: 0 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: "#DDDDDD";
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: "#858585";
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;
const Line = styled.div`
  width: 100%;
  margin-bottom: 10px;
  height: 2px;
  background-color: #aca8a888;
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};

  border-radius: 10px;
  color: ${(props) => props.theme.colors.newColors.otherColors.headerMenu};
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.themeBtn};
  font-size: 12px;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerTextTooltip = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
/*const BtnAllList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  min-height: 36px;
  color: ${(props) => props.theme.colors.newColors.primaryText};
`;*/
const ImgPosition = styled.img`
  width: 100%;
  height: 114px;
  
  border-radius: 12px;
  @media (min-width: 1024px) {
    width: 100%;
    height: 126px;
  }
`;
const Hr = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconText};
  width: 100%;
  padding: 0 15px;
  height: 2px;
  margin-bottom: 10px;
  opacity: 0.4;
`;
const positionsData = [
  {
    src: "https://3drgb.irpsc.com/metaverse/office/OF-602/images/1.png",
    name: "دفتر فروش متاورس رنگ ",
    navigation: "https://3drgb.irpsc.com/metaverse/office/OF-602",
    onlineUser: "20",
  },
  {
    src: "https://3drgb.irpsc.com/metaverse/gym/GE-901/images/1.png",
    name: "باشگاه بدن سازی متاورس رنگ",
    navigation: " https://3drgb.irpsc.com/metaverse/gym/GE-901",
    onlineUser: "14",
  },
  /* {
    src: "https://3drgb.irpsc.com/metaverse/exhibition/EX-301/images/1.png",
    name: "نمایشگاه بین المللی قزوین",
    navigation: "https://3drgb.irpsc.com/metaverse/exhibition/EX-301",
    onlineUser: "4",
  },*/
];

const TooltipContent = ({ imgSrc, name, lang, href, onlineUser }) => {
  return (
    <Tippy
      content={
        <Tooltip lang={lang}>
          {name}
          <Hr />
          <ContainerTextTooltip>
            <Text>{onlineUser} </Text>
            {getFieldTranslationByNames("252")}
          </ContainerTextTooltip>
          <Hr />
          <ContainerTextTooltip>
            <Text>0</Text>
            {getFieldTranslationByNames("253")}
          </ContainerTextTooltip>
        </Tooltip>
      }
      zIndex={10000}
      placement="right-end"
      interactive={true}
      delay={50}
      animation="scale"
    >
      <a href={href} target="_blank">
        <ImgPosition src={imgSrc} />
      </a>
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
              href={position.navigation}
              onlineUser={position.onlineUser}
            />
            {index !== positionsData.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </ContainerList>
      {/*<BtnAllList>
        {getFieldTranslationByNames("251")}
      </BtnAllList>*/}
    </Container>
  );
};

export default ListPositions;
