import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #000;
  @media (min-width: 1024px) {
    margin-top: 35px;
    height: 46px;
  }
`;
const Profile = () => {
  return <Container />;
};

export default Profile;
