import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  height: 40px;
  border: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  font-weight: 400;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  overflow: hidden;
  @media (min-width: 998px) {
    height: 48px;
  }
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  height: fit-content;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 5px 20px;
  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

const Value = styled.p`
  font-size: 18px;
  padding: 5px 20px;
  direction: ltr;
  @media (min-width: 998px) {
    padding: 8px 20px;
  }
`;

const TitleValue = ({ title, value }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>
        {value.toLocaleString().replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d])}
      </Value>
    </Wrapper>
  );
};
export default TitleValue;
