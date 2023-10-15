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
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Services/Hooks/useAuth";
import { useLayoutEffect } from "react";

const Btn = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  gap: 16.865px;
  padding: 0 10px;
  border: none;
  height: 46px;
  filter: ${(props) => (props.disabled ? "opacity(0.5)" : "none")};
  & div {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
  }
  position: ${(props) => (props.isOpen ? "inherit" : "relative")};
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
const ValueBtn = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 78px;
  background: #c30000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: ${(props) => (props.isOpen ? "inherit" : "absolute")};
  left: 1px;
  top: -3px;
`;
const menuItems = [
  { icon: GiftIcon, translationKey: "challenges", navigate: "" },
  {
    icon: AccountSecurityIcon,
    translationKey: "account security",
    navigate: "confirmation",
  },
  {
    icon: CentralSearch,
    translationKey: "central search",
    navigate: "search",
  },
  {
    icon: GlobalStatisticsIcon,
    translationKey: "global statistics",
    navigate: "",
  },
  { icon: FamilyTreeIcon, translationKey: "family tree", navigate: "dynasty" },
  { icon: RobotIcon, translationKey: "vod guide", navigate: "" },
  {
    icon: ProfitIcon,
    translationKey: "accumulated earnings",
    navigate: "hour-profit",
  },
  {
    icon: KycIcon,
    translationKey: "identify verification",
    navigate: "verification",
  },
  { icon: CalendarIcon, translationKey: "calendar", navigate: "" },
  { icon: StoreIcon, translationKey: "store", navigate: "store" },
  {
    icon: NotifIcon,
    translationKey: "notifications",
    navigate: "notifications",
  },
  { icon: ReportIcon, translationKey: "reports", navigate: "report" },
];

const BtnsMenu = () => {
  const { isOpen } = useMenuContext();
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const [user, setUser] = useState();

  useLayoutEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <>
      {menuItems.map((item, index) => (
        <Btn
          key={index}
          isOpen={isOpen}
          onClick={() => navigate(`/metaverse/${item.navigate}`)}
          disabled={item.navigate == ""}
        >
          <div>
            <Icon src={item.icon} />
            <Text isOpen={isOpen}>
              {getFieldTranslationByNames("central-page", item.translationKey)}
            </Text>
          </div>
          {item.translationKey === "accumulated earnings" && user && (
            <ValueBtn isOpen={isOpen}>
              %{user.hourly_profit_time_percentage}
            </ValueBtn>
          )}
          {item.translationKey === "notifications" && user && (
            <ValueBtn isOpen={isOpen}>{user.notifications}</ValueBtn>
          )}
        </Btn>
      ))}
      <DropDownLang />
    </>
  );
};

export default BtnsMenu;
