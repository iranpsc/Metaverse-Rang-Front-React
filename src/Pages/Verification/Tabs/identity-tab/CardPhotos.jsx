import bank from "../../../../Assets/images/bank-card.png";
import nation from "../../../../Assets/images/nation.png";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 220px;
  height: 140px;
  overflow: hidden;
  border-radius: 10px;
  margin-top: 15px;
  @media (min-width: 1500px) {
    width: 283px;
    height: 200px;
  }
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`;
const CardPhotos = ({ nationalCardImg }) => {
  return (
    <Container>
      <div>
        <Title>تصویر کارت ملی</Title>
        <ImageWrapper>
          <img src={nationalCardImg} alt="nation" />
        </ImageWrapper>
      </div>
    </Container>
  );
};

export default CardPhotos;
