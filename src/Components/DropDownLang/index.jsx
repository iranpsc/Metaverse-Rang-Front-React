import React from "react";
import styled from "styled-components";
import LangIcon from "../../Assets/svg/lang.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useState } from "react";
import i18n from "../../i18n/i18n";
import { useEffect } from "react";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
const Btn = styled.button`
  display: flex;
  width: 100%;
  background-color: transparent;
  align-items: center;
  justify-content: ${({ shouldHide }) => (shouldHide ? "center" : "start")};
  gap: 16.865px;
  padding: ${({ shouldHide }) => (shouldHide ? " 0px" : "0 10px")};
  border: none;
  border-radius: 10px;
  height: 46px;
  background-color: ${(props) =>
    props.isOpenDrop ? props.theme.openDropDown : "none"};
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
  display: ${({ shouldHide }) => (shouldHide ? "none" : "block")};
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;
const DropdownMenu = styled.div`
  flex-direction: column;
  width: 100%;
  z-index: 1;
  display: ${({ isOpenDrop }) => (isOpenDrop ? "flex" : "none")};
`;

const DropdownItem = styled.div`
  padding: 0 50px;
  color: #858585;
`;
const Tooltip = styled.div`
  width: 146px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.newColors.shades[40]};
  border-radius: 10px;
  color: ${(props) => props.theme.colors.newColors.shades[100]};
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%; /* 36px */
  text-transform: capitalize;
`;
const DropDownLang = () => {
  const { isOpen } = useMenuContext();
  const [isOpenDrop, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, []);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  };

  return (
    <Tippy
      content={
        <Tooltip>
          {getFieldTranslationByNames("central-page", "language")}
        </Tooltip>
      }
      zIndex={10000}
      placement="left"
      interactive={true}
      delay={50}
      animation="scale"
    >
      <Container onClick={() => setIsOpen(!isOpenDrop)}>
        <Btn isOpenDrop={isOpenDrop} shouldHide={!isOpen}>
          <Icon src={LangIcon} />
          <Text shouldHide={!isOpen}>
            {getFieldTranslationByNames("central-page", "language")}
          </Text>
        </Btn>
        {isOpenDrop && (
          <DropdownMenu isOpenDrop={isOpenDrop}>
            <DropdownItem onClick={() => changeLanguage("en")}>
              English
            </DropdownItem>
            <DropdownItem onClick={() => changeLanguage("fa")}>
              Persian
            </DropdownItem>
          </DropdownMenu>
        )}
      </Container>
    </Tippy>
  );
};

export default DropDownLang;
