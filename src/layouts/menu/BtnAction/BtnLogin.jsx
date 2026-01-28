import React from "react";
import styled from "styled-components";
import { ReactComponent as LoginIcon } from "../../../assets/svg/login.svg";
import { useMenuContext } from "../../../services/reducers/MenuContext";
import { getFieldTranslationByNames } from "../../../services/Utility";
import useRequest from "../../../services/Hooks/useRequest";
import { useLanguage } from "../../../services/reducers/LanguageContext";
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
  const language = useLanguage();
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
      <Text isOpen={isOpen}>{getFieldTranslationByNames("4")}</Text>
    </Btn>
  );
};

export default BtnLogin;
