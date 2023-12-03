import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BtnHourProfitAll from "../Components/BtnHourProfitAll";
import FeatureHourProfit from "../Components/FeatureHourProfit";
import useRequest from "../../../Services/Hooks/useRequest";
import useAuth from "../../../Services/Hooks/useAuth";
import { useContext } from "react";
import { WalletContext } from "../../../Services/Reducers/WalletContext";

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
    m: true,
    t: true,
    a: true,
  });
  const { setUserWithToken } = useAuth();
  const [link, setLink] = useState("hourly-profits?page=1");
  const [walletContext, dispatchWallet] = useContext(WalletContext);
  const [additionalProfit, setAdditionalProfit] = useState({
    total_maskoni_profit: "0.00",
    total_tejari_profit: "0.00",
    total_amozeshi_profit: "0.00",
  });

  async function fetchHourlyProfits() {
    const response = await Request(link, HTTP_METHOD.GET);
    const newData = response?.data?.data || [];
    if (newData.length > 0) {
      setData((prevData) => [...prevData, ...newData]);
    }
    const nextLink = response?.data?.links?.next;
    if (nextLink) {
      setLink(nextLink.replace("https://api.rgb.irpsc.com/api/", ""));
    } else {
      setLink(null);
    }

    if (response?.data?.additional) {
      setAdditionalProfit(response.data.additional);
    }
  }

  useEffect(() => {
    fetchHourlyProfits();
    return () => {
      setUserWithToken();
    };
  }, []);

  const handleScroll = (event) => {
    const element = event.target;
    if (
      element.scrollHeight - element.scrollTop === element.clientHeight &&
      link
    ) {
      fetchHourlyProfits();
    }
  };

  const handleFilterOptionClick = (option) => {
    Request("hourly-profits", HTTP_METHOD.POST, { karbari: option })
      .then(() => {
        setData(data.filter((item) => item.karbari !== option));
        setFilterOptions((prev) => ({
          ...prev,
          [option]: false,
        }));

        if (option === "t") {
          dispatchWallet({
            type: "red",
            payload: additionalProfit.total_tejari_profit,
          });
          setAdditionalProfit((prev) => ({
            ...prev,
            total_tejari_profit: "0.00",
          }));
        } else if (option === "a") {
          dispatchWallet({
            type: "blue",
            payload: additionalProfit.total_amozeshi_profit,
          });
          setAdditionalProfit((prev) => ({
            ...prev,
            total_amozeshi_profit: "0.00",
          }));
        } else if (option === "m") {
          dispatchWallet({
            type: "#d5d504",
            payload: additionalProfit.total_maskoni_profit,
          });
          setAdditionalProfit((prev) => ({
            ...prev,
            total_maskoni_profit: "0.00",
          }));
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <Container onScroll={handleScroll}>
      <BtnContainer>
        <BtnHourProfitAll
          color={"red"}
          value={additionalProfit.total_tejari_profit}
          onClick={() => handleFilterOptionClick("t")}
        />
        <BtnHourProfitAll
          color={"blue"}
          value={additionalProfit.total_amozeshi_profit}
          onClick={() => handleFilterOptionClick("a")}
        />
        <BtnHourProfitAll
          color={"#d5d504"}
          value={additionalProfit.total_maskoni_profit}
          onClick={() => handleFilterOptionClick("m")}
        />
      </BtnContainer>

      {data.length > 0 &&
        data.map((featureData) => {
          if (filterOptions[featureData.karbari]) {
            return (
              <FeatureHourProfit data={featureData} key={featureData?.id} />
            );
          }
          return null;
        })}
    </Container>
  );
};

export default HourProfit;
