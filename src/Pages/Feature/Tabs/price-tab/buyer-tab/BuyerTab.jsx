import styled from "styled-components";
import { useState } from "react";
import SidebarOptions from "../../../../../Components/SidebarOptions";
import BuyerContent from "./BuyerContent";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BuyerTab = () => {
  const [option, setOption] = useState(true);
  return (
    <Wrapper>
      <SidebarOptions option={option} setOption={setOption} />
      <BuyerContent option={option} />
    </Wrapper>
  );
};

export default BuyerTab;
