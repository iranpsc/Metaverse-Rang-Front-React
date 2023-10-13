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
`;

const Btn = styled.button`
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

const menuItems = [
  { icon: HomeIcon, translationKey: "home" },
  { icon: NewsIcon, translationKey: "news" },
  { icon: BlogIcon, translationKey: "articles" },
  { icon: ChallengeIcon, translationKey: "competitions" },
  { icon: TrainingIcon, translationKey: "trainings" },
  { icon: AboutIcon, translationKey: "about" },
  { icon: ContactIcon, translationKey: "contact us" },
  { icon: RobotIcon, translationKey: "accumulated earnings" },
  { icon: CalendarIcon, translationKey: "identify verification" },
  { icon: CitizenIcon, translationKey: "calendar" },
  { icon: ViewIcon, translationKey: "calendar" },
];

const BtnsAfterLogin = () => {
  const { isOpen } = useMenuContext();
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Btn key={index} isOpen={isOpen}>
          <Icon src={item.icon} />
          <Text isOpen={isOpen}>
            {getFieldTranslationByNames("head-menu", item.translationKey)}
          </Text>
        </Btn>
      ))}
      <DropDownLang />
    </Container>
  );
};

export default BtnsAfterLogin;
