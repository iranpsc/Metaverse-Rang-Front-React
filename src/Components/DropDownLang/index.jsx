import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { getFieldTranslationByNames } from "../../Services/Utility";
import i18n from "../../i18n/i18n";
import { useMenuContext } from "../../Services/Reducers/MenuContext";
import Tippy from "@tippyjs/react";
import "tippy.js/animations/scale.css";
import LangIcon from "../../Assets/svg/lang.svg";
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
  justify-content: ${({ shouldHide }) =>
    shouldHide ? "center" : "space-between"};
  gap: 16.865px;
  padding: ${({ shouldHide }) => (shouldHide ? "0px" : "0 10px")};
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
  color: ${({ isSelected }) => (isSelected ? "#000" : "#858585")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
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

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
  text-transform: capitalize;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ChevronIcon = styled(FaChevronDown)`
  display: ${({ shouldHide }) => (shouldHide ? "none" : "block")};
  width: 12px;
  height: 12px;
  transition: transform 0.3s ease;
  transform: ${({ isOpenDrop }) =>
    isOpenDrop ? "rotate(180deg)" : "rotate(0deg)"}; // چرخاندن آیکون
`;

const DropDownLang = () => {
  const { isOpen } = useMenuContext();
  const [isOpenDrop, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(i18n.language || "fa");

  useEffect(() => {
    document.body.dir = i18n.dir();
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang) {
      changeLanguage(savedLang);
    }
  }, []);

  const changeLanguage = async (lang) => {
    try {
      const cachedData = localStorage.getItem(`i18n_cache_${lang}`);
      if (cachedData) {
        await i18n.changeLanguage(lang);
        if (i18n.dir() === "ltr" || lang === "fa") {
          document.body.dir = i18n.dir();
          setCurrentLang(lang);
          localStorage.setItem("selectedLanguage", lang);
        } else {
          // اگر به زبان ltr تغییر نکرد، زبان را به فارسی برگردانید
          await i18n.changeLanguage("fa");
          document.body.dir = i18n.dir();
          setCurrentLang("fa");
          localStorage.setItem("selectedLanguage", "fa");
        }
      } else {
        await i18n.changeLanguage(lang);
        if (i18n.dir() === "ltr" || lang === "fa") {
          document.body.dir = i18n.dir();
          setCurrentLang(lang);
          localStorage.setItem("selectedLanguage", lang);
        } else {
          // اگر به زبان ltr تغییر نکرد، زبان را به فارسی برگردانید
          await i18n.changeLanguage("fa");
          document.body.dir = i18n.dir();
          setCurrentLang("fa");
          localStorage.setItem("selectedLanguage", "fa");
        }
      }
    } catch (error) {
      console.error("Error changing language:", error);
    }
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
          <TitleContainer>
            {" "}
            <Icon src={LangIcon} />
            <Text shouldHide={!isOpen}>
              {getFieldTranslationByNames("central-page", "language")}
            </Text>
          </TitleContainer>
          <ChevronIcon isOpenDrop={isOpenDrop} shouldHide={!isOpen} />{" "}
          {/* آیکون باز و بسته شدن */}
        </Btn>
        {isOpenDrop && (
          <DropdownMenu isOpenDrop={isOpenDrop}>
            <DropdownItem
              onClick={() => changeLanguage("en")}
              isSelected={currentLang === "en"}
            >
              {getFieldTranslationByNames("misc", "english")}
            </DropdownItem>
            <DropdownItem
              onClick={() => changeLanguage("fa")}
              isSelected={currentLang === "fa"}
            >
              {getFieldTranslationByNames("misc", "persian")}
            </DropdownItem>
          </DropdownMenu>
        )}
      </Container>
    </Tippy>
  );
};

export default DropDownLang;
