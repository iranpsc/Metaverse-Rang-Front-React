import Button from "../../../../../Components/Button";
import ConfettiExplosion from "react-confetti-explosion";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { convertToPersian, getFieldTranslationByNames } from "../../../../../Services/Utility/index";
import line from "../../../../../Assets/images/profile/Line.png";
import person from "../../../../../Assets/images/profile/slide.png";
import pscpng from "../../../../../Assets/images/profile/psc.gif";
import rialpng from "../../../../../Assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";
import { useLanguage } from "../../../../../Services/Reducers/LanguageContext";

import { Info, proposerContainer, BasePrice, Prices, RejectButton, Text } from "../suggestionStyles";
const Price = BasePrice;
const ProposalStatus = styled.div``;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;
const Person = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    border-radius: 100%;
  }
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    color: #0066ff;
  }
`;
const Time = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
  h3 {
    color:${(props) => (props.theme.colors.newColors.shades[30])};
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
  }
`;
const Container = proposerContainer;

const Days = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => (props.theme.colors.newColors.otherColors.inputBorder)};
  button {
    background-color: ${(props) => (props.theme.colors.newColors.otherColors.iconBg)};
    white-space: nowrap;
    font-size: 16px;
    padding: 8px;
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
  @media (min-width: 1366px) {
    grid-template-columns: 1fr;
  }
`;

const Div = styled.div`
  padding-bottom: 16px;
  border-bottom: 1px solid #454545;
`;
const Remained = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 22px;
  border-radius: 10px;
  border: 1px solid #454545;
  color: #949494;
  font-size: 16px;
  font-weight: 400;
`;

const Proposer = ({
  code,
  date,
  rial,
  psc,
  information,
  percent,
  onReject,
}) => {
  const [day, setDay] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const isPersian = useLanguage();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container>
      <Info isPersian={isPersian}>
        <Header>
          <Person>
            <img src={person} alt={code} width={60} height={60} />
            <div>
              <p>{getFieldTranslationByNames(9070)}</p>
              <a href="https://rgb.irpsc.com/fa/citizen/hm-2000001">{code}</a>
            </div>
          </Person>
          <Time>
            <div>
              <p>{getFieldTranslationByNames(9077)}</p>
              <h3>{date}</h3>
            </div>
          </Time>
        </Header>
        <Price>
          <h3>{getFieldTranslationByNames(9112)}</h3>
          <Prices>
            <div>
              <img width={24} height={24} src={rialpng} />
              <span>{rial}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <img width={24} height={24} src={pscpng} />
              <span>{psc}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <MdOutlineKeyboardArrowUp style={{ color: "#18C08F" }} />
              <h3>{percent}</h3>
            </div>
          </Prices>
        </Price>
        <Text>
          <p>
            {isExpanded ? information : `${information.slice(0, 227)}...`}{" "}
            <span onClick={handleToggle}>
              {isExpanded ? getFieldTranslationByNames(10617) : getFieldTranslationByNames(9119)}
            </span>
          </p>
        </Text>
      </Info>
      <ProposalStatus>
        {day === 0 && (
          <Days>
            <Button
              onclick={() => setDay(7)}
              label={`${convertToPersian(7)} ${getFieldTranslationByNames(9105)} `}
              color="#3B3B3B"
              textColor="#949494"
              full
            />
            <Button
              onclick={() => setDay(1)}
              label={`${convertToPersian(1)} ${getFieldTranslationByNames(9105)} `}
              color="#3B3B3B"
              textColor="#949494"
              full
            />
          </Days>
        )}
        {day !== 0 && (
          <Div>
            <Remained>{convertToPersian(day)} {getFieldTranslationByNames(15671)}</Remained>
          </Div>
        )}
        <Buttons>
          <RejectButton
            onClick={() => {
              onReject();
              setIsExploding(!isExploding);
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
          <Button
            label={getFieldTranslationByNames(9133)}

            color="#18C08F"
            textColor="#FFFFFF"
            full
          />
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

export default Proposer;
