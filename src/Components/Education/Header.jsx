import { IoIosClose } from "react-icons/io";
import { TbMinimize } from "react-icons/tb";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.iconBg};
  svg {
    transform: scale(0.7);
    cursor: pointer;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 998px) {
    display: ${(props) => (props.show ? "none" : "flex")};
  }
`;

const Text = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-weight: 600;
  font-size: ${(props) => (props.long ? "14px" : "16px")};
  @media (min-width: 998px) {
    font-size: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  svg {
    color: ${(props) => props.theme.colors.newColors.otherColors.iconText};
    width: 30px;
    height: 30px;
    z-index: 999;
    @media (min-width: 998px) {
      width: 40px;
      height: 40px;
    }
  }
`;

const CloseWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  cursor: pointer;
  background-color: rgb(59, 8, 8);
  cursor: pointer;
  @media (min-width: 998px) {
    width: 40px;
    height: 40px;
  }
  svg {
    color: red;
  }
`;

const Header = ({ show, setOpenEducation, setSize }) => {
  const handleMinimizeClick = (event) => {
    event.stopPropagation();
    setSize(true);
  };

  const handleCloseClick = (event) => {
    event.stopPropagation();
    setOpenEducation(false);
  };
  return (
    <HeaderWrapper show={show}>
      <Text>آموزش</Text>
      <Icons>
        <Div onClick={handleMinimizeClick}>
          <TbMinimize style={{ color: "#949494" }} />
        </Div>
        <CloseWrapper onClick={handleCloseClick}>
          <IoIosClose />
        </CloseWrapper>
      </Icons>
    </HeaderWrapper>
  );
};

export default Header;
