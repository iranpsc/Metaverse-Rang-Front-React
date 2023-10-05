import React from "react";
import styled from "styled-components";
import LangIcon from "../../Assets/svg/lang.svg";
import { getFieldTranslationByNames } from "../../Services/Utility";
import { useState } from "react";
import { useTranslation } from "react-i18next";
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
  align-items: start;
  justify-content: start;
  gap: 16.865px;
  padding: 0 10px;
  border: none;
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
  color: #fff;
`;
const DropDownLang = () => {
  const storedLang = localStorage.getItem("selectedLanguage") || "en";
  const [selectedLanguage, setSelectedLanguage] = useState(storedLang);
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    document.body.dir = i18n.dir();
    localStorage.setItem("selectedLanguage", lng);
  };
  const SelectedItem = styled(DropdownItem)`
    color: yellow;
    padding: 0 22px;
    &::before {
      content: "✓";
      margin: 0 7px;
    }
  `;

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <Btn>
        <Icon src={LangIcon} />
        <Text>{getFieldTranslationByNames("central-page", "language")}</Text>
      </Btn>
      {isOpen && (
        <DropdownMenu isOpen={isOpen}>
          <DropdownItem
            as={selectedLanguage === "en" ? SelectedItem : undefined}
            onClick={() => {
              changeLanguage("en"); // English
              setIsOpen(false);
            }}
          >
            English
          </DropdownItem>
          <DropdownItem
            as={selectedLanguage === "fa" ? SelectedItem : undefined}
            onClick={() => {
              changeLanguage("fa"); // Persian
              setIsOpen(false);
            }}
          >
            Persian
          </DropdownItem>
        </DropdownMenu>
      )}
    </Container>
  );
};

export default DropDownLang;
