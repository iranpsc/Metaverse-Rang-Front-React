import styled from "styled-components";
import { useState } from "react";
("../../../../../Components/SidebarOptions");
import BuyerContent from "./BuyerContent";
import SidebarOptions from "./SidebarOptions";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BuyerTabSystem = () => {
  const [option, setOption] = useState(true);
  return (
    <Wrapper>
      <SidebarOptions option={option} setOption={setOption} />
      <BuyerContent option={option} />
    </Wrapper>
  );
};

export default BuyerTabSystem;
