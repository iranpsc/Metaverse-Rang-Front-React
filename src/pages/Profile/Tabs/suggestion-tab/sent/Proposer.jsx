import Button from "../../../../../components/Button";
import ConfettiExplosion from "react-confetti-explosion";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import {
  convertToPersian,
  getFieldTranslationByNames,
  ToastError,
} from "../../../../../services/Utility/index";
import line from "../../../../../Assets/images/profile/Line.png";
import person from "../../../../../Assets/images/profile/slide.png";
import pscpng from "../../../../../Assets/images/profile/psc.gif";
import rialpng from "../../../../../Assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../../../../services/reducers/LanguageContext";
import {
  Info,
  proposerContainer,
  BasePrice,
  Prices,
  RejectButton,
  Text,
} from "../suggestionStyles";
import useRequest from "../../../../../services/Hooks/useRequest/index";
import { useNavigate } from "react-router-dom";

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
    color: ${(props) => props.theme.colors.newColors.shades[30]};
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
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  button {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.iconBg};
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
  border-bottom: 1px solid #a0a0ab;
`;
const Remained = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 22px;
  border-radius: 10px;
  border: 1px solid #a0a0ab;
  color: #949494;
  font-size: 16px;
  font-weight: 400;
`;
const StyledArrowUp = styled(MdOutlineKeyboardArrowUp)`
  color: ${({ percent }) => (percent > 0 ? "#18C08F" : "#FF0000")};
  rotate: ${({ percent }) => (percent > 0 ? "" : "180deg")};
`;
const Proposer = ({
  code,
  date,
  rial,
  psc,
  information,
  percent,
  onReject,
  onAccept,
  property,
  id,
}) => {
  const [day, setDay] = useState(property.gracePeriod || 0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [isExplodingAccept, setIsExplodingAccept] = useState(false);
  const isPersian = useLanguage();
  const { Request } = useRequest();
  const navigate = useNavigate();
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const handleGracePeriod = async (selectedDay) => {
    if (!id) return console.error("Error: id is undefined!");

    try {
      await Request(
        `buy-requests/add-grace-period/${id}`,
        "POST",
        new FormData().append("grace_period", selectedDay.toString()),
        {
          headers: { "Content-Type": "application/json" },
        },
        "production"
      );
      setDay(selectedDay);
    } catch (error) {
     
    }
  };

  return (
    <Container>
      <Info isPersian={isPersian}>
        <Header>
          <Person>
            <img
              src={property.profile_photo}
              alt={code}
              width={60}
              height={60}
            />
            <div>
              <p>{getFieldTranslationByNames("768")}</p>
              <a
                target="blank"
                href={`https://rgb.irpsc.com/fa/citizen/${code}`}
              >
                {code.toUpperCase()}
              </a>
            </div>
          </Person>
          <Time>
            <div>
              <p>{getFieldTranslationByNames("769")}</p>
              <h3>{convertToPersian(date)}</h3>
            </div>
          </Time>
        </Header>
        <Price percent={percent}>
          <h3>{getFieldTranslationByNames("773")}</h3>
          <Prices percent={percent}>
            <div>
              <img width={24} height={24} src={rialpng} />
              <span>{convertToPersian(rial)}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <img width={24} height={24} src={pscpng} />
              <span>{convertToPersian(psc)}</span>
            </div>
            <img width={1} height={24} src={line} />
            <div>
              <StyledArrowUp percent={percent} />
              <h3>{convertToPersian(Math.abs(percent))}%</h3>
            </div>
          </Prices>
        </Price>
        <Text>
          <p>
            {information && information.length > 277 ? (
              <>
                {isExpanded ? information : `${information.slice(0, 277)}...`}{" "}
                <span onClick={handleToggle}>
                  {isExpanded
                    ? getFieldTranslationByNames("884")
                    : getFieldTranslationByNames("774")}
                </span>
              </>
            ) : (
              information || ""
            )}
          </p>
        </Text>
      </Info>
      <ProposalStatus>
        {day === 0 && (
          <Days>
            <Button
              onClick={() => {
                handleGracePeriod(7);
              }}
              label={`${convertToPersian(7)} ${getFieldTranslationByNames(
                "772"
              )} `}
              color="#3B3B3B"
              textColor="#949494"
              full
            />
            <Button
              onClick={() => {
                handleGracePeriod(1);
              }}
              label={`${convertToPersian(1)} ${getFieldTranslationByNames(
                "772"
              )} `}
              color="#3B3B3B"
              textColor="#949494"
              full
            />
          </Days>
        )}
        {day !== 0 && (
          <Div>
            <Remained>
              {convertToPersian(day)} {getFieldTranslationByNames("1413")}
            </Remained>
          </Div>
        )}
        <Buttons>
          <RejectButton
            onClick={() => {
              onReject();
              setIsExploding(!isExploding);
            }}
          >
            {getFieldTranslationByNames("775")}
            {isExploding && (
              <ConfettiExplosion
                zIndex={10}
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
            )}
          </RejectButton>
          <div style={{ position: "relative" }}>
            <Button
              label={getFieldTranslationByNames("776")}
              color="#18C08F"
              textColor="#FFFFFF"
              onClick={() => {
                setIsExplodingAccept(true);

                onAccept();
              }}
              full
            />

            {isExplodingAccept && (
              <ConfettiExplosion
                zIndex={10}
                particleCount={150}
                duration={3000}
                colors={["#18C08F"]}
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
            )}
          </div>
        </Buttons>
      </ProposalStatus>
    </Container>
  );
};

export default Proposer;
