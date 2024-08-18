import ColorCard from "./ColorCard";
import gif1 from "../../../../Assets/gif/limit-of-influence.gif";
import gif2 from "../../../../Assets/gif/yellow-color.gif";
import gif3 from "../../../../Assets/gif/red-color.gif";
import gif4 from "../../../../Assets/gif/blue-color.gif";
import gif5 from "../../../../Assets/gif/rial.gif";
import gif6 from "../../../../Assets/gif/psc.gif";
import styled from "styled-components";

const colors = [
  { id: 1, gif: gif1, label: "حد تاثیر", value: "۰.۲" },
  { id: 2, gif: gif2, label: "رنگ زرد", value: "۶۶ K" },
  { id: 3, gif: gif3, label: "رنگ قرمز", value: "۹۵.۰۴۸" },
  { id: 4, gif: gif4, label: "رنگ آبی", value: "۱۵۰" },
  { id: 5, gif: gif5, label: "ریال", value: "۹۸.۰۴۸" },
  { id: 6, gif: gif6, label: "PSC", value: "۱۱.۰۴۹ K" },
];
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const Colors = () => {
  return (
    <Container>
      {colors.map((color) => (
        <ColorCard key={color.id} {...color} />
      ))}
    </Container>
  );
};

export default Colors;
