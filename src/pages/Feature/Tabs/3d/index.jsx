import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import Specification from "../../Components/Specification";
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 3%;
  overflow-y: auto;
`;
const DetailFeature = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6%;
`;
const ContainerSpecification = styled.div`
  width: 95%;
  height: 150px;
  display: flex;
  border-radius: 5px;
  flex-direction: column;
  align-items: end;
`;

const TitleSpecification = styled.div`
  width: 120px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: end;
  border: 1px solid #c2c2c2;
  padding-right: 5px;
  border-radius: 5px;
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: 40%;
`;

const ValueSpecification = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #e9e9e9;
  text-align: right !important;
  display: flex;
  padding: 12px;
  align-items: center;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
export default function UnitiTab() {
  return (
    <Container>
      <DetailFeature>
        <Specification title={"هزینه ورودی"} value={20} />
        <Specification title={"هزینه ورودی"} value={20} />
        <Specification title={"هزینه ورودی"} value={20} />
      </DetailFeature>
      <ContainerSpecification>
        <TitleSpecification>5566</TitleSpecification>
        <ValueSpecification>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          doloribus non, ex ipsam reprehenderit modi deleniti, saepe illum
          similique quisquam quos delectus voluptatem eius consequuntur optio
          cumque! Repudiandae, consequuntur ipsam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Excepturi mollitia enim natus ipsam
          accusantium iusto consequatur illum rem magni, sunt quo omnis nostrum
          vel inventore similique asperiores aperiam cum at.
        </ValueSpecification>
      </ContainerSpecification>
    </Container>
  );
}
