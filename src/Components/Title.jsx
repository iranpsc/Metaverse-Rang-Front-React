import styled from "styled-components";

const TitleName = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 600;
  margin-top: ${(props) => props.payed && "30px"};
  @media (min-width: 1400px) {
    font-size: 18px;
  }
`;
const Title = ({ title, payed, right }) => {
  return (
    <TitleName right={right} payed={payed}>
      {title}
    </TitleName>
  );
};

export default Title;
