import avatar from "../../../../Assets/images/defulte-profile.png";
import styled from "styled-components";
import { SanitizeHTML } from "../../../../Services/Utility";

const Content = styled.div``;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
  }
  a {
    color: #0066ff;
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
  }
`;
const Text = styled.div`
  background-color: #1a1a18;
  padding: 12px;
  border-radius: 10px;
  p {
    color: #dedee9;
    font-size: 16px;
    font-weight: 400;
  }
  h4 {
    color: #a0a0ab;
    font-size: 16px;
    font-weight: 400;
    width: fit-content;
    margin-right: auto;
    margin-top: 10px;
  }
`;
const Container = styled.div`
  display: flex;
  gap: 12px;
  width: 80%;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;

  img {
    border-radius: 100%;
  }
`;

const AdminMessage = ({ data }) => {
  return (
    <Container>
      <Content>
        <Header>
          <span>{data.responser_name}</span>
          <a href="https://rgb.irpsc.com/fa/citizens/hm-2000001">HM-200020</a>
        </Header>
        <Text>
          <p>{SanitizeHTML(res.response)}</p>
          <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
        </Text>
      </Content>
      <img src={avatar} alt="avatar" width={50} height={50} />
    </Container>
  );
};

export default AdminMessage;
