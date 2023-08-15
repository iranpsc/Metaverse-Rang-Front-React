import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import AnonymousImage from "../../../../../Assets/images/anonymous.png";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailPlayersCard = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
`;

const BorderImgPlayersCard = styled.div`
  width: 90px;
  aspect-ratio: 1/1;
  border-radius: 9999px;
  border: 1px solid #b8b8b8;
  padding: 3px;
`;

const ImgPlayersCard = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ContainerTextPlayer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const IdPlayer = styled.p`
  font-size: 19px;
  color: #0800ff;
  white-space: nowrap;
  font-family: "Segoe UI";
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
`;

const NamePlayer = styled.p`
  font-size: 15px;
  color: #707070;
  font-family: "Segoe UI";
  white-space: nowrap;
  text-transform: uppercase;
`;

export default function PlayerCard({ PlayerImg, Id, Name, IdNavigate }) {
  const navigate = useNavigate();
  return (
    <Container>
      <DetailPlayersCard>
        <BorderImgPlayersCard>
          <ImgPlayersCard
            src={PlayerImg ? PlayerImg : AnonymousImage}
            onClick={() => navigate(`/metaverse/player/${IdNavigate}`)}
          />
        </BorderImgPlayersCard>

        <ContainerTextPlayer>
          <IdPlayer
            onClick={() =>
              window.open(`https://rgb.irpsc.com/citizen/${Id}`, "_blank")
            }
          >
            {Id}
          </IdPlayer>
          <NamePlayer>{Name}</NamePlayer>
        </ContainerTextPlayer>
      </DetailPlayersCard>
    </Container>
  );
}
