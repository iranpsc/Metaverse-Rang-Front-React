import house from "../../../../../Assets/images/house.png";
import styled from "styled-components";
import Button from "../../../../../Components/Button";

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
    props.theme.colors.newColors.otherColors.inputBg};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 18px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 600;
  }
  h4 {
    color: ${(props) => props.theme.colors.primary};
    font-size: 14px;
    font-weight: 500;
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

const PropertyCard = ({ onClick, label }) => {
  return (
    <Container>
      <Right>
        <Image>
          <img src={house} alt="property" width={50} height={50} />
        </Image>
        <Info>
          <h3>شناسه زمین</h3>
          <h4>QA31-11213</h4>
        </Info>
      </Right>
      <Center>
        <h3>متراژ</h3>
        <h4>۱۲۰</h4>
      </Center>
      <Button label={label} onclick={onClick} />
    </Container>
  );
};

export default PropertyCard;
