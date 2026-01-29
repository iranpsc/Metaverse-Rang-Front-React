import { animated, useTransition } from "react-spring";
import Proposer from "./Proposer";
import line from "../../../../../assets/images/profile/Line.png";
import psc from "../../../../../assets/images/profile/psc.gif";
import red from "../../../../../assets/images/profile/red-color.gif";
import yellow from "../../../../../assets/images/profile/yellow-color.gif";
import blue from "../../../../../assets/images/profile/blue-color.gif";
import { useMap } from "react-map-gl";
import { useNavigate } from "react-router-dom";
import rial from "../../../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import {
  SuggestionsContainer,
  Location,
  Property,
  Value,
  Suggestions,
  AreaContainer,
  StyledSVG,
  Polygon,
} from "../suggestionStyles";
import {
  getFieldTranslationByNames,
  convertToPersian,
} from "../../../../../services/Utility/index";
import { useLanguage } from "../../../../../services/reducers/LanguageContext";
import { calculatePolygonCentroid } from "../../../../../services/Utility/calculatePolygonCentroid";
import { flyToMapPosition } from "../../../../../services/Utility/flyToMapPosition";

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

  ${({ isPersian }) =>
    isPersian ? "margin-left: 70px;" : "margin-right: 70px;"};

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

const Suggestion = ({
  id,
  property,
  suggestions_list,
  onRejectProposal,
  onAcceptProposal,
  isExploding,
  isExplodingAccept,
}) => {
  const xCoords = property.coordinates.map((coord) => coord.x);
  const yCoords = property.coordinates.map((coord) => coord.y);
  const isPersian = useLanguage();
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  const Navigate = useNavigate();
  const center = calculatePolygonCentroid(property.coordinates);
  const mapRef = useMap();
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
  const handleLocation = () => {
    flyToMapPosition({
      latitude: center.y,
      longitude: center.x,
      mapRef: mapRef,
      zoom: 17,
    });
    Navigate("/metaverse");
  };
  return (
    <Container>
      <Property>
        <Location>
          <AreaContainer>
            <StyledSVG
              viewBox={` ${hasXGreaterThan50 ? -15 : -30} ${
                hasXGreaterThan50 ? -85 : -110
              } 150 ${hasXGreaterThan50 ? 100 : 120}`}
            >
              <Polygon
                karbari={property.karbari}
                hasXGreaterThan50={hasXGreaterThan50}
                points={normalizedPoints}
              />
            </StyledSVG>
          </AreaContainer>
          <div>
            <p>{property.location}</p>
            <h3 onClick={handleLocation}>{property.code.toUpperCase()}</h3>
          </div>
        </Location>
        <Pricing>
          <Value>
            <h2>{getFieldTranslationByNames("767")}</h2>
            <div>
              <img
                width={24}
                height={24}
                src={{ m: yellow, t: red, a: blue }[property.karbari] || null}
              />
              <span>{convertToPersian(property.value)}</span>
            </div>
          </Value>
          <Price>
            <h2>{getFieldTranslationByNames("770")}</h2>
            <Prices isPersian={isPersian}>
              {[
                { src: rial, value: property.rial },
                { src: psc, value: property.psc },
              ].map(({ src, value }, index) => (
                <div key={index}>
                  <img width={24} height={24} src={src} />
                  <span>{convertToPersian(value)}</span>
                </div>
              ))}
            </Prices>
          </Price>
        </Pricing>
      </Property>
      <Suggestions>
        {transitions((style, item) => (
          <animated.div key={item.id} style={style}>
            <Proposer
              isExplodingAccept={isExplodingAccept}
              isExploding={isExploding}
              {...item}
              property={property}
              onReject={() => onRejectProposal(id, item.id)}
              onAccept={() => onAcceptProposal(id, item.id)}
            />
          </animated.div>
        ))}
      </Suggestions>
    </Container>
  );
};

export default Suggestion;
