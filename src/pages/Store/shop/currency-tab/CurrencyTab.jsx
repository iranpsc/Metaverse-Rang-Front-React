import SideBar from "./SideBar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
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
  return (
    <Wrapper>
      <SideBar/>
      <Outlet  />
    </Wrapper>
  );
};

export default CurrencyTab;
