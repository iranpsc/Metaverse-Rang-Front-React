import avatar from "../../../assets/images/profile/slide.png";
import styled from "styled-components";

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
  direction: rtl;
  img {
    border-radius: 100%;
  }
`;

const AdminMessage = () => {
  return (
    <Container>
      <Content>
        <Header>
          <span>محمد امینی</span>
          <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">HM-200020</a>
        </Header>
        <Text>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <h4>۲۱ اردیبهشت ۱۴۰۳ | ۱۲:۲۰</h4>
        </Text>
      </Content>
      <img src={avatar} alt="avatar" width={50} height={50} />
    </Container>
  );
};

export default AdminMessage;
