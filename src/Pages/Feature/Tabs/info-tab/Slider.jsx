/* eslint-disable react/prop-types */

import { IoMdClose } from "react-icons/io";
import KeenSlider from "./KeenSlider";
import MobileSlider from "./MobileSlider";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #000000;
  opacity: 0.9;
  div {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-right: auto;
    position: relative;
    left: 10px;
    top: 15px;
    border-radius: 100%;
    background-color: #3b3b3b;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover svg {
      color: red;
    }
    svg {
      transition: all 0.1s ease-in-out;
      color: white;
      font-size: 20px;
    }
    @media (min-width: 1300px) {
      width: 45px;
      height: 45px;
      left: 20px;
      svg {
        font-size: 24px;
      }
    }
  }
`;

const Slider = ({ setOpen, images, deleteHandler, activeImage, setActiveImage }) => {
  return (
    <div>
      <Background>
        <div onClick={() => setOpen(false)}>
          <IoMdClose />
        </div>
      </Background>
      <MobileSlider activeImage={activeImage} setActiveImage={setActiveImage} images={images} deleteHandler={deleteHandler} />
      <KeenSlider images={images} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Slider;
