import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../services/Utility";
import DropDownLang from "../../Components/DropDownLang";
import SingOutIcon from "../../assets/svg/signOut.svg";
import AccountSecurityIcon from "../../assets/svg/accountSecurity.svg";
import CentralSearch from "../../assets/svg/centralSearch.svg";
import GlobalStatisticsIcon from "../../assets/svg/globalStatistics.svg";
import FamilyTreeIcon from "../../assets/svg/familyTree.svg";
import RobotIcon from "../../assets/svg/robot.svg";
import ProfitIcon from "../../assets/svg/profit.svg";
import KycIcon from "../../assets/svg/kyc.svg";
import CalendarIcon from "../../assets/svg/calendar.svg";
import StoreIcon from "../../assets/svg/store.svg";
import NotifIcon from "../../assets/svg/notif.svg";
import ReportIcon from "../../assets/svg/report.svg";
import GiftIcon from "../../assets/svg/gifts.svg";
import LogoutIcon from "../../assets/svg/logout.svg";
import { useMenuContext } from "../../services/reducers/MenuContext";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../services/Hooks/useAuth";
import { useLayoutEffect } from "react";
import { removeItem } from "../../services/Utility/LocalStorage";
import useRequest from "../../services/Hooks/useRequest";

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
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.colors.newColors.otherColors.iconBackground
      : "transparent"};
`;

const Icon = styled.img`
  width: 20px;
  height: 40px;
  filter: ${(props) =>
    props.isSelected
      ? "brightness(0) saturate(100%) invert(42%) sepia(39%) saturate(580%) hue-rotate(114deg) brightness(95%) contrast(89%)"
      : "none"};
`;

const Text = styled.p`
  color: ${(props) =>
    props.isSelected
      ? props.theme.colors.newColors.otherColors.iconText
      : "#868b90"};
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
  { icon: GiftIcon, translationId: "231", navigate: "" },
  {
    icon: AccountSecurityIcon,
    translationId: "31",
    navigate: "confirmation",
  },
  {
    icon: CentralSearch,
    translationId: "232",
    navigate: "search",
  },
  {
    icon: GlobalStatisticsIcon,
    translationId: "233",
    navigate: "",
  },
  { icon: RobotIcon, translationId: "235", navigate: "" },
  {
    icon: ProfitIcon,
    translationId: "236",
    navigate: "hour-profit",
  },
  {
    icon: KycIcon,
    translationId: "237",
    navigate: "verification",
  },
  { icon: CalendarIcon, translationId: "262", navigate: "" },
  { icon: StoreIcon, translationId: "30", navigate: "store" },
  {
    icon: NotifIcon,
    translationId: "238",
    navigate: "notifications",
  },
  { icon: ReportIcon, translationId: "23", navigate: "report" },
];

const BtnsMenu = () => {
  const { isOpen } = useMenuContext();
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const location = useLocation(); // Get the current route
  const [user, setUser] = useState();
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item
  const { Request, HTTP_METHOD } = useRequest();

  useLayoutEffect(() => {
    setUser(getUser());
  }, []);

  useEffect(() => {
    // Check the current route and set the corresponding menu item as selected
    const currentItem = menuItems.find(
      (item) => `/metaverse/${item.navigate}` === location.pathname
    );
    if (currentItem) {
      setSelectedItem(currentItem.translationId);
    } else {
      setSelectedItem(null); // No item selected if the route doesn't match
    }
  }, [location.pathname]);

  const handleClick = (item) => {
    setSelectedItem(item.translationId); // Set selected item on click
    navigate(`/metaverse/${item.navigate}`);
  };

  return (
    <>
      {menuItems.map((item, index) => (
        <Btn
          key={index}
          isOpen={isOpen}
          isSelected={selectedItem === item.translationId} // Check if the item is selected
          onClick={() => handleClick(item)}
          disabled={item.navigate === "" && item.translationId !== "sign out"}
        >
          <div>
            <Icon
              src={item.icon}
              isSelected={selectedItem === item.translationId}
            />
            <Text
              isOpen={isOpen}
              isSelected={selectedItem === item.translationId}
            >
              {getFieldTranslationByNames(item.translationId)}
            </Text>
          </div>
          {item.translationId === "236" && user && (
            <ValueBtn isOpen={isOpen}>
              %{user.hourly_profit_time_percentage}
            </ValueBtn>
          )}
          {item.translationId === "238" && user && (
            <ValueBtn isOpen={isOpen}>{user.notifications}</ValueBtn>
          )}
        </Btn>
      ))}
      <DropDownLang />
    </>
  );
};

export default BtnsMenu;
