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
  background-color: ${(props) => props.theme.colors.newColors.shades[40]};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.newColors.shades[100]};

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
  { icon: HomeIcon, translationId: 4065, link: "https://rgb.irpsc.com/" },
  {
    icon: NewsIcon,
    translationId: 4072,
    link: "https://rgb.irpsc.com/home-news",
  },
  {
    icon: BlogIcon,
    translationId: 4093,
    link: "https://rgb.irpsc.com/home-blogs",
  },
  {
    icon: ChallengeIcon,
    translationId: 4422,
    link: "https://rgb.irpsc.com/home-competitions",
  },
  {
    icon: TrainingIcon,
    translationId: 6571,
    link: "https://rgb.irpsc.com/trainings",
  },
  {
    icon: AboutIcon,
    translationId: 4107,
    link: "https://rgb.irpsc.com/about",
  },
  {
    icon: ContactIcon,
    translationId: 4114,
    link: "https://rgb.irpsc.com/contact",
  },
  {
    icon: RobotIcon,
    translationId: 6613,
    link: "https://rgb.irpsc.com/version",
  },
  {
    icon: CalendarIcon,
    translationId: 4128,
    link: "https://rgb.irpsc.com/Calendar",
  },
  {
    icon: CitizenIcon,
    translationId: 4135,
    link: "https://rgb.irpsc.com/",
  },
  {
    icon: ViewIcon,
    translationId: 4142,
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
      <DropDownLang />
    </Container>
  );
};

export default BtnsAfterLogin;
