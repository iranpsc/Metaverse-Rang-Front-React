
import styled from "styled-components";
import { convertToPersian } from "../Services/Utility";

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
  color: #a0a0ab;
  font-size: 14px;
  font-weight: 500;
`;

const Value = styled.p`
  color: #dedee9;
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
