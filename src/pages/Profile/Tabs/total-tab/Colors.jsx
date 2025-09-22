import ColorCard from "./ColorCard";
import gif1 from "../../../../assets/gif/limit-of-influence.gif";
import gif2 from "../../../../assets/gif/yellow-color.gif";
import gif3 from "../../../../assets/gif/red-color.gif";
import gif4 from "../../../../assets/gif/blue-color.gif";
import gif5 from "../../../../assets/gif/rial.gif";
import gif6 from "../../../../assets/gif/psc.gif";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../services/reducers/UserContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
const Colors = () => {
  const [walletData, setWalletData] = useState({
    effect: 0,
    yellow: 0,
    red: 0,
    blue: 0,
    irr: 0,
    psc: 0
  });
  const { Request } = useRequest();
  const { id } = useParams();
  const [userId] = useContext(UserContext);
  useEffect(() => {
    if (id) {
      Request(`users/${id}/wallet`).then((response) => {
        setWalletData(response.data.data);
      });
    }
    Request(`users/${userId.id}/wallet`).then((response) => {
      setWalletData(response.data.data);
    })
  }, [id]);

  const colors = [
    {
      id: 1,
      gif: gif1,
      label: getFieldTranslationByNames("723"),
      value: walletData?.effect,
    },
    {
      id: 2,
      gif: gif2,
      label: getFieldTranslationByNames("51"),
      value: walletData?.yellow,
    },
    {
      id: 3,
      gif: gif3,
      label: getFieldTranslationByNames("50"),
      value: walletData?.red,
    },
    {
      id: 4,
      gif: gif4,
      label: getFieldTranslationByNames("49"),
      value: walletData?.blue,
    },
    {
      id: 5,
      gif: gif5,
      label: getFieldTranslationByNames("48"),
      value: walletData?.irr,
    },
    {
      id: 6,
      gif: gif6,
      label: getFieldTranslationByNames("47"),
      value: walletData?.psc,
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
