import styled from "styled-components";
import SidebarOptions from "../../../../../components/SidebarOptions";
import { Routes, Route, Navigate } from "react-router-dom";
import SellerPrice from "../buyer-tab/SellerPrice";
import SuggestPrice from "../buyer-tab/SuggestPrice";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
`;

const BuyerTab = () => {
  return (
    <Wrapper>
      <SidebarOptions />

      <Routes>
        <Route index element={<Navigate to="price" replace />} />
        <Route path="price" element={<SellerPrice />} />
        <Route path="suggest" element={<SuggestPrice />} />
      </Routes>
    </Wrapper>
  );
};

export default BuyerTab;
