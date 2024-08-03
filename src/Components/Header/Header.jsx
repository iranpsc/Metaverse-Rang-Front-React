import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Help } from "../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../Assets/svg/question.svg";

import { BiExitFullscreen } from "react-icons/bi";
import { PiGearSixFill } from "react-icons/pi";
import { TiWarning } from "react-icons/ti";
import Education from "../Education/Education";

const HelpIcon = styled(Help)`
  width: 40px;
  height: 40px;
  & > :first-child {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconBg};
  }

  & > :nth-child(2) {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iconText};
  }
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
`;

const ExitIcon = styled(Exit)`
  width: 40px;
  height: 40px;
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
    z-index: 100;
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
  onReportClick,
  onExitClick,
}) => {
  const [openEducation, setOpenEducation] = useState(false);

  return (
    <HeaderWrapper>
      <Text long={long}>{title}</Text>
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

        <HelpIcon onClick={() => setOpenEducation(true)} />

        <ReportIcon onClick={onReportClick} />

        <ExitIcon onClick={onExitClick} />
      </Icons>
      {openEducation && <Education setOpenEducation={setOpenEducation} />}
    </HeaderWrapper>
  );
};

export default Header;
