import psc from "../../../../assets/gif/psc.gif";
import rial from "../../../../assets/gif/rial.gif";
import styled from "styled-components";
import { convertToPersian } from "../../../../services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: #dedee9;
    font-size: 14px;
  }
  @media (min-width: 998px) {
    font-size: 16px;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  h3 {
    color: #a0a0ab;
    font-size: 12px;
    font-weight: 500;
  }
  @media (min-width: 998px) {
    h3 {
      font-size: 14px;
    }
  }
`;
const Pricing = ({ type }) => {
  return (
    <Container>
      <Title>
        <h3>قیمت گذاری</h3>
        <img
          src={type === "rial" ? rial : psc}
          alt="pricing"
          width={18}
          height={18}
        />
      </Title>
      <span>{convertToPersian(0)}</span>
    </Container>
  );
};

export default Pricing;
