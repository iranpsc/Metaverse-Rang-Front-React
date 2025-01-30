import { animated, useTransition } from "react-spring";

import Proposer from "./Proposer";
import line from "../../../../../Assets/images/profile/Line.png";
import psc from "../../../../../Assets/images/profile/psc.gif";
import red from "../../../../../Assets/images/profile/red-color.gif";
import rial from "../../../../../Assets/images/profile/rial.gif";
import styled from "styled-components";
import { SuggestionsContainer, Location, Property, Value, Suggestions, AreaContainer, StyledSVG, Polygon } from "../suggestionStyles";
import { getFieldTranslationByNames } from "../../../../../Services/Utility/index";
import { useLanguage } from "../../../../../Services/Reducers/LanguageContext";

const Container = SuggestionsContainer;

const Pricing = styled.div`
  display: flex;
  align-items: center;
 gap: 60px;
  @media (min-width: 840px) {
    gap: 120px;
  }
`;

const Price = styled.div`
  h2 {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Prices = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ isPersian }) => (isPersian ? 'margin-left: 70px;' : 'margin-right: 70px;')};

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  span {
    color: ${(props) => props.theme.colors.newColors.shades[30]};
    font-size: 18px;
    font-weight: 500;
  }
`;




const Suggestion = ({ id, property, suggestions_list, onRejectProposal }) => {
  const xCoords = property.coordinates.map((coord) => coord.x);
  const yCoords = property.coordinates.map((coord) => coord.y);
  const isPersian = useLanguage();
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);

  const hasXGreaterThan50 = xCoords.some((x) => x > 50);

  const normalizedPoints = property.coordinates
    .map((coord) => {
      const normalizedX =
        coord.x > 50
          ? ((coord.x - minX) / (maxX - minX)) * 40
          : ((coord.x - minX) / (maxX - minX)) * 100;
      const normalizedY =
        coord.x > 50
          ? ((coord.y - minY) / (maxY - minY)) * 140
          : ((coord.y - minY) / (maxY - minY)) * 100;
      return `${normalizedX},${normalizedY}`;
    })
    .join(" ");

  const transitions = useTransition(suggestions_list, {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });

  return (
    <Container>
      <Property>
        <Location>
          <AreaContainer>
            <StyledSVG
              viewBox={` ${hasXGreaterThan50 ? -15 : -30} ${hasXGreaterThan50 ? -85 : -110
                } 150 ${hasXGreaterThan50 ? 100 : 120}`}
            >
              <Polygon
                hasXGreaterThan50={hasXGreaterThan50}
                points={normalizedPoints}
              />
            </StyledSVG>
          </AreaContainer>
          <div>
            <p>{property.location}</p>
            <h3>{property.code}</h3>
          </div>
        </Location>
        <Pricing>
          <Value>
            <h2>{getFieldTranslationByNames(9056)} </h2>
            <div>
              <img width={24} height={24} src={red} />
              <span>{property.value}</span>
            </div>
          </Value>
          <Price>
            <h2>{getFieldTranslationByNames(9091)}</h2>
            <Prices isPersian={isPersian}>
              <div>
                <img width={24} height={24} src={rial} />
                <span>{property.rial}</span>
              </div>
              <img width={1} height={24} src={line} />
              <div>
                <img width={24} height={24} src={psc} />
                <span>{property.psc}</span>
              </div>
            </Prices>
          </Price>
        </Pricing>
      </Property>
      <Suggestions>
        {transitions((style, item) => (
          <animated.div key={item.id} style={style}>
            <Proposer
              {...item}
              onReject={() => onRejectProposal(id, item.id)}
            />
          </animated.div>
        ))}
      </Suggestions>
    </Container>
  );
};

export default Suggestion;
