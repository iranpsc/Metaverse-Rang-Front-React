import React, { useState } from "react";
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
  align-items: start;
  justify-content: start;
  gap: 16.865px;
  padding: 0 10px;
  border: none;
  background: ${(props) => (props.isOpen ? "#000000" : "transparent")};
`;

const SubMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  padding-left: 20px;
`;

const Profile = () => {
  const [isOpen, SetIsOpen] = useState(false);

  return (
    <Container>
      <Btn isOpen={isOpen} onClick={() => SetIsOpen(!isOpen)}>
        منو اصلی
      </Btn>
      <SubMenu isOpen={isOpen}>
        <Btn>زیر منو ۱</Btn>
        <Btn>زیر منو ۲</Btn>
        <Btn>زیر منو ۳</Btn>
      </SubMenu>
    </Container>
  );
};

export default Profile;
