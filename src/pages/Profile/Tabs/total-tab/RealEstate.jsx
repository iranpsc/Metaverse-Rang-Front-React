import PropertyCard from "./PropertyCard";
import property1 from "../../../../assets/gif/satisfaction.gif";
import property2 from "../../../../assets/images/building.png";
import property3 from "../../../../assets/images/house.png";
import property4 from "../../../../assets/images/courthouse.png";
import styled from "styled-components";
import useRequest from "../../../../Services/Hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Services/Reducers/UserContext";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useParams } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;

const RealEstate = () => {
  const [assets, setAssets] = useState({});
  const { Request } = useRequest();
  const [user] = useContext(UserContext);
  const { id } = useParams();

  useEffect(() => {
    const requestId = id || user?.id;
    Request(`users/${requestId}/features/count`).then((response) => {
      setAssets(response.data.data);
    });
  }, [id, user?.id]);

  const properties = [
    {
      id: 1,
      image: property1,
      label: getFieldTranslationByNames("52"),
      value: assets?.satisfaction,
    },
    {
      id: 2,
      image: property2,
      label: getFieldTranslationByNames("475"),
      value: assets?.tejari_features_count,
    },
    {
      id: 3,
      image: property3,
      label: getFieldTranslationByNames("477"),
      value: assets?.maskoni_features_count,
    },
    {
      id: 4,
      image: property4,
      label: getFieldTranslationByNames("476"),
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
