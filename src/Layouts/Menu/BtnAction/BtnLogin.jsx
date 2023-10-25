import React from "react";
import styled from "styled-components";
import { ReactComponent as LoginIcon } from "../../../Assets/svg/login.svg";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import { useNavigate } from "react-router-dom";
import { getFieldTranslationByNames } from "../../../Services/Utility";
const Btn = styled.div`
  width: 100%;
  min-height: 39px;
  @media (min-width: 1024px) {
    min-height: 49px;
  }
  background-color: ${(props) => props.theme.btnPrimary};
  color: ${(props) => props.theme.btnPrimaryTextColor};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Text = styled.p`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const Icon = styled(LoginIcon)`
  stroke: ${(props) => props.theme.btnPrimaryTextColor};
  width: 24px;
  height: 24px;
`;
const BtnLogin = () => {
  const { isOpen } = useMenuContext();
  const navigate = useNavigate();
  return (
    <Btn isOpen={isOpen} onClick={() => navigate("/metaverse/login")}>
      <Text isOpen={isOpen}>
        {getFieldTranslationByNames("login", "login")}
      </Text>
      <Icon src={LoginIcon} />
    </Btn>
  );
};

export default BtnLogin;
