import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import {
  convertToPersian,
  getFieldTranslationByNames,
  SanitizeHTML,
} from "../../../../../services/Utility/index";
import line from "../../../../../assets/images/profile/Line.png";
import pscpng from "../../../../../assets/images/profile/psc.gif";
import rialpng from "../../../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useLanguage } from "../../../../../services/reducers/LanguageContext";

import {
  Info,
  proposerContainer,
  BasePrice,
  Prices,
  RejectButton,
  Text,
} from "../suggestionStyles";
const Price = styled(BasePrice)`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};
`;

const ProposalStatus = styled.div`
  p {
    color: ${(props) => props.theme.colors.newColors.shades[30]};
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};
  padding: 10px 20px;
  border-radius: 6px;
  max-width: 70px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.newColors.shades[30]};
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
  rial,
  psc,
  onReject,
  information,
  initialHours = 0,
  initialMinutes = 0,
  initialSeconds = 0,
}) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const isPersian = useLanguage();

  useEffect(() => {
    if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) return;

    const countdown = setInterval(() => {
      setTime(({ hours, minutes, seconds }) => {
        if (seconds > 0) return { hours, minutes, seconds: seconds - 1 };
        if (minutes > 0) return { hours, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { hours: hours - 1, minutes: 59, seconds: 59 };
        clearInterval(countdown);
        return { hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [time]);
  return (
    <Container>
      <Info isPersian={isPersian}>
        <Price>
          <h3>{getFieldTranslationByNames("773")}</h3>
          <Prices>
            <PriceItem src={rialpng} value={rial} />
            <img width={1} height={24} src={line} alt="Line" />
            <PriceItem src={pscpng} value={psc} />
          </Prices>
        </Price>
        <Text>
          <p
            dangerouslySetInnerHTML={{
              __html:
                information?.length > 277
                  ? isExpanded
                    ? SanitizeHTML(information)
                    : SanitizeHTML(`${information.slice(0, 277)}...`)
                  : SanitizeHTML(information || ""),
            }}
          />
          {information?.length > 277 && (
            <span onClick={() => setIsExpanded(!isExpanded)}>
              {getFieldTranslationByNames(isExpanded ? "884" : "774")}
            </span>
          )}
        </Text>
      </Info>
      <ProposalStatus>
        <p>{getFieldTranslationByNames("777")}</p>
        <TimeSection>
          {["hours", "minutes", "seconds"].map((unit, index) => (
            <TimeBox key={index}>
              {convertToPersian(time[unit].toString().padStart(2, "0"))}
              <span>
                {getFieldTranslationByNames(["560", "33", "778"][index])}
              </span>
            </TimeBox>
          ))}
        </TimeSection>
        <Buttons>
          <RejectButton
            onClick={() => {
              onReject();
              setIsExploding(true);
              setTimeout(() => setIsExploding(false), 3000);
            }}
          >
            {getFieldTranslationByNames("775")}
            {isExploding && <ConfettiEffect />}
          </RejectButton>
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

const PriceItem = ({ src, value }) => (
  <div>
    <img width={24} height={24} src={src} alt="Currency" />
    <span>{value}</span>
  </div>
);

const ConfettiEffect = () => (
  <ConfettiExplosion
    zIndex={9999}
    particleCount={150}
    duration={3000}
    colors={["#C30000"]}
    particleSize={5}
    height="100vh"
    width={400}
    style={{
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />
);

export default Proposer;
