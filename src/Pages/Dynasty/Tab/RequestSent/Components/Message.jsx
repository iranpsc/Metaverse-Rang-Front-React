import React from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackIcon from "../../../../../Assets/images/back.png";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerMessage = styled.div`
  width: 99%;
  height: 99%;
  padding: 10px;
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
  text-align: right;
  padding: 2rem;
  line-height: 2;
  border: 1px solid #777;
    border-radius: 7px;
`;

const IconBack = styled.img`
  width: 50px;
  rotate: 360deg;
  transform: rotateY(185deg);
  cursor: pointer;
  position: absolute;
  top: 12%;
  left: 2.5%;
`;

export default function Message({ items, handleBack }) {
  const { Request } = useRequest();
  const [data, setData] = useState();
  useEffect(() => {
    Request(`dynasty/requests/sent/${items.id}`).then((response) => {
      setData(response.data.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <ContainerMessage>
        <IconBack src={BackIcon} onClick={handleBack} />
        <p>{data ? data.message : ""}</p>
      </ContainerMessage>
    </Container>
  );
}
