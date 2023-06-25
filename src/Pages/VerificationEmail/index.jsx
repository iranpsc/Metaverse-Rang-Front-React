import React from "react";
import Modal from "../../Components/Modal";
import { useNavigate, useSearchParams } from "react-router-dom";
import EmailSuccessImage from "../../Assets/images/check-email.png";
import EmailBeforeImage from "../../Assets/images/massage-warning.png";
import ProfileImage from "../../Assets/images/profile.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;
const SuccessTitle = styled.h2`
  color: #777;
  font-size: 19px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;
const Image = styled.img`
  width: 70px;
  @media (min-width: 768px) {
    width: auto;
  }
`;
const Header = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;
const Body = styled.div`
  margin-top: 16px !important;
  width: 95%;
  height: 60%;
  margin: auto;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #777;
  color: #777;
  font-size: 11px;
  @media (min-width: 768px) {
    font-size: 19px;
  }
`;
const ImageProfile = styled.img`
  position: absolute;
  width: 90px;
  bottom: 0;
  cursor: pointer;
  left: 35%;
  @media (min-width: 768px) {
    left: 40%;
  }
`;
const VerificationEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <Modal title="تایید ایمیل">
      {searchParams.get("status") === "verified" && (
        <Container>
          <Header>
            <Image src={EmailSuccessImage} />
            <SuccessTitle>ایمیل شما تایید شد </SuccessTitle>
          </Header>
          <Body>
            <h2>.شما یکی از شهروندان متارنگ شدید</h2>
            <h3>جهت ورود به به متارنگ بر روی دکمه زیر کلیک کنید</h3>
          </Body>
          <ImageProfile
            src={ProfileImage}
            onClick={() => navigate("/metaverse/login")}
          />
        </Container>
      )}
      {searchParams.get("status") === "already_verified" && (
        <Container>
          <Header>
            <Image src={EmailBeforeImage} style={{rotate:"revert"}} />
            <SuccessTitle>ایمیل شما قبلا تایید شده است </SuccessTitle>
          </Header>
          <Body>
            <h2 style={{textAlign:"center"}}>
              شما قبلا با این ایمیل ثبت نام وایمیل خود را تایید کرده اید 
            </h2>
            <h3>جهت ورود به به متارنگ بر روی دکمه زیر کلیک کنید</h3>
          </Body>
          <ImageProfile
            src={ProfileImage}
            onClick={() => navigate("/metaverse/login")}
          />
        </Container>
      )}
    </Modal>
  );
};

export default VerificationEmail;
