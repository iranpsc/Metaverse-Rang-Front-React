import CurrenciesContent from "./CurrenciesContent";
import SideBar from "./SideBar";
import { currencies } from "../data";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  grid-template-columns: 200px 1fr;
  height: 100vh;
  overflow-y: hidden;
  @media (max-width: 850px) {
    grid-template-columns: 150px 1fr;
  }
`;
const CurrencyTab = () => {
  const [option, setOption] = useState(1);

  return (
    <Wrapper>
      <SideBar currencies={currencies} option={option} setOption={setOption} />
      <CurrenciesContent currencies={currencies} option={option} />
    </Wrapper>
  );
};

export default CurrencyTab;
