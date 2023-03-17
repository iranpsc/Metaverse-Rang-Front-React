import styled from "styled-components";
import Plan from "../../../../../Assets/images/floor-plan.png";
import Building from "../../../../../Assets/images/building.png";
import Trasfer from "../../../../../Assets/images/transfer.png";
import User from "../../../../../Assets/images/user.png";
import Increase from "../../../../../Assets/images/increase.png";
import moment from "jalali-moment";
import Countdown from "react-countdown";

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Table = styled.div`
  width: 100%;
  height: 80%;
  border: solid 1px #777777;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const Header = styled.div`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 13%;
  border-bottom: 1px solid #777777;
  padding: 10px;
`;
const Body = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  flex-direction: column;
  padding: 5px 0; 
`;
const Text = styled.p`
  font-size: 16px;
  color: #707070;
`;
const DetaileContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:10px;
`;
const Icon = styled.img`
  width: 40px;
`;
const Title = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export default function TableDynasty({ dynasty }) {
  return (
    <Container>
      <Table>
        <Header>
          <Text style={{ color: "#fd7e14", fontWeight: 700 }}>{dynasty?.["dynasty-feature"]?.properties_id}</Text>
          <Text style={{ fontWeight: 700 }}>ملک سلسله</Text>
        </Header>
        <Body>
          <DetaileContainer>
            <Text>{dynasty?.["dynasty-feature"]?.area}</Text>
            <Title>
              <Text>متراژ</Text>
              <Icon src={Plan} />
            </Title>
          </DetaileContainer>
          <DetaileContainer>
            <Text>{dynasty?.["dynasty-feature"]?.density}</Text>
            <Title>
              <Text>تراکم</Text>
              <Icon src={Building} />
            </Title>
          </DetaileContainer>
          <DetaileContainer>
            <Text>1%</Text>
            <Title>
              <Text>افزایش سود از املاک</Text>
              <Icon src={Increase} />
            </Title>
          </DetaileContainer>
          <DetaileContainer>
            <Text>{dynasty?.["dynasty-feature"]?.["family-members-count"]}</Text>
            <Title>
              <Text>تعداد اعضای سلسله</Text>
              <Icon src={User} />
            </Title>
          </DetaileContainer>
          <DetaileContainer>
            <Countdown date={moment(dynasty.created_at, 'jYYYY/jMM/jDD').add(1, 'M').unix() * 1000}/>
            <Title>
              <Text>قابلیت انتقال</Text>
              <Icon src={Trasfer} />
            </Title>
          </DetaileContainer>
        </Body>
      </Table>
    </Container>
  );
}
