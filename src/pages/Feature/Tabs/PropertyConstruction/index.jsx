import React, { useState } from "react";
import GeneralDefault from "./Tabs/GeneralDefault";
import SpecialOrder from "./Tabs/SpecialOrder";
import SidebarOptions from "./Tabs/components/SidebarOptions";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  background-color: red;
  height: calc(100vh - 150px);
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: calc(100vh - 300px);
    overflow-y: auto;
  }
`;
const PropertyConstruction = () => {
  const [option, setOption] = useState(true);
  return (
    <Wrapper>
      <SidebarOptions option={option} setOption={setOption} />
      {option ? <GeneralDefault /> : <SpecialOrder />}
    </Wrapper>
  );
};

export default PropertyConstruction;
