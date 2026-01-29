import styled from "styled-components";
import SidebarOptions from "./SidebarOptions";
import  SellerPrice from "./SellerPrice";
import { Navigate,Route,Routes } from "react-router-dom";
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const BuyerTabSystem = () => {
  return (
    <Wrapper>
      <SidebarOptions  />
         <Routes>
                <Route index element={<Navigate to="price" replace />} />
                <Route path="price" element={<SellerPrice />} />
              </Routes>
    </Wrapper>
  );
};

export default BuyerTabSystem;
