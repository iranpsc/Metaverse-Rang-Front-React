import React from "react";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../Services/Utility";
import DropDownLang from "../../Components/DropDownLang";
import SingOutIcon from "../../Assets/svg/signOut.svg";
import AccountSecurityIcon from "../../Assets/svg/accountSecurity.svg";
import CentralSearch from "../../Assets/svg/centralSearch.svg";
import GlobalStatisticsIcon from "../../Assets/svg/globalStatistics.svg";
import FamilyTreeIcon from "../../Assets/svg/familyTree.svg";
import RobotIcon from "../../Assets/svg/robot.svg";
import ProfitIcon from "../../Assets/svg/profit.svg";
import KycIcon from "../../Assets/svg/kyc.svg";
import CalendarIcon from "../../Assets/svg/calendar.svg";
import StoreIcon from "../../Assets/svg/store.svg";
import NotifIcon from "../../Assets/svg/notif.svg";
import ReportIcon from "../../Assets/svg/report.svg";
import GiftIcon from "../../Assets/svg/gifts.svg";
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
  { icon: SingOutIcon, translationKey: "sign out" },
  { icon: GiftIcon, translationKey: "challenges" },
  { icon: AccountSecurityIcon, translationKey: "account security" },
  { icon: CentralSearch, translationKey: "central search" },
  { icon: GlobalStatisticsIcon, translationKey: "global statistics" },
  { icon: FamilyTreeIcon, translationKey: "family tree" },
  { icon: RobotIcon, translationKey: "vod guide" },
  { icon: ProfitIcon, translationKey: "accumulated earnings" },
  { icon: KycIcon, translationKey: "identify verification" },
  { icon: CalendarIcon, translationKey: "calendar" },
  { icon: StoreIcon, translationKey: "store" },
  { icon: NotifIcon, translationKey: "notifications" },
  { icon: ReportIcon, translationKey: "reports" },
];

const BtnsMenu = () => {
  const { isOpen } = useMenuContext();
  return (
    <Container>
      {menuItems.map((item, index) => (
        <Btn key={index} isOpen={isOpen}>
          <Icon src={item.icon} />
          <Text isOpen={isOpen}>
            {getFieldTranslationByNames("central-page", item.translationKey)}
          </Text>
        </Btn>
      ))}
      <DropDownLang />
    </Container>
  );
};

export default BtnsMenu;
