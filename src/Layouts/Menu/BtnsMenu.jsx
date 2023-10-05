import React from "react";
import styled from "styled-components";
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
import LangIcon from "../../Assets/svg/lang.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow-y: auto;
`;

const Btn = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: start;
  justify-content: start;
  gap: 16.865px;
  padding: 0 10px;
  border: none;
`;
const Icon = styled.img`
  width: 18.176px;
  height: 19.429px;
  @media (min-width: 1024px) {
    width: 23.135px;
    height: 24.771px;
  }
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
`;
const BtnsMenu = () => {
  const [selectedLang, setSelectedLang] = useState("انگلیسی");
  return (
    <Container>
      <Btn>
        <Icon src={SingOutIcon} />
        <Text>{getFieldTranslationByNames("central-page", "sign out")}</Text>
      </Btn>
      <Btn>
        <Icon src={AccountSecurityIcon} />
        <Text>
          {getFieldTranslationByNames("central-page", "account security")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={CentralSearch} />
        <Text>
          {getFieldTranslationByNames("central-page", "central search")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={GlobalStatisticsIcon} />
        <Text>
          {getFieldTranslationByNames("central-page", "global statistics")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={FamilyTreeIcon} />
        <Text>{getFieldTranslationByNames("central-page", "family tree")}</Text>
      </Btn>
      <Btn>
        <Icon src={RobotIcon} />
        <Text>{getFieldTranslationByNames("central-page", "vod guide")}</Text>
      </Btn>
      <Btn>
        <Icon src={ProfitIcon} />
        <Text>
          {getFieldTranslationByNames("central-page", "accumulated earnings")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={KycIcon} />
        <Text>
          {getFieldTranslationByNames("central-page", "identify verification")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={CalendarIcon} />
        <Text>{getFieldTranslationByNames("central-page", "calendar")}</Text>
      </Btn>
      <Btn>
        <Icon src={StoreIcon} />
        <Text>{getFieldTranslationByNames("central-page", "store")}</Text>
      </Btn>
      <Btn>
        <Icon src={NotifIcon} />
        <Text>
          {getFieldTranslationByNames("central-page", "notifications")}
        </Text>
      </Btn>
      <Btn>
        <Icon src={ReportIcon} />
        <Text>{getFieldTranslationByNames("central-page", "reports")}</Text>
      </Btn>
      <Btn>
        <Icon src={LangIcon} />
        <Text>{getFieldTranslationByNames("central-page", "language")}</Text>
      </Btn>
    </Container>
  );
};

export default BtnsMenu;
