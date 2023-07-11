import React from "react";
import styled from "styled-components";
import BuyingHouseIcon from "../../../Assets/images/buying-house-128.png";
import PropertyValueBalanceIcon from "../../../Assets/images/property-value-balance-128.png";
import PropertyLocationIcon from "../../../Assets/images/property-location-128.png";
import LocationPin from "../../../Assets/gif/location-pin.gif";
import RedHouseIcon from "../../../Assets/images/redHouse.png";
import YellowHouseIcon from "../../../Assets/images/yellowHouse.png";
import BlueHouseIcon from "../../../Assets/images/blueHouse.png";
import IrrIcon from "../../../Assets/images/coin-irr.png";
import PscIcon from "../../../Assets/images/coin-psc.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MapContext } from "../../../Layouts/Map";
import flyToPosition from "../../../Layouts/Map/FlyToGift";
const FeatureItem = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 200px;
  width: 100%;
  border-bottom: 1px solid #777;
  padding: 0 10px;
  gap: 7px;
  justify-content: center;
`;

//Creates a ImgContainer div and styles it with css
const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80%;
  gap: 5px;
`;

//Creates a Icons img and styles it with css
const Icons = styled.img`
  width: 35px;
  aspect-ratio: 1/1;
  cursor: pointer;
`;

//Creates a DetailsContainer div and styles it with css
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  gap: 5px;
`;
const IconSpan = styled.img`
  width: 18px;
  aspect-ratio: 1/1;
`;
const Contai = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const OrangeBoldFont = styled.span`
  font-weight: 700;
  color: orange;
  cursor: pointer;
  font-family: "Segoe UI";
  text-transform: uppercase;
`;

const blueBoldFont = {
  fontWeight: "600",
  color: "blue",
  cursor: "pointer",
  fontFamily: "Segoe UI",
  textTransform:"uppercase",
};
const SpanDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  > :last-child {
    width: 120px;
    text-align: end;
  }
`;

const karbariIcons = {
  آموزشی: BlueHouseIcon,
  تجاری: RedHouseIcon,
  مسکونی: YellowHouseIcon,
};
function calculatePolygonCentroid(vertices) {
  const numVertices = vertices.length;
  let sumX = 0;
  let sumY = 0;

  for (let i = 0; i < numVertices; i++) {
    sumX += parseFloat(vertices[i].x);
    sumY += parseFloat(vertices[i].y);
  }

  const centroidX = sumX / numVertices;
  const centroidY = sumY / numVertices;

  return { x: centroidX, y: centroidY };
}

const FeatureContainer = ({ feature }) => {
  const address = feature?.address.split(", ").reverse().join(", ");
  const Navigate = useNavigate();
  const map = useContext(MapContext);
  const center = calculatePolygonCentroid(feature?.coordinates);
  return (
    <FeatureItem key={feature.id}>
      <Contai>
        <ImgContainer>
          <Icons
            src={BuyingHouseIcon}
            onClick={() =>
              Navigate(`/metaverse/feature/${feature?.id}`, {
                state: { activePageNumber: 1 },
              })
            }
          />
          <Icons src={PropertyValueBalanceIcon}  onClick={() =>
              Navigate(`/metaverse/feature/${feature?.id}`, {
                state: { activePageNumber: 1 ,activeTab:1},
              })
            } />
          <Icons
            src={PropertyLocationIcon}
            onClick={() =>
              flyToPosition({
                latitude: center.y,
                longitude: center.x,
                icon:LocationPin,
                mapRe: map,
                zoom: 17,
              })
            }
          />
        </ImgContainer>
        <DetailsContainer>
          <SpanDetails>
            <OrangeBoldFont
              onClick={() => Navigate(`/metaverse/feature/${feature?.id}`)}
            >
              {feature?.feature_properties_id}
            </OrangeBoldFont>
            <span>:</span>

            <span>شناسه VOD</span>
          </SpanDetails>
          <SpanDetails>
            <span>
              {feature?.karbari}
              <IconSpan src={karbariIcons[feature?.karbari]} />
            </span>
            <span>:</span>

            <span>کاربری</span>
          </SpanDetails>
          <SpanDetails>
            <span
              onClick={() =>
                window.open(
                  `https://rgb.irpsc.com/citizen/${feature?.owner_code}`,
                  "_blank"
                )
              }
              style={blueBoldFont}
            >
              {feature?.owner_code}
            </span>
            <span>:</span>
            <span>شناسه شهروند</span>
          </SpanDetails>
          <SpanDetails>
            <span>{feature?.price_irr}</span>
            <span>:</span>
            <span>
              <IconSpan src={IrrIcon} /> قیمت گذاری
            </span>
          </SpanDetails>
          <SpanDetails>
            <span>{feature?.price_psc}</span>
            <span>:</span>
            <span>
              <IconSpan src={PscIcon} /> قیمت گذاری
            </span>
          </SpanDetails>
        </DetailsContainer>
      </Contai>

      <div style={{ whiteSpace: "nowrap", display: "flex", width: "100%" }}>
        <span
          style={{
            width: "72%",
            display: "flex",
            overflowY: "auto",
            flexDirection: "row-reverse",
          }}
        >
          {address}
        </span>
        :<span style={{ width: "130px", textAlign: "end" }}> VOD آدرس</span>
      </div>
    </FeatureItem>
  );
};

export default FeatureContainer;
