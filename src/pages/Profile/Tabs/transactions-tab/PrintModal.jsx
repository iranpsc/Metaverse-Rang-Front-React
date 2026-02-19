// Print-only CSS: Only show Header, center it, hide print button and modal background
const PrintOnlyStyles = () => (
  <style>{`
    @media print {
      body * {
        visibility: hidden !important;
      }
      #print-header, #print-header * {
        visibility: visible !important;
      }
      #print-header {
        position: fixed !important;
        top: 50% !important;
        left: 50% !important;
        transform: translate(-50%, -50%) !important;
       

        background: none !important;
        box-shadow: none !important;
        padding: 32px !important;
        margin: 0 !important;
        border-radius: 0 !important;
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
      }
      .print-hide, .print-hide * {
        display: none !important;
      }
    }
  `}</style>
);
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckCircleFill } from "react-icons/bs";
import { ReactComponent as Exit } from "../../../../assets/svg/close.svg";
import { IoReloadCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import Button from "../../../../components/Button";
import { getFieldTranslationByNames } from "../../../../services/Utility";

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
  padding: 10px;
  z-index: 999;
  width: 415px;
  height: 600px;

  &::-webkit-scrollbar-track {
    margin: 5px 0;
  }

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
  width: 100%;
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
  margin-bottom: 10px;
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
  padding: 0 20px;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
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

const ExitIcon = styled(Exit)`
  width: 40px;
  float: left;
  height: 40px;
  cursor: pointer;
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
        <ExitIcon onClick={() => setOpenPrint(false)}></ExitIcon>
        <PrintOnlyStyles />
        <Header id="print-header" status={status}>
          <Div status={status}>
            <div />
            {status == "0" ? (
              <BsCheckCircleFill size={80} />
            ) : status == "1" ? (
              <AiFillCloseCircle size={80} />
            ) : (
              <IoReloadCircleSharp size={80} />
            )}
          </Div>
          {status == "0" ? (
            <>
              <p>{getFieldTranslationByNames("744")}</p>
              <span>{getFieldTranslationByNames("745")}</span>
            </>
          ) : status == "-138" ? (
            <>
              <p>{getFieldTranslationByNames("761")}</p>
              <span>{getFieldTranslationByNames("762")}</span>
            </>
          ) : (
            <>
              <p>{getFieldTranslationByNames("759")}</p>
              <span>{getFieldTranslationByNames("760")}</span>
            </>
          )}
          <Info>
            <Row>
              <Title>{getFieldTranslationByNames("750")}</Title>
              <Gif>
                <img
                  loading="lazy"
                  width={26}
                  height={26}
                  src={gif}
                  alt={code}
                />
                <Value>خرید {count}</Value>
              </Gif>
            </Row>
            <Row>
              <Title>{getFieldTranslationByNames("747")}</Title>
              <Value>{code}</Value>
            </Row>
            <Row>
              <Title>{getFieldTranslationByNames("748")}</Title>
              <Value>{date}</Value>
            </Row>
            <Row>
              <Title>{getFieldTranslationByNames("749")}</Title>
              <Value>{time}</Value>
            </Row>
            <Row>
              <Title>{getFieldTranslationByNames("750")}</Title>
              <Value>{title}</Value>
            </Row>
            <Row not={false}>
              <Title>{getFieldTranslationByNames("751")}</Title>
              <Value>{count}</Value>
            </Row>
            <div className="print-hide" style={{ marginTop: "10px" }}>
              <Button
                full
                label={getFieldTranslationByNames("67")}
                onclick={handlePrint}
              />
            </div>
          </Info>
        </Header>
      </Modal>
    </BackGround>
  );
};

export default PrintModal;
