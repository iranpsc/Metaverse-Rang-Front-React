import styled from "styled-components";
import { useState } from "react";
import SidebarOptions from "../../../../../components/SidebarOptions";
import BuyerContent from "./BuyerContent";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 20px;
  overflow: hidden;
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
