import styled from "styled-components";
import { convertToPersian } from "../../../../services/Utility";
const Container = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
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
      color: ${(props) => props.theme.colors.newColors.shades.title};
      font-size: 11px;
    }
    h3 {
      color: ${(props) => props.theme.colors.newColors.shades.title};
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
        <h3>{convertToPersian(value)}</h3>
      </div>
    </Container>
  );
};

export default ColorCard;
