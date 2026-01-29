import styled from "styled-components";
import { useState } from "react";
import Lowest from "./Lowest";
import PriceDefine from "./PriceDefine";
import SidebarOptions from "../../../../../components/SidebarOptions";
import {  Routes, Route, Navigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: hidden;
`;

const SellerTab = ({ seller }) => {
  return (
      <Wrapper>
        <SidebarOptions seller={seller}/>
         <Routes>
                <Route index element={<Navigate to="lowest" replace />} />
                <Route path="PriceDefine" element={<PriceDefine />} />
                <Route path="lowest" element={<Lowest />} />
              </Routes>
      </Wrapper>
  );
};

export default SellerTab;
