import React from "react";
import styled from "styled-components";
import { ReactComponent as LoginIcon } from "../../../Assets/svg/login.svg";
import { useMenuContext } from "../../../Services/Reducers/MenuContext";
import { getFieldTranslationByNames } from "../../../Services/Utility";
import useRequest from "../../../Services/Hooks/useRequest";

const Btn = styled.div`
  width: 100%;
  min-height: 39px;
  @media (min-width: 1024px) {
    min-height: 49px;
  }
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.newColors.primaryText};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  border-radius: 10px;
  padding: 0 10px;
  cursor: pointer;
  margin-bottom: 16px;
`;
const Text = styled.p`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;
const Icon = styled(LoginIcon)`
  stroke: ${(props) => props.theme.colors.newColors.primaryText};
  width: 24px;
  height: 24px;
`;

const BtnLogin = () => {
  const { isOpen } = useMenuContext();
  const { Request, HTTP_METHOD } = useRequest();

  const handleClick = () => {
    Request(
      `auth/redirect?redirect_to=${window.location.origin}/metaverse`,
      HTTP_METHOD.GET,
      {},
      {},
      "development"
    )
      .then((response) => {
        if (response && response.data.url) {
          window.location.href = response.data.url;
        } else {
          console.error("No link found in response");
        }
      })
      .catch((error) => {
        console.error("Request failed", error);
      });
  };

  return (
    <Btn isOpen={isOpen} onClick={handleClick}>
      <Icon src={LoginIcon} />
      <Text isOpen={isOpen}>
        {getFieldTranslationByNames(15)}
      </Text>
    </Btn>
  );
};

export default BtnLogin;
