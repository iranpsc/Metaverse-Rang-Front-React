import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #1a1a18;
  border-radius: 10px;
  padding: 20px;
  gap: 15px;
  div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    span {
      color: #dedee9;
      white-space: nowrap;
      font-size: 11px;
    }
    h3 {
      color: #ffffff;
      font-size: 12px;
      font-weight: 600;
    }
  }
  @media (min-width: 1024px) {
    span {
      font-size: 13px;
    }
    h3 {
      font-size: 18px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    div{
      align-items: flex-start;
    }
  }
`;
const PropertyCard = ({ image, label, value }) => {
  return (
    <Container>
      <img width={40} height={40} loading="lazy" alt={label} src={image}/>
      <div>
        <span>{label}</span>
        <h3>{value}</h3>
      </div>
    </Container>
  );
};

export default PropertyCard;
