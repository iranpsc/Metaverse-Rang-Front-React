import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import { TextShorter } from "../../../../../Services/Utility";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #666;
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
`;

const PolygonContainer = styled.div`
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TextDetail = styled.p`
  font-size: 16px;
  color: #707070;

  text-align: right;
`;

const Id = styled.p`
  font-size: 19px;
  color: #fd7e14;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export default function FeatureCard({
  IdMap,
  Address,
  Area,
  Psc,
  Irr,
  Type,
  IdNavigate,
}) {
  const navigate = useNavigate();
  return (
    <Container>
      <PolygonContainer>
        <Id onClick={() => navigate(`/metaverse/feature/${IdNavigate}`)}>
          {IdMap}
        </Id>
      </PolygonContainer>

      <DetailContainer>
        <Information>
          <TextDetail>{TextShorter(Address, 40)}</TextDetail>
          <TextDetail>
            {parseInt(Psc)} / {parseInt(Irr)}
          </TextDetail>
          <TextDetail>
            {Type}&nbsp; - متراژ : &nbsp;{Area}
          </TextDetail>
        </Information>

        <Title>
          <TextDetail>آدرس:</TextDetail>
          <TextDetail>قیمت:</TextDetail>
          <TextDetail>کاربری:</TextDetail>
        </Title>
      </DetailContainer>
    </Container>
  );
}
