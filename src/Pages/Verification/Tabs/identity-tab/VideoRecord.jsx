import { HiOutlineCamera } from "react-icons/hi";
import WebcamStreamCapture from "./WebcamStreamCapture";
import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 20px;
`;
const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.newColors.shades.title};
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  margin-top: 15px;
  gap: 20px;
  @media (min-width: 700px) {
    gap: 0;
  }
`;
const Record = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  width: 180px;
  height: 180px;
  border-radius: 100%;
  border: 3px dotted
    ${(props) => props.theme.colors.newColors.otherColors.inputBorder};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  span {
    font-size: 14px;
  }
`;
const Info = styled.div`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 14px;
  font-weight: 400;
  h4 {
    font-size: 16px;
    font-weight: 600 !important;
  }
  p {
    margin: 20px 0 40px 0;
  }
  div {
    display: flex;
    align-items: center;
    gap: 5px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    h3 {
      font-size: 14px;
    }
    h5 {
      color: ${(props) => props.theme.colors.primary};
      span {
        font-weight: 500;
        color: ${(props) => props.theme.colors.newColors.shades.title};
      }
    }
  }
`;

const VideoRecord = () => {
  return (
    <Container>
      <Title>ویدیو احراز هویت</Title>
      {/* <WebcamStreamCapture /> */}
      <Div>
        <Record>
          <HiOutlineCamera size={40} />
          <span>برای ظبط کلیک کنید</span>
        </Record>
        <Info>
          <h4>متن احراز هویت، لطفا این متن را در ویدیو بخوانید</h4>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است
          </p>
          <div>
            <h3>زمان خواندن: </h3>
            <h5>
              ۳۰ <span>ثانیه</span>
            </h5>
          </div>
        </Info>
      </Div>
    </Container>
  );
};

export default VideoRecord;
