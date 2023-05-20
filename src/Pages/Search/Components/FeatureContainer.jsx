import React from "react";
import styled from "styled-components";
import BuyingHouseIcon from "../../../Assets/images/buying-house-128.png";
import PropertyValueBalanceIcon from "../../../Assets/images/property-value-balance-128.png";
import PropertyLocationIcon from "../../../Assets/images/property-location-128.png";
import RedHouseIcon from "../../../Assets/images/redHouse.png";
import YellowHouseIcon from "../../../Assets/images/yellowHouse.png";
import BlueHouseIcon from "../../../Assets/images/blueHouse.png";
import IrrIcon from "../../../Assets/images/coin-irr.png";
import PscIcon from "../../../Assets/images/coin-psc.png";
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
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.678));
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
  width: 20px;
  aspect-ratio: 1/1;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.678));
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
`;

const blueBoldFont = {
  fontWeight: "600",
  color: "blue",
  cursor: "pointer",
  fontFamily: "Segoe UI",
};
const SpanDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 5px;
  width: 230px;
`;

const FeatureContainer = ({ feature }) => {
  const address = feature?.address.split(", ").reverse().join(", ");

  return (
    <FeatureItem>
      <Contai>
        <ImgContainer>
          <Icons src={BuyingHouseIcon} />
          <Icons src={PropertyValueBalanceIcon} />
          <Icons src={PropertyLocationIcon} />
        </ImgContainer>
        <DetailsContainer>
          <SpanDetails style={{marginRight:"2px"}}>
            <OrangeBoldFont>{feature?.feature_properties_id}</OrangeBoldFont>
            <span>:</span>
            &nbsp; &nbsp;
            <span>شناسه VOD</span>
          </SpanDetails>
          <SpanDetails style={{marginRight:"2px"}}>
            <span> {feature?.karbari}</span>
            <span>:</span>
            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <span>کاربری</span>
          </SpanDetails>
          <SpanDetails style={{marginRight:"5px"}}>
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
              <IconSpan src={IrrIcon} /> قیمت گزاری
            </span>
          </SpanDetails>
          <SpanDetails>
            <span>{feature?.price_psc}</span>
            <span>:</span>
            <span>
              <IconSpan src={PscIcon} /> قیمت گزاری
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
        <span style={{ width: "10%", display: "flex" }}>: &nbsp; &nbsp; VOD آدرس</span>
      </div>
    </FeatureItem>
  );
};

export default FeatureContainer;
