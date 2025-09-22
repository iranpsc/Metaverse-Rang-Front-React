import styled from "styled-components";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;
  order: ${(props) => props.id === 3 && "4"};
  height: 48px !important;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  gap: 10px;
  border-left: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
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
  font-size: 14px;

  font-weight: 400;
  line-height: ${(props) => props.long && "20px"};
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-weight: 400;
  padding: 10px 15px;
  line-height: ${(props) => props.smallValue && "20px"};

  @media (min-width: 460px) {
    font-size: 18px;
  }
  @media (max-width: 1024px) {
    font-size: ${(props) => (props.smallValue ? "14px" : "16px")};
  }
`;
const Input = ({ id, icon, title, value, options, long, smallValue }) => {
  return (
    <Item id={id}>
      <InfoIcon>
        {id === 1 || id === 2 ? (
          <img src={icon} alt={value} width={26} height={26} />
        ) : (
          icon
        )}
        <Title long={long}>{title}</Title>
      </InfoIcon>
      <Value smallValue={smallValue}>
        {id === 1 || id === 2 ? convertToPersian(+value) : value}
        {id === 4 && getFieldTranslationByNames(options[0])}
      </Value>
    </Item>
  );
};

export default Input;
