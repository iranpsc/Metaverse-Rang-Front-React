import { HiOutlineTrash } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import noPic from "../../../../assets/images/nopic.jpg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  scroll-behavior: smooth;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 20px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Actions = styled.div`
  position: absolute;
  left: 5px;
  top: 5px;
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffc700;
  &:nth-of-type(2) {
    margin-top: 5px;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
    color: black;
  }
`;
const MainSlider = ({ activeImage, deleteHandler }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img
          loading="lazy"
          src={activeImage?.image || noPic}
          alt={activeImage?.image || noPic}
        />
        {activeImage?.image && (
          <Actions>
            <IconWrapper onClick={() => deleteHandler(activeImage.id)}>
              <HiOutlineTrash />
            </IconWrapper>
            <IconWrapper>
              <IoWarningOutline />
            </IconWrapper>
          </Actions>
        )}
      </ImageWrapper>
    </Wrapper>
  );
};

export default MainSlider;
