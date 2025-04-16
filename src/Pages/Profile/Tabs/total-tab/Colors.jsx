import ColorCard from "./ColorCard";
import gif1 from "../../../../assets/gif/limit-of-influence.gif";
import gif2 from "../../../../assets/gif/yellow-color.gif";
import gif3 from "../../../../assets/gif/red-color.gif";
import gif4 from "../../../../assets/gif/blue-color.gif";
import gif5 from "../../../../assets/gif/rial.gif";
import gif6 from "../../../../assets/gif/psc.gif";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import { WalletContext } from "../../../../Services/Reducers/WalletContext";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const Colors = () => {
  const [wallet] = useContext(WalletContext);
  const colors = [
    {
      id: 1,
      gif: gif1,
      label: getFieldTranslationByNames("723"),
      value: wallet?.effect,
    },
    {
      id: 2,
      gif: gif2,
      label: getFieldTranslationByNames("51"),
      value: wallet?.yellow,
    },
    {
      id: 3,
      gif: gif3,
      label: getFieldTranslationByNames("50"),
      value: wallet?.red,
    },
    {
      id: 4,
      gif: gif4,
      label: getFieldTranslationByNames("49"),
      value: wallet?.blue,
    },
    {
      id: 5,
      gif: gif5,
      label: getFieldTranslationByNames("48"),
      value: wallet?.irr,
    },
    {
      id: 6,
      gif: gif6,
      label: getFieldTranslationByNames("47"),
      value: wallet?.psc,
    },
  ];
  return (
    <Container>
      {colors.map((color) => (
        <ColorCard key={color.id} {...color} />
      ))}
    </Container>
  );
};

export default Colors;
