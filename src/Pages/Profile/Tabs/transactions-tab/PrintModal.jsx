import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";

import { IoIosClose } from "react-icons/io";
import { IoReloadCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import Button from "../../../../Components/Button";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

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
  position: relative;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  overflow-y: auto;

  padding: 20px;
  z-index: 999;
  width: 415px;
  height: 600px;
  @media (min-width: 660px) {
    height: 300px;
  }
  @media (min-width: 840px) {
    height: 300px;
  }
  @media (min-width: 930px) {
    height: 350px;
  }
  @media (min-width: 1024px) {
    height: 600px;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${(props) =>
      props.status == "0"
        ? "#00966d"
        : props.status == "-138"
        ? "#C30000"
        : "#FFC700"};
    font-size: 24px;
    font-weight: 600;
  }
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
`;
const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.status == "0"
      ? "#00966d"
      : props.status == "-138"
      ? "#C30000"
      : "#FFC700"};
  margin-bottom: 20px;
  div {
    z-index: 0;
    position: absolute;
    border-radius: 100%;
    background-color: white;
    width: 50px;
    height: 50px;
  }
  svg {
    z-index: 1;
  }
`;

const Info = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 20px;
  border-radius: 10px;
  margin-top: 20px;
  direction: rtl;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: ${(props) => props.not !== false && "1px solid #454545"};
  justify-content: space-between;
`;
const Title = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-weight: 500;
`;
const Value = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 400;
`;
const Gif = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CloseWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: rgb(59, 8, 8);
  cursor: pointer;
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
  }
  svg {
    color: red;
  }
`;

const PrintModal = ({
  code,
  date,
  gif,
  time,
  status,
  title,
  count,
  setOpenPrint,
}) => {
  const handlePrint = () => {
    window.print();
  };
  return (
    <BackGround>
      <Modal>
        <Header status={status}>
          <Div status={status}>
            <div />
            {status == "0" ? (
              <BsCheckCircleFill size={80} />
            ) : status == "-138" ? (
              <AiFillCloseCircle size={80} />
            ) : (
              <IoReloadCircleSharp size={80} />
            )}
          </Div>
          {status == "0" ? (
            <>
              <p>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "thank you for your purchase"
                )}
              </p>
              <span>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "your purchase has been successfully registered"
                )}
              </span>
            </>
          ) : status == "-138" ? (
            <>
              <p>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "your transaction has not been completed"
                )}
              </p>
              <span>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "unfortunately, your transaction has been rejected"
                )}
              </span>
            </>
          ) : (
            <>
              <p>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "your transaction is being processed"
                )}
              </p>
              <span>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "your transaction will be checked in a few minutes"
                )}
              </span>
            </>
          )}
        </Header>
        <Info>
          <Row>
            <Title>موضوع</Title>
            <Gif>
              <img loading="lazy" width={26} height={26} src={gif} alt={code} />
              <Value>خرید {count}</Value>
            </Gif>
          </Row>
          <Row>
            <Title>
              {getFieldTranslationByNames("citizenship-account", "deposit id")}
            </Title>
            <Value>{code}</Value>
          </Row>
          <Row>
            <Title>
              {getFieldTranslationByNames(
                "citizenship-account",
                "date of deposit"
              )}
            </Title>
            <Value>{date}</Value>
          </Row>
          <Row>
            <Title>
              {getFieldTranslationByNames(
                "citizenship-account",
                "deposit time"
              )}
            </Title>
            <Value>{time}</Value>
          </Row>
          <Row>
            <Title>
              {getFieldTranslationByNames(
                "citizenship-account",
                "payment title"
              )}
            </Title>
            <Value>{title}</Value>
          </Row>
          <Row not={false}>
            <Title>
              {getFieldTranslationByNames("citizenship-account", "amount paid")}
            </Title>
            <Value>{count}</Value>
          </Row>
          <div style={{ marginTop: "10px" }}>
            <Button
              full
              label={getFieldTranslationByNames(
                "citizenship-account",
                "view-print"
              )}
              onclick={handlePrint}
            />
          </div>
        </Info>
        <CloseWrapper onClick={() => setOpenPrint(false)}>
          <IoIosClose size={40} />
        </CloseWrapper>
      </Modal>
    </BackGround>
  );
};

export default PrintModal;
