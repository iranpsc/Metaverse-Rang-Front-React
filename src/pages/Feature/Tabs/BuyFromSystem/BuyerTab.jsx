import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import SellerPrice from "./SellerPrice";
import { Navigate, Route, Routes } from "react-router-dom";
import Container from "../../../../components/Common/Container";
const Wrapper = styled(Container)`
  display: flex;
  overflow-y:hidden;
  padding: 0;
  flex-direction: row;
`;

const BuyerTabSystem = () => {
  return (
    <Wrapper>
      <SidebarOptions />

      <Routes>
        <Route index element={<Navigate to="price" replace />} />
        <Route path="price" element={<SellerPrice />} />
      </Routes>
    </Wrapper>
  );
};

export default BuyerTabSystem;
