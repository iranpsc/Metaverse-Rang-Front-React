import styled from "styled-components";
import { ReactComponent as Help } from "../../assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../assets/svg/close.svg";
import { ReactComponent as Report } from "../../assets/svg/question.svg";

export const ReportIcon = styled(Help)`
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

export const HelpIcon = styled(Report)`
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

export const ExitIcon = styled(Exit)`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
