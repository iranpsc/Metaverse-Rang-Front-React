import React from "react";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../Services/Utility";
import DropDownLang from "../../Components/DropDownLang";
import HomeIcon from "../../Assets/svg/home.svg";
import NewsIcon from "../../Assets/svg/news.svg";
import BlogIcon from "../../Assets/svg/blogs.svg";
import ChallengeIcon from "../../Assets/svg/challenge.svg";
import TrainingIcon from "../../Assets/svg/training.svg";
import RobotIcon from "../../Assets/svg/robot.svg";
import AboutIcon from "../../Assets/svg/about.svg";
import ContactIcon from "../../Assets/svg/contact.svg";
import CitizenIcon from "../../Assets/svg/profileMember.svg";
import ViewIcon from "../../Assets/svg/view.svg";
import CalendarIcon from "../../Assets/svg/calendar.svg";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
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
  margin-bottom: auto;
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
const createSVG = (color) =>
  `data:image/svg+xml;utf8,<svg width="9" height="40" viewBox="0 0 9 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.7334 0.823747V39.1763C8.7334 33.2923 6.43704 27.6407 2.33308 23.4243C0.477911 21.5183 0.47791 18.4817 2.33308 16.5757C6.43704 12.3593 8.7334 6.70767 8.7334 0.823747Z" fill="${color.replace(
    "#",
    "%23"
  )}"/></svg>`;
const Tooltip = styled.div`
  width: 146px;
  height: 40px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => props.theme.tooltipSmBg};
  border-radius: 10px;
  color: #868b90;
  text-align: right;
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
  { icon: HomeIcon, translationKey: "home", link: "https://rgb.irpsc.com/" },
  {
    icon: NewsIcon,
    translationKey: "news",
    link: "https://rgb.irpsc.com/home-news",
  },
  {
    icon: BlogIcon,
    translationKey: "articles",
    link: "https://rgb.irpsc.com/home-blogs",
  },
  {
    icon: ChallengeIcon,
    translationKey: "competitions",
    link: "https://rgb.irpsc.com/home-competitions",
  },
  {
    icon: TrainingIcon,
    translationKey: "trainings",
    link: "https://rgb.irpsc.com/trainings",
  },
  {
    icon: AboutIcon,
    translationKey: "about",
    link: "https://rgb.irpsc.com/about",
  },
  {
    icon: ContactIcon,
    translationKey: "contact",
    link: "https://rgb.irpsc.com/contact",
  },
  {
    icon: RobotIcon,
    translationKey: "version",
    link: "https://rgb.irpsc.com/version",
  },
  {
    icon: CalendarIcon,
    translationKey: "calendar",
    link: "https://rgb.irpsc.com/Calendar",
  },
  {
    icon: CitizenIcon,
    translationKey: "citizens",
    link: "https://rgb.irpsc.com/",
  },
  {
    icon: ViewIcon,
    translationKey: "overview",
    link: "https://rgb.irpsc.com/overview",
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
              {getFieldTranslationByNames("central-page", item.translationKey)}
            </Tooltip>
          }
          zIndex={10000}
          placement="left"
          interactive={true}
          delay={50}
          animation="scale"
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
              {getFieldTranslationByNames("central-page", item.translationKey)}
            </Text>
          </Btn>
        </Tippy>
      ))}
      <DropDownLang />
    </Container>
  );
};

export default BtnsAfterLogin;
