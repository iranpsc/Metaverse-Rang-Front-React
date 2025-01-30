import PropertyCard from "./PropertyCard";
import property1 from "../../../../Assets/gif/satisfaction.gif";
import property2 from "../../../../Assets/images/building.png";
import property3 from "../../../../Assets/images/house.png";
import property4 from "../../../../Assets/images/courthouse.png";
import styled from "styled-components";
import useRequest from "../../../../Services/Hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import { WalletContext } from "../../../../Services/Reducers/WalletContext";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;
const RealEstate = () => {
  const [assets, setAssets] = useState({});
  const { Request, HTTP_METHOD } = useRequest();
  const [wallet] = useContext(WalletContext);
  const [user] = useContext(UserContext);
  useEffect(() => {
    Request(
      `users/${user?.id}/features/count`,
      HTTP_METHOD.GET,
    ).then((response) => {
      setAssets(response.data.data);
    });
  }, []);
  const properties = [
    {
      id: 1,
      image: property1,
      label: getFieldTranslationByNames(264),
      value: wallet?.effect,
    },
    {
      id: 2,
      image: property2,
      label: getFieldTranslationByNames(8650),
      value: assets?.tejari_features_count,
    },
    {
      id: 3,
      image: property3,
      label: getFieldTranslationByNames(8657),
      value: assets?.maskoni_features_count,
    },
    {
      id: 4,
      image: property4,
      label: getFieldTranslationByNames(8664),
      value: assets?.amoozeshi_features_count,
    },
  ];
  return (
    <Container>
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </Container>
  );
};

export default RealEstate;
