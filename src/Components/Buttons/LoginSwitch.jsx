import React from "react";
import styled from "styled-components";
import addMemberIcon from "../../Assets/svg/addMember.svg";
import profileIcon from "../../Assets/svg/profile.svg";
const Container = styled.div`
  width: 100%;
  display: flex;
  height: 66px;
  padding: 8px 0px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;
const BtnRegistry = styled.button`
  display: flex;
  width: 53%;
  height: 100%;
  padding: 16px 52.5px 13px 53px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background: #008bf8;
  border: none;
  color: #d4ecff;
  text-align: center;
  font-family: AzarMehr-DS2;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  gap: 3px;
`;
const BtnLogin = styled.button`
  display: flex;
  width: 47%;
  height: 50px;
  padding: 14px 45.929px 13.707px 45px;
  justify-content: center;
  gap: 3px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 10px;
  background: #d4ecff;
  color: #008bf8;
  text-align: center;
  font-family: AzarMehr-DS2;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
`;
const Icon = styled.img`
  width: 13.335px;
  height: 19.81px;
`;
const LoginSwitch = () => {
  return (
    <>
      <Container>
        <BtnRegistry>
          <Icon src={addMemberIcon} />
          ثبت نام
        </BtnRegistry>
        <BtnLogin>
          <Icon src={profileIcon} />
          ورود
        </BtnLogin>
      </Container>
    </>
  );
};

export default LoginSwitch;
