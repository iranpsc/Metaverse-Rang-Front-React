import { Rnd } from "react-rnd";
import loader from "../../../../Assets/gif/loader.svg";
import styled from "styled-components";
import Header from "../../../../Components/Education/Header";

const StyledRnd = styled(Rnd)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border-radius: 10px;
  flex-direction: column;
  padding: 15px 20px;
  z-index: 999;
`;

const Loader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 100%;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  line-height: 1.5rem;
  margin-top: 10px;
  max-width: 340px;
  text-align: center;
`;

const LoadingModal = ({ isMobile }) => {
  const defaultSize = isMobile
    ? { width: 640, height: 350 }
    : { width: 1380, height: 750 };

  return (
    <StyledRnd
      default={{
        x: 0,
        y: 0,
        ...defaultSize,
      }}
      bounds="window"
      enableResizing={false}
    >
      <Header loading title="ورود به ملک" />
      <Loader>
        <img src={loader} width={130} height={130} alt="loader" />
        <Text>متناسب با سرعت اینترنت شما این مجموعه بارگیری خواهد شد</Text>
      </Loader>
    </StyledRnd>
  );
};

export default LoadingModal;
