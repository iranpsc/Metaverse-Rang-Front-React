import React from "react";
import styled from "styled-components";
import { ReactComponent as LoginIcon } from "../../../Assets/svg/login.svg";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../Services/Hooks/useAuth";
import { useState } from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";
const Btn = styled.div`
  width: 100%;
  height: 49px;
  background-color: ${(props) => props.theme.btnPrimary};
  color: ${(props) => props.theme.btnPrimaryTextColor};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
`;
const Text = styled.p`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const Icon = styled(LoginIcon)`
  stroke: ${(props) => props.theme.btnPrimaryTextColor};
  width: 24px;
  height: 24px;
`;
const BtnAction = () => {
  const { isOpen } = useMenuContext();
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const [user, setUser] = useState();

  useLayoutEffect(() => {
    setUser(getUser());
  }, []);
  return (
    <Btn isOpen={isOpen}>
      <Text isOpen={isOpen}>{user?.code}</Text>
      <Icon src={LoginIcon} />
    </Btn>
  );
};

export default BtnAction;
