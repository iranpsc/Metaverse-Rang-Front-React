import styled from "styled-components";
import SidebarOptions from "../../../../../components/SidebarOptions";
import { Routes, Route, Navigate } from "react-router";
import SellerPrice from "../buyer-tab/SellerPrice";
import { FeatureContext } from "../../../Context/FeatureProvider";
import { useContext } from "react";
import SuggestPrice from "../buyer-tab/SuggestPrice";

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
`;

const BuyerTab = () => {
  const [feature] = useContext(FeatureContext);

  const sugPrice =
    Number(feature.properties.price_irr ?? 0) +
    Number(feature.properties.price_psc ?? 0);

  const hasPrice = sugPrice > 0;
  return (
    <Wrapper>
      <SidebarOptions hasPrice={hasPrice} />

      <Routes>
        <Route
          index
          element={<Navigate to={hasPrice ? "price" : "suggest"} replace />}
        />

        {hasPrice && <Route path="price" element={<SellerPrice />} />}

        <Route path="suggest" element={<SuggestPrice />} />
      </Routes>
    </Wrapper>
  );
};

export default BuyerTab;
