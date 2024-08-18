import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 14px 24px;
  gap: 20px;
  img {
    width: 38px;
    height: 38px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    span {
      color: #dedee9;
      font-size: 11px;
    }
    h3 {
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) {
    padding: 16px 32px;
    div {
      span {
        font-size: 13px;
      }
      h3 {
        font-size: 18px;
      }
    }
  }
`;
const ColorCard = ({ gif, label, value }) => {
  return (
    <Container>
      <img width={48} height={48} loading="lazy" alt={label} src={gif} />
      <div>
        <span>{label}</span>
        <h3 dir="ltr">{value}</h3>
      </div>
    </Container>
  );
};

export default ColorCard;
