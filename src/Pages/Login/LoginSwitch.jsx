import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Member } from "../../Assets/svg/AddMember.svg";
import { ReactComponent as Profile } from "../../Assets/svg/profile.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";

function LoginSwitch() {
  const navigate = useNavigate();
  const Container = styled.div`
    width: 100%;
    display: flex;
    height: 66px;
    padding: 8px 0px;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    margin-top: 5px;
  `;
  const BtnRegistry = styled.button`
    display: flex;
    width: 45%;
    height: 100%;
    padding: 16px 36.5px 13px 36px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
    border: none;

    background: ${(props) => props.theme.btnScenery};
    color: ${(props) => props.theme.btnSceneryTextColor};
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
    width: 52%;
    height: 50px;
    padding: 14px 45.929px 13.707px 45px;
    justify-content: center;
    gap: 3px;
    align-items: center;
    flex-shrink: 0;
    border: none;
    border-radius: 10px;
    background: ${(props) => props.theme.btnPrimary};
    color: ${(props) => props.theme.btnPrimaryTextColor};
    text-align: center;
    font-family: AzarMehr-DS2;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px; /* 142.857% */
  `;
  const Icon = styled(Member)`
    width: 13.335px;
    height: 19.81px;
    stroke: ${(props) => props.theme.btnSceneryTextColor};
  `;
  const Icon2 = styled(Profile)`
    width: 13.335px;
    height: 19.81px;
    stroke: ${(props) => props.theme.btnPrimaryTextColor};
  `;

  return (
    <>
      <Container>
        <BtnRegistry onClick={() => navigate("/metaverse/signup")}>
          <Icon />
          {getFieldTranslationByNames("register", "register")}
        </BtnRegistry>
        <BtnLogin onClick={() => navigate("/metaverse/login")}>
          <Icon2 />
          {getFieldTranslationByNames("login", "login")}
        </BtnLogin>
      </Container>
    </>
  );
}

export default LoginSwitch;
