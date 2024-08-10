import { IoIosClose } from "react-icons/io";
import styled from "styled-components";

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
  direction: ltr;
  overflow-y: auto;
  padding: 20px;
  max-width: 680px;
  max-height: 577px;
  @media (max-width: 850px) {
    max-width: 590px !important;
  }
  @media (max-width: 1023px) {
    height: 80%;
    overflow-y: auto;
  }
`;
const Header = styled.div`
  display: flex;
  direction: rtl;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 1023px) {
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: right;
  color: #ffffff;
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;
const Info = styled.p`
  color: #dedee9;
  font-weight: 400;
  text-align: justify;
  direction: rtl;
  margin: 20px 0;
  font-size: 16px;
`;
const CloseWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(59, 8, 8);
  cursor: pointer;
  svg {
    color: red;
    font-size: 40px;
  }
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
    svg {
      font-size: 50px;
    }
  }
`;

const InfoModal = ({ data, type, setOpenModal }) => {
  return (
    <BackGround>
      <Modal>
        <Header>
          <img
            src={data.image}
            alt={data.image}
            width={160}
            height={160}
            loading="lazy"
          />
          <CloseWrapper onClick={() => setOpenModal(false)}>
            <IoIosClose />
          </CloseWrapper>
        </Header>
        <div>
          <Title>
            {type === "ابزار" ? `رنگ ${data.type}` : `${data.type}`}
          </Title>
          <Info>{data.info}</Info>
        </div>
      </Modal>
    </BackGround>
  );
};

export default InfoModal;
