import styled from "styled-components";
import { useLanguage } from "../services/Reducers/LanguageContext";

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
  height: 48px !important;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
  border-left: ${(props) => (props.isPersian ? "1px solid #454545" : "none")};
  border-right: ${(props) => (!props.isPersian ? "1px solid #454545" : "none")};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  padding: 10px;
  height: 100%;
  @media (min-width: 1024px) and (min-height: 600px) {
    svg {
      font-size: 26px !important;
    }
  }
  svg {
    font-size: 20px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;
  line-height: ${(props) => props.long && "20px"};
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.long ? "14px" : "16px")};
  }
`;

const Value = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  line-height: ${(props) => props.smallValue && "20px"};
  text-transform: uppercase;
  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.smallValue ? "14px" : "16px")};
  }
  @media (min-width: 1400px) {
    font-size: ${(props) => (props.very_long ? "15px" : "16px")};
  }

  svg {
    margin-left: 5px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const TextValueIcon = ({
  icon,
  title,
  value,
  valueIcon,
  long,
  smallValue,
  very_long,
}) => {
  const isPersian = useLanguage();
  return (
    <Item>
      <InfoIcon isPersian={isPersian}>
        {icon}
        <Title long={long}>{title}</Title>
      </InfoIcon>
      <Value very_long={very_long} smallValue={smallValue}>
        {value}
        {valueIcon && valueIcon}
      </Value>
    </Item>
  );
};

export default TextValueIcon;
