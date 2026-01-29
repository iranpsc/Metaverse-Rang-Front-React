import SideBar from "./SideBar";
import ToolsContent from "./ToolsContent";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  grid-template-columns: 200px 1fr;
  gap: 20px;
  height: 100vh;
  overflow: hidden;
`;

const ToolTab = () => {
 
 
  return (
    <Wrapper>
      <SideBar/>
       <Outlet   />
    </Wrapper>
  );
};

export default ToolTab;
