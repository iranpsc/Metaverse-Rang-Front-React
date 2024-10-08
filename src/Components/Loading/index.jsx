import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";

const Text = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
`;

const Container = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(152, 152, 152, 0.438);
  background-color: #7777779e;
  z-index: 99999;
  border-radius: 10px;
  flex-direction: column;
`;

export default function Loading() {
  return (
    <Container>
      <ScaleLoader
        color="orange"
        loading={true}
        height="100"
        width="10"
        margin="5"
      />

      <Text>... چند لحظه صبر کنید</Text>
    </Container>
  );
}
