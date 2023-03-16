import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import GiftImage from "../../Assets/images/gift-box.png";
import SearchImage from "../../Assets/images/search.png";
import StatisticsImage from "../../Assets/images/statistics.png";
import DynastyImage from "../../Assets/images/dynsty.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30%;
  left: 8px;
  z-index: 500;
  gap: 32px;
`;

const Icon = styled.img`
  width: 56px;
  -webkit-filter: grayscale(1) ;
  filter: grayscale(1) ;
`;

export default function LeftIcon() {
  const navigate = useNavigate();
  return (
    <Container>
      <Icon src={GiftImage} />

      <Icon src={SearchImage} />

      <Icon src={StatisticsImage} />
      <Icon src={DynastyImage} onClick={() => navigate("/metaverse/dynasty")} style={{filter:"none",cursor:"pointer"}}/>
    </Container>
  );
}
