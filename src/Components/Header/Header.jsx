import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Help } from "../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../Assets/svg/question.svg";

import { BiExitFullscreen } from "react-icons/bi";
import { PiGearSixFill } from "react-icons/pi";
import { TiWarning } from "react-icons/ti";
import Education from "../Education/Education";
import useAdviserData from "../../Services/Hooks/useAdviserData";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectedEnvironment } from "../../Services/Reducers/SelectedEnvironmentContext";
import { getFieldTranslationByNames } from "../../Services/Utility";

const HelpIcon = styled(Help)`
  width: 40px;
  height: 40px;
  & > :first-child {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconBg};
  }

  & > :nth-child(2) {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  }
  cursor: pointer;
`;

const ReportIcon = styled(Report)`
  width: 40px;
  height: 40px;
  & > :first-child {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconBg};
  }

  & > :nth-child(2) {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  }
  cursor: pointer;
`;

const ExitIcon = styled(Exit)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b3b3b;
  padding: 10px;
  cursor: pointer;
  svg {
    transform: scale(1.7);
    color: #949494 !important;
  }
  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
    svg {
      transform: scale(1.1);
      width: 40px;
      height: 40px;
    }
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 998px) {
    margin-bottom: 30px;
    margin-top: 10px;
  }
`;

const Text = styled.h2`
  color: ${(props) => props.theme.colors.newColors.otherColors.headerMenu};
  font-weight: 600;
  font-size: ${(props) => (props.long ? "14px" : "16px")};
  @media (min-width: 998px) {
    font-size: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  svg {
    color: #3b3b3b;
    width: 30px;
    height: 30px;
    z-index: 10;
    @media (min-width: 998px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const FullWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #3b3b3b;
  cursor: pointer;
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
  }
  svg {
    color: #949494;
  }
`;

const Header = ({
  title,
  long,
  loading,
  profile,
  action,
  setShowContainer,
  handleExit,
}) => {
  const [openEducation, setOpenEducation] = useState(false);
  const location = useLocation();
  const navigation = useNavigate();
  const { resetStates } = useSelectedEnvironment();

  const newStr = location.pathname.replace(/\/metaverse\//g, "") + "-";
  const locationPage = location?.state?.locationPage;
  const adviserData = useAdviserData(newStr, locationPage);
  const handleReportClick = () => {
    navigation("/metaverse/report", {
      state: {
        href: window.location.href.split("/").slice(3).join("/"),
      },
    });
  };
  const handleExitClick = () => {
    if (handleExit) {
      handleExit();
      return;
    }

    navigation(-1);
    if (setShowContainer) {
      setShowContainer(false);
    }
    if (action === "ChangeHiddenState") {
      resetStates();
    }
  };
  return (
    <HeaderWrapper>
      <Text long={long}>{getFieldTranslationByNames(title)}</Text>
      <Icons>
        {loading && (
          <FullWrapper>
            <BiExitFullscreen scale={0.1} />
          </FullWrapper>
        )}
        {profile && (
          <>
            <IconWrapper>
              <TiWarning />
            </IconWrapper>
            <IconWrapper>
              <PiGearSixFill />
            </IconWrapper>
          </>
        )}

        <HelpIcon onClick={handleReportClick} />

        <ReportIcon onClick={() => setOpenEducation(true)} />

        <ExitIcon onClick={handleExitClick} />
      </Icons>
      {openEducation && (
        <Education
          setOpenEducation={setOpenEducation}
          adviserData={adviserData}
        />
      )}
    </HeaderWrapper>
  );
};

export default Header;
