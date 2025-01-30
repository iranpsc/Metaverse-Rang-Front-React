import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { convertToPersian, getFieldTranslationByNames } from "../../../../../Services/Utility";
import line from "../../../../../Assets/images/profile/Line.png";
import pscpng from "../../../../../Assets/images/profile/psc.gif";
import rialpng from "../../../../../Assets/images/profile/rial.gif";
import styled from "styled-components";
import { useLanguage } from "../../../../../Services/Reducers/LanguageContext";

import { Info, proposerContainer, BasePrice, Prices, RejectButton, Text } from "../suggestionStyles";
const Price = styled(BasePrice)`
background-color: ${(props) => (props.theme.colors.newColors.otherColors.iconBg)};
`;

const ProposalStatus = styled.div`
  p {
    color: ${(props) => (props.theme.colors.newColors.shades[30])} ;
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const TimeSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 10px;
  border-radius: 6px;
`;

const TimeBox = styled.div`
  background-color: ${(props) => (props.theme.colors.newColors.otherColors.iconBg)};
  padding: 10px 20px;
  border-radius: 6px;
  max-width: 70px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.theme.colors.newColors.shades[30])};
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  span {
    font-size: 13px;
    font-weight: 600;
    margin-top: 4px;
    color: #a0a0ab;
  }
`;

const Buttons = styled.div`
  display: grid;
  gap: 16px;
  margin-top: 16px;
`;

const Container = proposerContainer;





const Proposer = ({
  code,
  date,
  rial,
  psc,
  onReject,
  information,
  initialHours,
  initialMinutes,
  initialSeconds,
}) => {
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const isPersian = useLanguage();

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else if (hours > 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
          setSeconds(59);
        } else {
          clearInterval(countdown);
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [seconds, minutes, hours]);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Container>
      <Info isPersian={isPersian}>
        <Price >
          <h3> {getFieldTranslationByNames(9112)}</h3>
          <Prices>
            <div>
              <img width={24} height={24} src={rialpng} alt="Rial" />
              <span>{rial}</span>
            </div>
            <img width={1} height={24} src={line} alt="Line" />
            <div>
              <img width={24} height={24} src={pscpng} alt="PSC" />
              <span>{psc}</span>
            </div>
          </Prices>
        </Price>
        <Text>
          <p>
            {information && information.length > 277 ? (
              <>
                {isExpanded ? information : `${information.slice(0, 277)}...`}{" "}
                <span onClick={handleToggle}>
                  {isExpanded ? getFieldTranslationByNames(10617) : getFieldTranslationByNames(9119)}
                </span>
              </>
            ) : (
              information || ""
            )}
          </p>
        </Text>


      </Info>
      <ProposalStatus>
        <p>{getFieldTranslationByNames(9147)}</p>
        <TimeSection>
          <TimeBox>
            {convertToPersian(hours.toString().padStart(2, "0"))}
            <span>{getFieldTranslationByNames(9168)}</span>
          </TimeBox>
          <TimeBox>
            {convertToPersian(minutes.toString().padStart(2, "0"))}
            <span>{getFieldTranslationByNames(9161)}</span>
          </TimeBox>
          <TimeBox>
            {convertToPersian(seconds.toString().padStart(2, "0"))}
            <span>{getFieldTranslationByNames(9154)}</span>
          </TimeBox>
        </TimeSection>
        <Buttons>
        <RejectButton
  onClick={async () => {
    const isDeleted = await onReject(); // اجرای تابع onReject و انتظار نتیجه
    if (isDeleted) {
      setIsExploding(true); // تنظیم انیمیشن تنها در صورت موفقیت
      setTimeout(() => setIsExploding(false), 3000); // بازنشانی انیمیشن بعد از مدت زمان مشخص
    }
  }}
>
  {getFieldTranslationByNames(9126)}
  {isExploding && (
    <ConfettiExplosion
      zIndex={99999}
      particleCount={150}
      duration={3000}
      colors={["#C30000"]}
      particleSize={5}
      height="100vh"
      width={400}
      style={{
        position: "absolute", // موقعیت‌دهی نسبت به والد موجود
        left: "50%",          // مرکز افقی
        top: "50%",           // مرکز عمودی
        transform: "translate(-50%, -50%)", // تنظیم دقیق به مرکز
      }}
    />
  )}
</RejectButton>
{" "}
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

export default Proposer;
