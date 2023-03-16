import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Submit from "../../../../../Components/Buttons/Submit";
import { TextShorter } from "../../../../../Services/Utility";

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
  align-items: center;`;

const Title = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 22px;
`

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
  direction: rtl;
  text-align: right;
`;

const IdContainer = styled.p`
  font-size: 19px;
  color: #fd7e14;
  font-weight: 700;
  cursor: pointer;
`;

export default function FeatureCard({ Id, IdMap, Address, Area, Psc, Irr, Type }) {
  const Navigate = useNavigate();

  return (
    <Container>
      <PolygonContainer>
        <IdContainer onClick={() => Navigate(`/metaverse/feature/${Id}`)}>{IdMap}</IdContainer>
      </PolygonContainer>

      <DetailContainer>
        <Information>
          <TextDetail>{TextShorter(Address, 40)}</TextDetail>

          {(parseInt(Psc) !== 0 && parseInt(Irr) !== 0) ? 
          <TextDetail>
            {parseInt(Psc)} / {parseInt(Irr)}
          </TextDetail>
          :
          <Submit
            text={"قیمت گذاری"}
            type="primary"
            options={{
              style: {
                width: 120,
              }
            }}
          />
          }
          
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
