import React from "react";
import styled from "styled-components";
import LangIcon from "../../Assets/svg/lang.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useState } from "react";
import i18n from "../../i18n/i18n";
import { useEffect } from "react";

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
  justify-content: start;
  gap: 16.865px;
  padding: 0 10px;
  border: none;
  border-radius: 10px;
  height: 46px;
  background-color: ${(props) =>
    props.isOpen ? props.theme.openDropDown : "none"};
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

const DropdownItem = styled.div`
  padding: 0 50px;
  color: #858585;
`;
const DropDownLang = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, []);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
    // console.log(i18n.language());
  };

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Btn isOpen={isOpen}>
        <Icon src={LangIcon} />
        <Text>{getFieldTranslationByNames("central-page", "language")}</Text>
      </Btn>
      {isOpen && (
        <DropdownMenu isOpen={isOpen}>
          <DropdownItem onClick={() => changeLanguage("en")}>
            English
          </DropdownItem>
          <DropdownItem onClick={() => changeLanguage("fa")}>
            Persian
          </DropdownItem>
        </DropdownMenu>
      )}
    </Container>
  );
};

export default DropDownLang;
