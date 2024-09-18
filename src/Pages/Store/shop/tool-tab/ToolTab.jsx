import SideBar from "./SideBar";
import ToolsContent from "./ToolsContent";
import styled from "styled-components";
import { tools } from "../data";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  gap: 20px;
  height: 100%;
  grid-template-columns: 200px 1fr;
  @media (max-width:850px) {
    grid-template-columns: 150px 1fr;
  }
`;
const ToolTab = () => {
  const [option, setOption] = useState(1);
  
  return (
    <Wrapper>
      <SideBar tools={tools} option={option} setOption={setOption}/>
      <ToolsContent tools={tools} option={option}/>
    </Wrapper>
  );
};

export default ToolTab;
