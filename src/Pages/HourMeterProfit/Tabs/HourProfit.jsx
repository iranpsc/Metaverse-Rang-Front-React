import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import BtnHourProfitAll from "../Components/BtnHourProfitAll";
import FeatureHourProfit from "../Components/FeatureHourProfit";
import useRequest from "../../../Services/Hooks/useRequest";

const BtnContainer = styled.div`
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 110%;
  display: flex;
  align-items: start;
  flex-direction: column;
  overflow-y: auto;
`;

const HourProfit = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    m: false,
    t: false,
    a: false,
  });

  useEffect(() => {
    Request("hourly-profits", HTTP_METHOD.GET)
      .then(({ data }) => setData(data.data))
      .catch((error) => console.error(error));
  }, []);

  const calculateTotalAmount = useMemo(() => {
    return (karbari) =>
      data
        .reduce((totalAmount, item) => {
          if (item.karbari === karbari) {
            totalAmount += parseFloat(item.amount);
          }
          return totalAmount;
        }, 0)
        .toFixed(3);
  }, [data]);

  const handleFilterOptionClick = (option) => {
    Request("hourly-profits", HTTP_METHOD.POST, { karbari: option })
      .then(({ data }) => {
        setData(data.data.filter(item => item.karbari !== option));
        setFilterOptions({ ...filterOptions, [option]: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <BtnContainer>
        <BtnHourProfitAll
          color={"red"}
          value={calculateTotalAmount("t")}
          onClick={() => {
            if(calculateTotalAmount("t") !== "0.000"){
              handleFilterOptionClick("t");
            }
          }}
        />
        <BtnHourProfitAll
          color={"blue"}
          value={calculateTotalAmount("a")}
          onClick={() => {
            if(calculateTotalAmount("a") !== "0.000"){
              handleFilterOptionClick("a");
            }
          }}
        />
        <BtnHourProfitAll
          color={"#d5d504"}
          value={calculateTotalAmount("m")}
          onClick={() => {
            if(calculateTotalAmount("m") !== "0.000"){
              handleFilterOptionClick("m");
            }
          }}
        />
      </BtnContainer>

      {data.length > 0 &&
        data.map(
          (featureData) =>
            !filterOptions[featureData.karbari] && (
              <FeatureHourProfit data={featureData} key={featureData?.id} />
            )
        )}
    </Container>
  );
};

export default HourProfit;
