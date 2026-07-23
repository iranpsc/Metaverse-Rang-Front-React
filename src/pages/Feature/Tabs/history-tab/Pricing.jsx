import psc from "../../../../assets/gif/psc.gif";
import rial from "../../../../assets/gif/rial.gif";
import blue from "../../../../assets/gif/blue-color.gif";
import red from "../../../../assets/gif/red-color.gif";
import yellow from "../../../../assets/gif/yellow-color.gif";

import styled from "styled-components";
import { convertToPersian, getTranslation } from "../../../../services/Utility";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: ${({ theme }) => theme.colors.newColors.shades.title};
    font-size: 14px;
  }
  @media (max-width: 998px) {
    font-size: 14px;
    span {
    font-size: 12px;
  }
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
const Pricing = ({ type, amount, color }) => {
  const colorImages = {
    red,
    blue,
    yellow,
  };
  const icons = {
    rial,
    psc,
    color: colorImages[color],
  };
  return (
    <Container>
      <Title>
        <h3>{getTranslation(352)} </h3>
        <img src={icons[type]} alt={type} width={18} height={18} />
      </Title>
      <span>{convertToPersian(amount)}</span>
    </Container>
  );
};

export default Pricing;
