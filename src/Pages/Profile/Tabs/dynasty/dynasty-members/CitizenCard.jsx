import styled, { keyframes } from "styled-components";
import { Tooltip } from "react-tooltip";
import down from "../../../../../assets/images/downcitizen.png";
import citizen from "../../../../../assets/images/anonymous.png";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
import { slugLabels } from "../../../../../Services/Constants/UserType";

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
`;
const Inner = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  z-index: 2;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s linear;
  cursor: pointer;
  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 700;
    max-width: 100%;
    max-width: 250px; /* حداکثر عرض برای نام */
  }
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    z-index: 10;
    display: inline-block;
  }
  color: #fff;
  
  @media (max-width: 600px) {
    padding: 10px;
    h2 {
      font-size: 16px;
      max-width: 150px;
    }
  }
`;

const Example5Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Line = styled.rect`
  stroke-dasharray: 260;
  stroke-width: 2px;
  fill: transparent;
  stroke: ${(props) => (props.isSelected ? `#ffc700` : ``)};
  transition: stroke 0.2s ease, animation 0.2s ease;
  animation: ${svgAnimation} 2.5s linear infinite;
  &:hover {
    stroke: #ffc700;
    animation: ${svgAnimation} 2.5s linear infinite;
  }
`;

const Image = styled.div`
  width: 120px;
  height: 120px;
  max-width: 120px;
  max-height: 120px;
  border-radius: 100%;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 600px) {
    width: 80px;
    height: 80px;
    max-width: 80px;
    max-height: 80px;
  }
`;

const Level = styled.div`
  z-index: 1;
  p {
    color: #969696;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
      min-height: 35px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  padding: 18px 14px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.containerPrimary};
  justify-content: space-between;
  span {
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
    font-weight: 500;
  }
`;

const CitizenCard = ({
  id,
  name,
  code,
  image,
  age,
  onClick,
  isSelected,
  levels,
}) => {
  return (
    <Card onClick={onClick}>
      <Example5Svg xmlns="http://www.w3.org/2000/svg">
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
        <h2>{name}</h2>
        <a href={`https://rgb.irpsc.com/fa/citizen/${code}`} target="_blank">
          {code}
        </a>
        <Level>
          <p>
            {" "}
            {getFieldTranslationByNames(724)}{" "}
            {getFieldTranslationByNames(
              slugLabels[(levels && levels[0] && levels[0].slug) || 0]
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
                        data-tooltip-content={getFieldTranslationByNames(
                          slugLabels[level.slug]
                        )}
                        src={level.gem.image}
                        alt={getFieldTranslationByNames(slugLabels[level.slug])}
                        width={27}
                        height={27}
                        loading="lazy"
                      />
                      <Tooltip id="my-tooltip" place="top" />
                    </div>
                  )
              )}
          </div>
        </Level>
        <Footer>
          <span>{getFieldTranslationByNames(1398)}</span>
          <img alt="down" src={down} width={17} height={19} loading="lazy" />
        </Footer>
      </Inner>
    </Card>
  );
};

export default CitizenCard;
