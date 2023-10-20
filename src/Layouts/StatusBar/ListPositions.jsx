import React from "react";
import styled from "styled-components";
import one from "../../Assets/images/Frame 3801.png";
import Tow from "../../Assets/images/Frame 3802.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 5px;
`;
const ContainerList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  flex-direction: column;
  max-height: 90%;
  gap: 5px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.scrollBg};
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.scrollColor};
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background-color: #999;
  }
`;
const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #000; // این رنگ را به یک رنگ با کنتراست بیشتر مثل مشکی تغییر دهید
`;

const BtnAllList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
  background-color: #efefef;
  min-height: 36px;
  color: #868b90;
`;
const ImgPosition = styled.img`
  width: 114px;
  height: 114px;
  @media (min-width: 1024px) {
    width: 126px;
    height: 126px;
  }
`;
const ListPositions = () => {
  return (
    <Container>
      <ContainerList>
        <ImgPosition src={one} />
        <Line />
        <ImgPosition src={Tow} />
        <Line />
        <ImgPosition src={one} />
        <Line />
        <ImgPosition src={Tow} />
        <Line />
      </ContainerList>
      <BtnAllList>لیست کامل</BtnAllList>
    </Container>
  );
};

export default ListPositions;
