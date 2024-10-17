import React, { useState } from "react";
import GeneralDefault from "./Tabs/GeneralDefault";
import SpecialOrder from "./Tabs/SpecialOrder";
import SidebarOptions from "./Tabs/Components/SidebarOptions";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
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
