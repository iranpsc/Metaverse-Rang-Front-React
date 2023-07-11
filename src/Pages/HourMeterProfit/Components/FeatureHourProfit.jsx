import React, { useState } from "react";
import styled from "styled-components";
import RedHouseIcon from "../../../Assets/images/redHouse.png";
import YellowHouseIcon from "../../../Assets/images/yellowHouse.png";
import BlueHouseIcon from "../../../Assets/images/blueHouse.png";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../Services/Hooks/useRequest";

const FeatureContainer = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
`;
const Border = styled.div`
  width: 70%;
  height: 1px;
  background-color: black;
  margin: 0 auto;
`;
const DetaileContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
`;
const Btn = styled.button`
  width: 18%;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${(props) => props.color || "black"};
  filter: drop-shadow(0 2px 2px ${(props) => props.color || "black"});
  background-color: white;
  color: ${(props) => props.color || "black"};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FeatureDetaile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DateFeatureDetaile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const OrangeBoldFont = styled.span`
  font-weight: 700;
  color: orange;
  cursor: pointer;
  font-family: "Segoe UI";
  text-transform: uppercase;
`;
const karbariIcons = {
  a: BlueHouseIcon,
  t: RedHouseIcon,
  m: YellowHouseIcon,
};
const karbariColor = {
  a: "Blue",
  t: "red",
  m: "#d5d504",
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const FeatureHourProfit = ({ data }) => {
  const Navigate = useNavigate();
  const { Request, HTTP_METHOD } = useRequest();
  const [isSuccessful, setIsSuccessful] = useState(false);

  const handelClick = (id) => {
    Request(`hourly-profits/${id}`, HTTP_METHOD.POST)
      .then(() => {
        setIsSuccessful(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const IconSpan = styled.img`
  width: 18px;
  aspect-ratio: 1/1;
`;
  return (
    <Container>
      {!isSuccessful && (
        <>
          <FeatureContainer>
            <Btn
              color={karbariColor[data?.karbari]}
              onClick={() => handelClick(data.id)}
              disabled={data?.amount === "0.000"}
            >
              {data?.amount}
            </Btn>
            <DetaileContainer>
              <FeatureDetaile>
                <OrangeBoldFont
                  onClick={() => Navigate(`/metaverse/feature/${data?.feature_db_id}`)}
                >
                 <IconSpan src={karbariIcons[data?.karbari]} />  {data?.feature_id}
                </OrangeBoldFont>
                <span>:نوع کاربری </span>
              </FeatureDetaile>
              <DateFeatureDetaile>
                <span>{data?.dead_line}</span>
                <span>:آخرین جمع آوری</span>
              </DateFeatureDetaile>
            </DetaileContainer>
          </FeatureContainer>
          <Border />
        </>
      )}
    </Container>
  );
};
export default FeatureHourProfit;
