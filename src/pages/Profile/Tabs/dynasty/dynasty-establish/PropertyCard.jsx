import house from "../../../../../assets/images/house.png";
import styled from "styled-components";
import Button from "../../../../../components/Button";
import { getTranslation } from "../../../../../services/Utility";
import { useNavigate } from "react-router-dom";

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const Center = styled.div`
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};

    font-weight: 600;
    font-size: 14px;
  }
  h4 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
  }
`;
const Image = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 5px;
  padding: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.orange + '35'};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 16px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 600;
  }
  h4 {
    color: ${(props) => props.theme.colors.newColors.otherColors.orange};
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  padding: 10px 10px 10px 20px;
  border-radius: 5px;
`;

const PropertyCard = ({ onClick, label, propertyId, area, stability,id }) => {
  
  const Navigate = useNavigate();
  return (
    <Container>
      <Right>
        <Image>
          <img src={house} alt="property" width={50} height={50} />
        </Image>
        <Info>
          <h3>{getTranslation(810)}</h3>
          <h4 onClick={() => Navigate(`/feature/${id}`)}>{propertyId}</h4>
        </Info>
      </Right>
      <Center>
        <h4>{getTranslation(373)}</h4>
        <h4>{area}</h4>
        {/* {stability && (
          <>
            <h3>{getTranslation(117)}</h3>
            <h4>{stability}</h4>
          </>
        )} */}
      </Center>
      <Button label={label} onclick={() => onClick(id)} />
    </Container>
  );
};

export default PropertyCard;
