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
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Tippy
          content={
            <Tooltip>
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
