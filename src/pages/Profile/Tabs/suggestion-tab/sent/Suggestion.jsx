import { animated, useTransition } from "react-spring";
import Proposer from "./Proposer";
import red from "../../../../../assets/images/profile/red-color.gif";
import yellow from "../../../../../assets/images/profile/yellow-color.gif";
import blue from "../../../../../assets/images/profile/blue-color.gif";
import styled from "styled-components";
import { SuggestionsContainer, Location, Property, Value, Suggestions, AreaContainer, StyledSVG, Polygon } from "../suggestionStyles";
import { getFieldTranslationByNames } from "../../../../../services/Utility";
import { useNavigate } from "react-router-dom";
import { useMap } from "react-map-gl";
import { calculatePolygonCentroid } from "../../../../../services/Utility/calculatePolygonCentroid";
import { flyToMapPosition } from "../../../../../services/Utility/flyToMapPosition";

const Container = SuggestionsContainer;
const Pricing = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1366px) {
    gap: 120px;
    width: auto;
    flex-direction: row-reverse;
  }
`;

const Owner = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: #0066ff;
    font-size: 16px;
    font-weight: 500;
    margin-top: 4px;
  }
`;

const Time = styled.div`
  p {
    color: #a0a0ab;
    font-size: 14px;
    font-weight: 600;
  }

  h3 {
    color: ${(props) => (props.theme.colors.newColors.shades[30])};
    font-size: 18px;
    font-weight: 500;
    margin-top: 4px;
  }

  @media (min-width: 1366px) {
    margin-left: 70px;
  }
`;




const Suggestion = ({ id, property, suggestions_list, onRejectProposal }) => {

  const navigate = useNavigate();
  const xCoords = property.coordinates.map((coord) => coord.x);
  const yCoords = property.coordinates.map((coord) => coord.y);
  const center = calculatePolygonCentroid(property.coordinates);
  const mapRef = useMap();
  const handleLocation = () => {
    flyToMapPosition({
      latitude: center.y,
      longitude: center.x,
      mapRef: mapRef,
      zoom: 17,
    });
    navigate("/metaverse")
  }
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
            <StyledSVG viewBox={`${hasXGreaterThan50 ? -15 : -30} ${hasXGreaterThan50 ? -85 : -110} 150 ${hasXGreaterThan50 ? 100 : 120}`}>
              <Polygon karbari={property.karbari} hasXGreaterThan50={hasXGreaterThan50} points={normalizedPoints} />
            </StyledSVG>
          </AreaContainer>
          <div>
            <p>{property.location}</p>
            <h3 onClick={handleLocation}>{property.code}</h3>
          </div>
        </Location>
        <Pricing>
          <Time>
            <p>{getFieldTranslationByNames("769")}</p>
            <h3>{property.date}</h3>
          </Time>
          <Value>
            <h2>{getFieldTranslationByNames("767")}</h2>
            <div>
              {property.karbari && <img width={24} height={24} src={{ m: yellow, t: red, a: blue }[property.karbari]} />}
              <span>{property.value}</span>
            </div>
          </Value>
          <Owner>
            <p>{getFieldTranslationByNames("346")}</p>
            <a target="_blank" rel="noopener noreferrer" href={`https://rgb.irpsc.com/fa/citizen/${property.owner}`}>
              {property.owner}
            </a>
          </Owner>
        </Pricing>
      </Property>
      <Suggestions>
        {transitions((style, item) => (
          <animated.div key={item.id} style={style}>
            <Proposer {...item} onReject={() => onRejectProposal(id, item.id)} property={property} />
          </animated.div>
        ))}
      </Suggestions>
    </Container>
  );
  
};

export default Suggestion;
