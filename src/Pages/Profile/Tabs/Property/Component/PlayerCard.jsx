import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import AnonymousImage from "../../../../../Assets/images/anonymous.png";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

const NamePlayer = styled.p`
  font-size: 15px;
  color: #707070;
  font-family: "Segoe UI";
  white-space: nowrap;
`;

export default function PlayerCard({ PlayerImg, TextBtn, Code, Name, onClick, Id }) {
  const Navigate = useNavigate();

  return (
    <Container>
      <Submit
        text={TextBtn}
        type="primary"
        options={{
          style: {
            width: 155
          },
          onClick: () => {
            onClick(Id);
          }
        }}
      />
      <DetailPlayersCard>
        <BorderImgPlayersCard>
          <ImgPlayersCard src={PlayerImg ? PlayerImg : AnonymousImage} onClick={() => Navigate(`/metaverse/player/${Id}`)}/>
        </BorderImgPlayersCard>
        
        <ContainerTextPlayer>
          <IdPlayer>{Code}</IdPlayer>
          <NamePlayer>{Name}</NamePlayer>
        </ContainerTextPlayer>

      </DetailPlayersCard>
    </Container>
  );
}
