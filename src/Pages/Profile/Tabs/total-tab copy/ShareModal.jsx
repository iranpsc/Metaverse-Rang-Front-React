import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";

import styled from "styled-components";
import { useState } from "react";

const BackGround = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.713);
`;
const Modal = styled.div`
  border-radius: 10px;
  background-color: #1a1a18;
  border: 1px solid gray;
  direction: rtl;
  overflow-y: auto;
  padding: 20px;
  width: 440px;
  max-height: 577px;
  @media (min-width: 1023px) {
    width: 480px;
    overflow-y: auto;
  }
`;
const Close = styled.h4`
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  color: white;
  margin-bottom: 20px;
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: auto;
  gap: 30px;
  span {
    color: ${(props) => props.color};
    svg {
      font-size: 40px;
      border-radius: 100%;
    }
  }
`;
const Icon = styled.div`
  color: ${(props) => props.color};
  position: relative;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  div {
    width: 33px;
    height: 35px;
    border-radius: 100%;
    background-color: wheat;
    position: absolute;
    z-index: -5;
  }
`;

const Copy = styled.div`
  background-color: black;
  border-radius: 10px;
  margin-top: 40px;
  padding: 5px 5px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    border-radius: 20px;
    background-color: #ffc700;
    padding: 0 20px;
    cursor: pointer;
    color: black;
  }
  p {
    color: white;
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  span {
    color: white;
  }
`;

const ShareModal = ({ setOpenShare }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const textToCopy = "https://rgb.irpsc.com/fa/citizen/hm-2000001";

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setCopied(true);
      })
      .catch((error) => {
        console.error("کپی نشد: ", error);
      });
  };
  return (
    <BackGround>
      <Modal>
        <Header>
          <Close onClick={() => setOpenShare(false)}>X</Close>
          <span>اشتراک گذاری شهروند</span>
          <div />
        </Header>
        <Socials>
          <Social>
            <WhatsappShare
            size={52}
              borderRadius={100}
              url="https://rgb.irpsc.com/fa/citizen/hm-2000001"
            />
            <span>Whatsapp</span>
          </Social>
          <Social>
            <TelegramShare
            size={52}
              borderRadius={100}
              url="https://rgb.irpsc.com/fa/citizen/hm-2000001"
            />
            <span>Telegram</span>{" "}
          </Social>
          <Social>
            <FacebookShare
            size={52}
              borderRadius={100}
              url="https://rgb.irpsc.com/fa/citizen/hm-2000001"
            />
            <span>Facebook</span>{" "}
          </Social>
          <Social>
            <TwitterShare
            size={52}
              borderRadius={100}
              url="https://rgb.irpsc.com/fa/citizen/hm-2000001"
            />
            <span>Twitter</span>{" "}
          </Social>
          <Social>
            <LinkedinShare
            size={52}
              borderRadius={100}
              url="https://rgb.irpsc.com/fa/citizen/hm-2000001"
            />
            <span>Linkedin</span>{" "}
          </Social>
        </Socials>
        <Copy>
          <span onClick={handleCopy}>{copied ? "کپی شد" : "کپی"}</span>
          <p>https://rgb.irpsc.com/fa/citizen/hm-2000001</p>
        </Copy>
      </Modal>
    </BackGround>
  );
};

export default ShareModal;
