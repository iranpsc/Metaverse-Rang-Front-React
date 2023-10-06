import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
`;
const Btn = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: start;
  justify-content: start;
  gap: 16.865px;
  padding: 0 10px;
  border: none;
  background-color: red;
`;
const Icon = styled.img`
  width: 18.176px;
  height: 19.429px;
  @media (min-width: 1024px) {
    width: 23.135px;
    height: 24.771px;
  }
`;
const Text = styled.p`
  color: #868b90;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
  font-size: 14px;
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const DropdownMenu = styled.div`
  flex-direction: column;
  width: 100%;
  z-index: 1;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;
const Profile = () => {
  return <Container></Container>;
};

export default Profile;
