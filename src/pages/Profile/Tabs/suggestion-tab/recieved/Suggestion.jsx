import { animated, useTransition } from "@react-spring/web";
import Proposer from "./Proposer";
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
import { Skeleton } from "../../../../../components/Skeleton";

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

// اسکلتون برای Suggestion
const SkeletonSuggestion = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Suggestion = ({
  id,
  property,
  suggestions_list,
  onRejectProposal,
  onAcceptProposal,
  isExploding,
  isExplodingAccept,
  isLoading,
}) => {
  const xCoords = property?.coordinates?.map((coord) => coord.x) || [];
  const yCoords = property?.coordinates?.map((coord) => coord.y) || [];
  const isPersian = useLanguage();
  const minX = Math.min(...xCoords);
  const maxX = Math.max(...xCoords);
  const minY = Math.min(...yCoords);
  const maxY = Math.max(...yCoords);
  const Navigate = useNavigate();
  const center = calculatePolygonCentroid(property?.coordinates || []);
  const mapRef = useMap();
  const hasXGreaterThan50 = xCoords.some((x) => x > 50);
  const normalizedPoints = property?.coordinates
    ?.map((coord) => {
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

  const transitions = useTransition(suggestions_list || [], {
    from: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(0, 40px, 0)" },
  });
  
  const handleLocation = () => {
    if (!property?.coordinates) return;
    flyToMapPosition({
      latitude: center.y,
      longitude: center.x,
      mapRef: mapRef,
      zoom: 17,
    });
    Navigate("");
  };

  // اسکلتون
  if (isLoading) {
    return (
      <SkeletonSuggestion>
        <div style={{ display: "flex", justifyContent:"space-between", alignItems:"center", gap: "20px", marginBottom: "20px" }}>
          
          <div style={{ display: "flex", gap: "10px",justifyContent:"center", alignContent:"center"}}>
            <Skeleton width="100px" height="100px" radius="10px" />
          <div style={{  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"start" , gap: "18px",}}>
            <Skeleton width="70px" height="20px" radius="4px"  />
            <Skeleton width="60px" height="16px" radius="4px"/>
          </div>
          </div>

                  <div style={{ display: "flex", gap: "40px", marginBottom: "20px", marginInlineEnd:"35px" }}>
          <Skeleton width="80px" height="40px" radius="8px" />
          <Skeleton width="120px" height="40px" radius="8px" />
        </div>
        </div>

        <Skeleton width="100%" height="300px" radius="10px" />
      </SkeletonSuggestion>
    );
  }

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
                karbari={property?.karbari}
                hasXGreaterThan50={hasXGreaterThan50}
                points={normalizedPoints}
              />
            </StyledSVG>
          </AreaContainer>
          <div>
            <p>{property?.location}</p>
            <h3 onClick={handleLocation}>{property?.code?.toUpperCase()}</h3>
          </div>
        </Location>
        <Pricing>
          <Value>
            <h2>{getFieldTranslationByNames("767")}</h2>
            <div>
              <img
                width={24}
                height={24}
                src={{ m: yellow, t: red, a: blue }[property?.karbari] || null}
                alt=""
              />
              <span>{convertToPersian(property?.value)}</span>
            </div>
          </Value>
          <Price>
            <h2>{getFieldTranslationByNames("770")}</h2>
            <Prices isPersian={isPersian}>
              {[
                { src: rial, value: property?.rial },
                { src: psc, value: property?.psc },
              ].map(({ src, value }, index) => (
                <div key={index}>
                  <img width={24} height={24} src={src} alt="" />
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