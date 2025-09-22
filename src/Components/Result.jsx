import styled from "styled-components";
import { convertToPersian } from "../services/Utility";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  @media (min-width: 1200px) {
    align-items: center;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
`;

const Result = ({ title, value }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{convertToPersian(value)}</Value>
    </Wrapper>
  );
};

export default Result;
