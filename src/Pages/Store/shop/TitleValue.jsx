import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  @media (min-width: 1024px) {
    width: ${(props) => (props.shop ? "100px" : "")};
  }
`;
const Title = styled.h3`
  color: #a0a0ab;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  font-weight: 500;
  @media (min-width: 998px) {
    font-size: 14px;
  }
`;
const Value = styled.h3`
  color: #dedee9;
  font-size: ${(props) => (props.small ? "10px" : "14px")};
  font-weight: 400;
  @media (min-width: 998px) {
    font-size: 16px;
  }
`;
const TitleValue = ({ title, value, small, shop }) => {
  return (
    <Container shop={shop}>
      <Title history={history} small={small}>{title}</Title>
      <Value small={small}>{value}</Value>
    </Container>
  );
};

export default TitleValue;
