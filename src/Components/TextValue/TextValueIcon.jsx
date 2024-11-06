import styled from "styled-components";

const Item = styled.div`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  display: flex;
  width: 100%;
  align-items: center;
  overflow: hidden;
  height: 48px;
`;

const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  gap: 10px;
  border-left: 1px solid ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 10px;
  height: 100%;
  svg {
    font-size: 20px;
    color: #dedee9;
  }
`;

const Title = styled.div`
  color: ${(props) => props.theme.colors.newColors.primaryText};
  font-size: 16px;
  font-weight: 400;
`;

const Value = styled.span`
  color: ${(props) => props.theme.colors.newColors.otherColors.title};
  font-size: 12px;
  font-weight: 400;
  padding: 10px 15px;
  @media (min-width: 460px) {
    font-size: 18px;
  }
`;
const TextValueIcon = ({ icon, title, value }) => {
  return (
    <Item>
      <InfoIcon>
        {icon}
        <Title>{title}</Title>
      </InfoIcon>
      <Value>{value}</Value>
    </Item>
  );
};

export default TextValueIcon;
