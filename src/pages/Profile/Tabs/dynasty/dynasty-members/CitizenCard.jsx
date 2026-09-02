import styled, { keyframes } from "styled-components";
import { Tooltip } from "react-tooltip";
import down from "../../../../../assets/images/downcitizen.png";
import citizen from "../../../../../assets/images/profile.png";
import {
  getTranslation,
  truncateText,
  metarangUrlCitizen,
} from "../../../../../services/Utility";
import { slugLabels } from "../../../../../services/constants/UserType";

const svgAnimation = keyframes`
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: 1000;
  }
`;

const Card = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  max-width: 250px;
  min-height: 450px;
  min-width: 164px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  @media (max-width: 600px) {
    width: 100%;
    max-width: 300px;
    min-height: 430px;
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    max-width: 250px;
  }

  @media (min-width: 1366px) {
    max-width: 250px;
  }
`;

const Inner = styled.div`
  position: relative;

  width: 99%;
  height: 99%;
  min-height: 440px;

  box-sizing: border-box;

  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};

  z-index: 2;

  border-radius: 8px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 15px;

  transition: all 0.2s linear;

  cursor: pointer;

  color: #fff;

  h2 {
    width: 100%;

    color: ${(props) => props.theme.colors.newColors.shades.title};

    font-size: 20px;
    font-weight: 700;

    text-align: center;

    margin: 0;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  a {
    max-width: 100%;

    color: ${(props) => props.theme.colors.primary};

    text-decoration: none;

    font-size: 16px;
    font-weight: 500;

    position: relative;
    z-index: 10;

    display: inline-block;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 600px) {
    min-height: 430px;
    padding: 15px;

    gap: 12px;

    h2 {
      font-size: 18px;
    }

    a {
      font-size: 14px;
    }
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    padding: 18px;
  }
`;

const Example5Svg = styled.svg`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 1;

  pointer-events: none;
`;

const Line = styled.rect`
  stroke-dasharray: 260;
  stroke-width: 2px;

  fill: transparent;

  stroke: ${(props) => (props.isSelected ? "#ffc700" : "transparent")};

  transition:
    stroke 0.2s ease,
    animation 0.2s ease;

  animation: ${svgAnimation} 2.5s linear infinite;

  &:hover {
    stroke: #ffc700;
    animation: ${svgAnimation} 2.5s linear infinite;
  }
`;

const Image = styled.div`
  flex-shrink: 0;

  width: 120px;
  height: 120px;

  border-radius: 50%;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;

    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const Level = styled.div`
  width: 100%;

  z-index: 1;

  p {
    color: #969696;

    font-weight: 500;
    font-size: 16px;

    margin: 0 0 10px;

    text-align: center;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  > div {
    display: flex;

    align-items: center;
    justify-content: center;

    flex-wrap: wrap;

    gap: 5px;
  }
`;

const Footer = styled.div`
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;

  margin-top: auto;

  border-radius: 10px;

  padding: 18px 14px;

  box-sizing: border-box;

  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.containerPrimary};

  span {
    color: ${(props) => props.theme.colors.primary};

    font-size: 16px;
    font-weight: 500;

    @media (max-width: 600px) {
      font-size: 14px;
    }
  }

  img {
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    width: 95%;
    padding: 14px 12px;
  }
`;

const CitizenCard = ({ name, code, image, onClick, isSelected, levels }) => {
  return (
    <Card onClick={onClick}>
      <Example5Svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <Line
          isSelected={isSelected}
          rx="8"
          ry="8"
          strokeLinejoin="bevel"
          height="100%"
          width="100%"
        />
      </Example5Svg>

      <Inner>
        <Image>
          <img
            src={image || citizen}
            alt="citizen"
            loading="lazy"
            width={120}
            height={120}
          />
        </Image>

        <h2>{truncateText(name, 15)}</h2>

        <a href={metarangUrlCitizen(code)} target="_blank" rel="noreferrer">
          {code}
        </a>

        <Level>
          <p>
            {getTranslation(724)}{" "}
            {getTranslation(
              slugLabels[(levels && levels[0] && levels[0].slug) || 0],
            )}
          </p>

          <div>
            {levels &&
              levels.map(
                (level) =>
                  level.gem.image && (
                    <div key={level.id}>
                      <img
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={getTranslation(
                          slugLabels[level.slug],
                        )}
                        src={level.gem.image}
                        alt={getTranslation(slugLabels[level.slug])}
                        width={27}
                        height={27}
                        loading="lazy"
                      />

                      <Tooltip id="my-tooltip" place="top" />
                    </div>
                  ),
              )}
          </div>
        </Level>

        <Footer onClick={() => window.open(metarangUrlCitizen(code), "_blank")}>          <span>{getTranslation(1398)}</span>

          <img alt="down" src={down} width={17} height={19} loading="lazy" />
        </Footer>
      </Inner>
    </Card>
  );
};

export default CitizenCard;
