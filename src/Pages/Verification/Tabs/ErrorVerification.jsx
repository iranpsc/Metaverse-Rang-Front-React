import React from "react";
import styled from "styled-components";
import BellGif from "../../../Assets/gif/bell.gif";
import ExitImage from '../../../Assets/images/exit.png';

const Container = styled.section`
  z-index: 501;
  background-color: white;
  height:100%;
  width: 450px;
  position: absolute;
  bottom:25%;
  left:8%;
  border-radius: 8px;
  padding: 16px;
`;

const Header = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h4 {
    width:87%;
    text-align: right;
    direction: rtl;
    color: #555;
    padding: 8px;
    border: 0.5px solid #999;
    box-shadow: inset 0 2px 6px -1px #07af07be;
    border-radius: 8px;
  }
`;

const Body = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 91%;
  border: 0.5px solid #999;
  border-radius: 8px;
  overflow-y: scroll;
  box-shadow: inset 0 2px 6px -1px #07af07be;
      padding: 11px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Information = styled.div`
  text-align: right;
  color: red;
  & > p {
    margin-top: 8px;
    
  }

  & > div {
    position: relative;
  }
  border-bottom: 1px solid #6666;
  padding-bottom: 12px;
`;

const Gif = styled.img`
  width: 350px;
`;

const AnimateContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & p {
    text-align: right;
    direction: rtl;
    margin-top: -32px;
    font-weight: bold;
  }
`;

export default function ErrorVerification({ errors, setShowModal }) {
  return (
    <Container>
      <Header>
        <h4 className="purple-box-shadow">مشکلات احراز هویت</h4>

        <img
          className="cursor-pointer white-drop-shadow"
          src={ExitImage}
          width={40}
          alt="exit"
          onClick={() => setShowModal(false)}
        />
      </Header>

      <Body>
        {errors?.map((error) => (     
            <Information>
              {error?.["message"]}
            </Information>
        ))}

        {errors?.length === 0 && (
          <AnimateContainer>
            <Gif src={BellGif} alt="" />
            <p>خطایی یافت نشد !</p>
          </AnimateContainer>
        )}
      </Body>
    </Container>
  );
}
