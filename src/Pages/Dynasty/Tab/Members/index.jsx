import React from "react";
import styled from "styled-components";
import DynastySolidImg from "../../../../Assets/images/Dynasty-solid.png";
import Member from "./Components/Member";
const DynastySolid = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${DynastySolidImg});
  background-repeat: no-repeat;
  background-size: 100% 117%;
`;
export default function Members() {
  return (
    <DynastySolid>
      <Member Left={"33.5%"} Top={"11.5%"}></Member>
      <Member Left={"5.4%"} Top={"42.3%"} Name={"پدر"}></Member>
      <Member Left={"21%"} Top={"42.3%"} Name={"مادر"}></Member>
      <Member Left={"40.2%"} Top={"42.3%"} Name={"خواهر"}></Member>
      <Member Left={"54.5%"} Top={"42.3%"} Name={"خواهر"}></Member>
      <Member Left={"69.7%"} Top={"42.3%"} Name={"بردار"}></Member>
      <Member Left={"86%"} Top={"42.3%"} Name={"بردار"}></Member>
      <Member Left={"13.5%"} Top={"80.5%"} Name={"همسر"} ></Member>
      <Member Left={"33.5%"} Top={"42.3%"} Name={"فرزند"}></Member>
      <Member Left={"33.5%"} Top={"42.3%"} Name={"فرزند"}></Member>
      <Member Left={"33.5%"} Top={"42.3%"} Name={"فرزند"}></Member>
      <Member Left={"33.5%"} Top={"42.3%"} Name={"فرزند"}></Member>
    </DynastySolid>
  );
}
