import {
  FacebookShare,
  LinkedinShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import styled from "styled-components";
import { useState } from "react";
import { ExitIcon } from "../../../../components/Icons/IconsHeader";
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
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border: 1px solid gray;

  overflow-y: auto;
  padding: 20px;
  width: 500px;
  max-height: 577px;
  
`;
const Header = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.newColors.shades.title};
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

const Copy = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border-radius: 10px;
  margin-top: 40px;
  gap: 5px;
  white-space: nowrap;
  padding: 5px 5px 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    border-radius: 20px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 0 20px;
    cursor: pointer;
    color: ${(props) => props.theme.colors.newColors.primaryText};
  }
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }
`;

const ShareModal = ({ setOpenShare, data }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    const textToCopy = `https://rgb.irpsc.com/fa/citizens/${data?.code}`;

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
          <ExitIcon onClick={() => setOpenShare(false)}>X</ExitIcon>
          <span> {getFieldTranslationByNames("324")} </span>
          <div />
        </Header>
        <Socials>
          <Social>
            <WhatsappShare
              size={52}
              borderRadius={100}
              url={`https://rgb.irpsc.com/fa/citizens/${data?.code}`}
            />
            <span>Whatsapp</span>
          </Social>
          <Social>
            <TelegramShare
              size={52}
              borderRadius={100}
              url={`https://rgb.irpsc.com/fa/citizens/${data?.code}`}
            />
            <span>Telegram</span>{" "}
          </Social>
          <Social>
            <FacebookShare
              size={52}
              borderRadius={100}
              url={`https://rgb.irpsc.com/fa/citizens/${data?.code}`}
            />
            <span>Facebook</span>{" "}
          </Social>
          <Social>
            <TwitterShare
              size={52}
              borderRadius={100}
              url={`https://rgb.irpsc.com/fa/citizens/${data?.code}`}
            />
            <span>Twitter</span>{" "}
          </Social>
          <Social>
            <LinkedinShare
              size={52}
              borderRadius={100}
              url={`https://rgb.irpsc.com/fa/citizens/${data?.code}`}
            />
            <span>Linkedin</span>{" "}
          </Social>
        </Socials>
        <Copy>
          <span onClick={handleCopy}>
            {copied
              ? getFieldTranslationByNames("1476")
              : getFieldTranslationByNames("323")}
          </span>
          <p> {`https://rgb.irpsc.com/fa/citizens/${data?.code}`}</p>
        </Copy>
      </Modal>
    </BackGround>
  );
};

export default ShareModal;
