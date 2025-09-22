import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";
import Input from "./Input";
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
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  overflow-y: auto;
  padding: 20px;
  width: 760px;
  max-height: 577px;
  @media (max-width: 1023px) {
    height: 60%;
    overflow-y: auto;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  @media (max-width: 1023px) {
    font-size: 18px;
  }
`;
const Info = styled.p`
  width: fit-content;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  text-align: justify;
  margin: 10px auto;
  font-size: 16px;
  @media (max-width: 1023px) {
    font-size: 14px;
  }
`;

const Inputs = styled.div`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: ${(props) => (props.blue ? "#18C08F" : "#E9E9E9")};
  color: ${(props) => (props.blue ? "#FFFFFF" : "#949494")} !important;
  border: none;
  padding: 0 14px;
  width: fit-content;
  height: 45px;
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
  color: #191b21;
  font-family: inherit;
`;
const EnterConfirmModal = ({ data, setPayStatus, setPayed, setLoading }) => {
  const enterHandler = () => {
    setLoading(true);
  };

  return (
    <BackGround>
      <Modal>
        <Title>
          {getFieldTranslationByNames("548")}
        </Title>
        <Info>
          {getFieldTranslationByNames("549")}
          {convertToPersian(20)}
          {getFieldTranslationByNames("550")}
        </Info>
        <Inputs>
          {data[0].inputs.slice(0, 2).map((input) => (
            <Input {...input} key={input.id} />
          ))}
        </Inputs>
        <Buttons>
          <Button blue onClick={enterHandler}>
            {getFieldTranslationByNames("536")}
          </Button>
          <Button onClick={() => setPayStatus(false)}>
            {getFieldTranslationByNames("551")}
          </Button>
        </Buttons>
      </Modal>
    </BackGround>
  );
};

export default EnterConfirmModal;
