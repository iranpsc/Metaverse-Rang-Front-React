import { BiCommentDots } from "react-icons/bi";

import { LuShare2 } from "react-icons/lu";
import ShareModal from "./ShareModal";
import { TiUserAddOutline } from "react-icons/ti";
import styled from "styled-components";
import { useState } from "react";
import ButtonIcon from "../../../../Components/ButtonIcon";

const Container = styled.div`
  padding: 15px;
  background-color: #1a1a18;
  border-bottom-left-radius: 10px;
  @media (min-width: 840px) {
    padding: 12px;
  }
  @media (min-width: 1024px) {
    padding: 20px;
  }
  @media (min-width: 1400px) {
    padding: 20px;
    border-bottom-right-radius: 10px;
  }
`;
const Header = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid #454545;
  span {
    color: #dedee9;
    font-size: 13px;
    font-weight: 500;
  }
`;
const Title = styled.h2`
  color: #ffffff;
  font-size: 20px;
  font-weight: 600;
`;
const Code = styled.a`
  color: #0066ff;
  font-weight: 500;
  color: #0066ff;
  text-decoration: none;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
const Follow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  span {
    color: #a0a0ab;
    font-size: 12px;
  }
`;
const Count = styled.h2`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
`;
const Buttons = styled.div``;
const Upper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 30px 0 10px 0;
`;
const Info = () => {
  const [openShare, setOpenShare] = useState(false);
  return (
    <Container>
      <Header>
        <div>
          <Title>حسین قدیری</Title>
          <Code href="https://rgb.irpsc.com/fa/citizen/hm-2000001">
            HM-2000001
          </Code>
        </div>
        <span>عضویت از: ۱۴۰۱/۱۰/۱۴</span>
      </Header>
      <Content>
        <Follow>
          <Count>۳</Count>
          <span>دنبال کننده</span>
        </Follow>
        <div
          style={{ height: "55px", width: "1px", backgroundColor: "#454545" }}
        />
        <Follow>
          <Count>۰</Count>
          <span>دنبال شونده</span>
        </Follow>
      </Content>
      <Buttons>
        <Upper>
          <ButtonIcon
            grow
            icon={<TiUserAddOutline />}
            label="دنبال کردن"
            fill
            onclick={() => {}}
          />
          <ButtonIcon
            grow
            icon={<LuShare2 />}
            label="اشتراک گذاری"
            onclick={() => setOpenShare(true)}
          />
        </Upper>
        <ButtonIcon
          grow
          icon={<BiCommentDots />}
          label="پیام دادن"
          onclick={() => {}}
        />
      </Buttons>
      {openShare && <ShareModal setOpenShare={setOpenShare} />}
    </Container>
  );
};

export default Info;
