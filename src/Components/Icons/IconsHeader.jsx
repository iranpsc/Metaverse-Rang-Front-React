import styled from "styled-components";
import { ReactComponent as Help } from "../../Assets/svg/exclamation.svg";
import { ReactComponent as Exit } from "../../Assets/svg/close.svg";
import { ReactComponent as Report } from "../../Assets/svg/question.svg";

export const HelpIcon = styled(Help)`
  width: 40px;
  height: 40px;
  & > :first-child {
    fill: ${(props) => props.theme.headerIconFill};
  }

  & > :nth-child(2) {
    fill: ${(props) => props.theme.headerIconStroke};
  }
`;

export const ReportIcon = styled(Report)`
  width: 40px;
  height: 40px;
  & > :first-child {
    fill: ${(props) => props.theme.headerIconFill};
  }

  & > :nth-child(2) {
    fill: ${(props) => props.theme.headerIconStroke};
  }
`;

export const ExitIcon = styled(Exit)`
  width: 40px;
  height: 40px;
`;
