import PropertyCard from "./PropertyCard";
import property1 from "../../../../Assets/gif/satisfaction.gif";
import property2 from "../../../../Assets/images/building.png";
import property3 from "../../../../Assets/images/house.png";
import property4 from "../../../../Assets/images/courthouse.png";
import styled from "styled-components";

const properties = [
  { id: 1, image: property1, label: "رضایت", value: "۰.۲ رضایت" },
  { id: 2, image: property2, label: "املاک تجاری", value: "۳ ملک" },
  { id: 3, image: property3, label: "املاک مسکونی", value: "۳ ملک" },
  { id: 4, image: property4, label: "املاک آموزشی", value: "۳ ملک" },
];
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
  margin-top: 20px;
`;
const RealEstate = () => {
  return (
    <Container>
      {properties.map((property) => (
        <PropertyCard key={property.id} {...property} />
      ))}
    </Container>
  );
};

export default RealEstate;
