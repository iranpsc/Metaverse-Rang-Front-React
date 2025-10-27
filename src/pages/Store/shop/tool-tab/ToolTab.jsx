import SideBar from "./SideBar";
import ToolsContent from "./ToolsContent";
import styled from "styled-components";
import { tools } from "../data";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  overflow: hidden;
`;

const ToolTab = () => {
  const [option, setOption] = useState(1);

  return (
    <Wrapper>
      <SideBar tools={tools} option={option} setOption={setOption} />
      <ToolsContent tools={tools} option={option} />
    </Wrapper>
  );
};

export default ToolTab;
