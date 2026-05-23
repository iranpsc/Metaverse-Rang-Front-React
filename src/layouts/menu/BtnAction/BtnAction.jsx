import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { useMenuContext } from "../../../services/reducers/MenuContext";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../services/Hooks/useAuth";
import ArowMenu from "../../../assets/svg/arowMenu.svg?react";
import { getFieldTranslationByNames } from "../../../services/Utility";
import useRequest from "../../../services/Hooks/useRequest";
import { removeItem } from "../../../services/Utility/LocalStorage";
import { useLanguage } from "../../../services/reducers/LanguageContext";

const Btn = styled.div`
  min-height: ${(props) =>
    props.isClicked && props.isOpen ? "170px" : "35px"};
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  position: ${(props) =>
    !props.isOpen && props.isClicked ? "absolute" : "relative"};
  bottom: ${(props) => (!props.isOpen && props.isClicked ? "120px" : "0")};
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  border-radius: 10px;
  cursor: pointer;
  transition: min-height 0.3s ease;
  margin-top: 10px;
  @media (max-height: 500px) {
    max-height: ${(props) =>
      props.isClicked && props.isOpen ? "14px" : "35px"};
  }
`;

const Text = styled.p`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  color: ${(props) => props.theme.colors.newColors.primaryText};
`;

const CollapsedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
const DefaultContainer = styled.div`
  display: ${(props) => (props.isOpen && props.isClicked ? "none" : "flex")};

  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;
const TextDetail = styled.p`
  display: ${(props) => (props.isClicked ? "block" : "none")};
  color: ${(props) => props.theme.colors.newColors.primaryText};
  border-bottom: 1px solid
    ${(props) => props.theme.colors.newColors.primaryText};
  width: 100%;
  padding-bottom: 7px;
  @media (max-height: 500px) {
    padding-bottom: 2px;
  }
`;

const IconArrow = styled(ArowMenu)`
  stroke: ${(props) => props.theme.colors.newColors.shades[90]};
  rotate: ${(props) => (props.isOpenDrop ? "90deg" : "270deg")};
  width: 40px;
  height: 40px;
`;

const Div = styled.div`
  position: ${(props) =>
    !props.isOpen && props.isClicked ? "absolute" : "relative"};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  
  ${(props) => {
    !props.isPersian
      ? `right: ${!props.isOpen ? "-220px" : "0"}`
      : `left: ${!props.isOpen ? "-220px" : "0"}`;
  }};
  z-index: 10;
  padding: 6px 16px;
  border-radius: 10px;
  width: ${(props) =>
    props.isOpen && props.isClicked ? "100%" : "fit-content"};
  display: ${(props) => (props.isClicked ? "block" : "none")};
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    ${(props) => {
      return !props.isPersian
        ? `left: ${!props.isOpen ? "-8px" : "0"} ;rotate:226deg;`
        : `right: ${!props.isOpen ? "-8px" : "0"} ;rotate: 45deg;`;
    }};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 35px 35px 0;
    border-color: transparent ${(props) => props.theme.colors.primary}
      transparent transparent;
    border-radius: 0 7px 0 0;
    display: ${(props) =>
      !props.isOpen && props.isClicked ? "block" : "none"};
     
  }
  @media (max-height: 500px) {
    padding: 3px 16px;
  }
`;

const BtnAction = () => {
  const { isOpen } = useMenuContext();
  const navigate = useNavigate();
  const { getUser } = useAuth();
  const [user, setUser] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();
  const isPersian = useLanguage();
  useLayoutEffect(() => {
    setUser(getUser());
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const logoutHandler = () => {
    Request("auth/logout", HTTP_METHOD.POST, {}, {}, "development").then(() => {
      removeItem("user");
      window.location.reload();
    });
  };
  return (
    <Btn isOpen={isOpen} isClicked={isClicked} onClick={handleClick}>
      <Div isOpen={isOpen} isClicked={isClicked} isPersian={isPersian}>
        <TextDetail
          isOpen={isOpen}
          isClicked={isClicked}
          onClick={() =>
            (window.location.href = `https://metarang.com/fa/citizens/${user.code}`)
          }
        >
          {getFieldTranslationByNames("162")}
        </TextDetail>
        <TextDetail
          isOpen={isOpen}
          isClicked={isClicked}
          onClick={() => (window.location.href = "https://metarang.com/fa")}
        >
          {getFieldTranslationByNames("303")}
        </TextDetail>
        <TextDetail
          isOpen={isOpen}
          isClicked={isClicked}
          onClick={() => logoutHandler()}
        >
          {getFieldTranslationByNames("230")}
        </TextDetail>
        <CollapsedContainer isOpen={isOpen}>
          <IconArrow isOpenDrop={isClicked} />
          <Text isOpen={isOpen}>{user?.code.toUpperCase()}</Text>
        </CollapsedContainer>
      </Div>
      <DefaultContainer isOpen={isOpen} isClicked={isClicked}>
        <IconArrow isOpenDrop={isClicked} />
        <Text isOpen={isOpen}>{user?.code.toUpperCase()}</Text>
      </DefaultContainer>
    </Btn>
  );
};

export default BtnAction;
