import PropertyCard from "./PropertyCard";
import property1 from "../../../../Assets/gif/satisfaction.gif";
import property2 from "../../../../Assets/images/building.png";
import property3 from "../../../../Assets/images/house.png";
import property4 from "../../../../Assets/images/courthouse.png";
import styled from "styled-components";
import useRequest from "../../../../Services/Hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../Services/Reducers/UserContext";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;
const RealEstate = () => {
  const [assets, setAssets] = useState({});
  const { Request, HTTP_METHOD } = useRequest();
  const [user] = useContext(UserContext);
  useEffect(() => {
    Request(
      `users/${user?.id}/features/count`,
      HTTP_METHOD.GET,
      {},
      {},
      "development"
    ).then((response) => {
      setAssets(response.data.data);
    });
  }, []);
  const properties = [
    { id: 1, image: property1, label: "رضایت", value: "۰.۲ رضایت" },
    {
      id: 2,
      image: property2,
      label: "املاک تجاری",
      value: assets?.tejari_features_count,
    },
    {
      id: 3,
      image: property3,
      label: "املاک مسکونی",
      value: assets?.maskoni_features_count,
    },
    {
      id: 4,
      image: property4,
      label: "املاک آموزشی",
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
