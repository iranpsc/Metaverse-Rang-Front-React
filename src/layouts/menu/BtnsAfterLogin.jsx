import React from "react";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../services/Utility";
import HomeIcon from "../../assets/svg/home.svg";
import NewsIcon from "../../assets/svg/news.svg";
import BlogIcon from "../../assets/svg/blogs.svg";
import ChallengeIcon from "../../assets/svg/challenge.svg";
import TrainingIcon from "../../assets/svg/training.svg";
import RobotIcon from "../../assets/svg/robot.svg";
import AboutIcon from "../../assets/svg/about.svg";
import ContactIcon from "../../assets/svg/contact.svg";
import CitizenIcon from "../../assets/svg/profileMember.svg";
import ViewIcon from "../../assets/svg/view.svg";
import CalendarIcon from "../../assets/svg/calendar.svg";
import { useMenuContext } from "../../services/reducers/MenuContext";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  overflow-y: auto;

  /* Scrollbar styles for this component */
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
  margin-bottom: auto;
  margin-top: 25px;
`;

const Btn = styled.a`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "start" : "center")};
  gap: 16.865px;
  padding: 0 10px;
  border: none;
  height: 46px;
`;

const Icon = styled.img`
  width: 20px;
  height: 40px;
`;

const Text = styled.p`
  color: #868b90;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  font-size: 14px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const createSVG = (color) => ``;
const Tooltip = styled.div`
  width: 146px;
  height: 40px;
  display: none;
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
  @media (min-width: 1024px) {
    display: flex;
  }
  ::after {
    content: "";
    position: absolute;
    background: ${(props) => `url('${createSVG(props.theme.tooltipBg)}')`};
    width: 9px;
    height: 40px;
    right: -8px;
    left: -8px;
    rotate: ${(props) => (props.lang == "en" ? "0" : "180deg")};
  }
`;
const menuItems = [
  { icon: HomeIcon, translationId: "149", link: "https://rgb.irpsc.com/" },
  {
    icon: NewsIcon,
    translationId: "255",
    link: "https://metatimes.ir/",
  },
  {
    icon: BlogIcon,
    translationId: "258",
    link: "https://rgb.irpsc.com/fa/articles",
  },
  // {
  //   icon: ChallengeIcon,
  //   translationId: "297",
  //   link: "https://rgb.irpsc.com/home-competitions",
  // },
  {
    icon: TrainingIcon,
    translationId: "165",
    link: "https://rgb.irpsc.com/fa/education",
  },
  {
    icon: AboutIcon,
    translationId: "259",
    link: "https://rgb.irpsc.com/fa/about",
  },
  {
    icon: ContactIcon,
    translationId: "260",
    link: "https://rgb.irpsc.com/fa/contact",
  },
  {
    icon: RobotIcon,
    translationId: "574",
    link: "https://rgb.irpsc.com/fa/version",
  },
  {
    icon: CalendarIcon,
    translationId: "262",
    link: "https://rgb.irpsc.com/fa/calendar",
  },
  {
    icon: CitizenIcon,
    translationId: "263",
    link: "https://rgb.irpsc.com/fa/citizens",
  },
];

const BtnsAfterLogin = () => {
  const { isOpen } = useMenuContext();
  const lang = useTranslation();
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Tippy
          content={
            <Tooltip lang={lang.i18n.language}>
              {getFieldTranslationByNames(item.translationId)}
            </Tooltip>
          }
          zIndex={10000}
          placement="left"
          interactive={true}
          delay={50}
          animation="scale"
          key={index}
        >
          <Btn
            key={index}
            isOpen={isOpen}
            href={item.link}
            target={"_blank"}
            rel="noreferrer"
          >
            <Icon src={item.icon} />
            <Text isOpen={isOpen}>
              {getFieldTranslationByNames(item.translationId)}
            </Text>
          </Btn>
        </Tippy>
      ))}
    </Container>
  );
};

export default BtnsAfterLogin;
