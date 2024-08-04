import {
  HiOutlineCurrencyDollar,
  HiOutlineLocationMarker,
} from "react-icons/hi";

import { LuShoppingCart } from "react-icons/lu";
import styled from "styled-components";

const items = [
  { id: 1, label: "خرید", icon: <LuShoppingCart /> },
  { id: 2, label: "پیشنهاد", icon: <HiOutlineCurrencyDollar /> },
  { id: 3, label: "لوکیشن", icon: <HiOutlineLocationMarker /> },
];
const IconWrapper = styled.div`
  border-radius: 60px;
  background-color: #ffc700;
  color: #191b21;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  padding: 8px 12px 3px 15px;
  gap: 5px;
  cursor: pointer;
  svg {
    font-size: 23px;
    padding-top: 5px;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  gap: 15px;
`;
const Buttons = () => {
  return (
    <Container>
      {items.map((item) => (
        <IconWrapper key={item.id}>
          <span>{item.icon}</span>
          <h2>{item.label}</h2>
        </IconWrapper>
      ))}
    </Container>
  );
};

export default Buttons;
