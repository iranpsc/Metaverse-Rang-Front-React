import styled, { css, keyframes } from "styled-components";

import { Tooltip as ReactTooltip } from "react-tooltip";
import down from "../../../../../Assets/images/downcitizen.png";
import level1 from "../../../../../Assets/images/level1.png";
import level2 from "../../../../../Assets/images/level2.png";
import level3 from "../../../../../Assets/images/level3.png";
import citizen from "../../../../../Assets/images/profile.png";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";
const levels = [
  { id: "1", label: "سطح 1", image: level1 },
  { id: "2", label: "سطح 2", image: level2 },
  { id: "3", label: "سطح 3", image: level3 },
];

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
  background-color: #1a1a18;
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
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
  }
  a {
    color: #0066ff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
    position: relative;
    z-index: 10;
    display: inline-block;
  }
  background: #222;
  color: #fff;
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
  border-radius: 100%;
  overflow: hidden;
  img {
    object-fit: contain;
  }
`;

const Level = styled.div`
  z-index: 1;
  p {
    color: #969696;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 10px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  border-radius: 10px;
  padding: 18px 14px;
  background-color: #2c2c2c;
  justify-content: space-between;
  span {
    color: #ffc700;
    font-size: 16px;
    font-weight: 500;
  }
`;

const CitizenCard = ({ id, name, code, image, age, onClick, isSelected }) => {
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
          <p>سطح توسعه دهنده</p>
          <div>
            {levels.map((level) => (
              <div key={level.id}>
                <img
                  data-tooltip-id={level?.id}
                  src={level.image}
                  alt={level.label}
                  width={27}
                  height={27}
                  loading="lazy"
                />
                <ReactTooltip id={level.id} place="top" content={level.label} />
              </div>
            ))}
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
