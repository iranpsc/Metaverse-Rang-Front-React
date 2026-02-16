import styled from "styled-components";
import LogoIcon from "../../assets/svg/logoMeta.svg";
import { getFieldTranslationByNames } from "../../services/Utility";
import { useMenuContext } from "../../services/reducers/MenuContext";
import { ReactComponent as ArowMenu } from "../../assets/svg/arowMenu.svg";
import { LangContainer, LangButton, LangMenu } from "./LangSelector.styles";
import { useState, useEffect } from "react";
import useLanguage from "../../services/Hooks/useLanguage";
import DropdownLanguageModule from "../../components/DropDownLang/DropdownLanguageModule";
import ThemeMenuModule from "./ThemeMenuModule";
import { languagesMeta } from "../../i18n/i18n";
const Logo = styled.img`width: 37px;`;

const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: ${(props) => (props.isOpen ? "space-between" : "center")};
  gap: 5px;
  width: 100%;
  position: relative;
`;

const Headerbtn = styled.div`
  flex-direction: row;
  padding-top: 5px;
  gap: 10px;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  
  @media (max-width: 767px) {
   padding-top: 8px;
  }

`;

const ContainerText = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  align-items: start;
  white-space: nowrap;
  justify-content: center;
  flex-direction: column;
  
  @media (max-width: 767px) {
   padding-top: 2px;
  }
`;

const Title = styled.p`
  color: ${(props) => props.theme.colors.newColors.otherColors.headerMenu};
  font-size: 16px;
  height: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
`;

const Details = styled.p`
  color: #939393;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 180%;
`;

const BtnOpenCloseMenu = styled.button`

  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.isOpen ? "transparent" : p.theme.colors.newColors.otherColors.themeBtn};
  position: ${(props) => (props.isOpen ? "relative" : "absolute")};
  ${(props) => {
    const direction = document.body.dir || "ltr";
    return direction === "ltr"
      ? `right: ${!props.isOpen ? "-75px" : "0"}`
      : `left: ${!props.isOpen ? "-75px" : "0"}`;
  }};
  z-index: 9;
  border: none;
`;

const ContainerMain = styled.div`display: flex; gap: 12px;`;
const Icon = styled(ArowMenu)`
  stroke: ${(props) => props.theme.colors.newColors.otherColors.iconText};

  transform: ${({ isOpen, isPersian }) => {
    if (isPersian) {
      return isOpen ? "rotate(0deg)" : "rotate(180deg)";
    } else {
      return isOpen ? "rotate(180deg)" : "rotate(0deg)";
    }
  }};

  transition: transform 0.3s ease;

  width: 41px;
  height: 41px;
`;



const Header = () => {
  const { currentLang, changeLanguage, isPersian } = useLanguage();
  const [langArray, setLangArray] = useState([]);
  const [currentLangObject, setCurrentLangObject] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { isOpen, toggleMenu } = useMenuContext();


  useEffect(() => {
    setLangArray(languagesMeta);
    const found = languagesMeta.find((item) => item.code === currentLang);
    setCurrentLangObject(found || languagesMeta[0]);
  }, [currentLang]);
  return (
    <Container isOpen={isOpen}>
      <ContainerMain>
        <Logo src={LogoIcon} />
        <ContainerText isOpen={isOpen}>
          <Title>{getFieldTranslationByNames(148)}</Title>
          <Details>{getFieldTranslationByNames(905)}</Details>
        </ContainerText>
        <Headerbtn isOpen={isOpen}>
          <LangContainer isOpen={isOpen}>
            <LangButton onClick={() => setIsLangOpen(!isLangOpen)}>
              <img
                src={currentLangObject?.icon}
                alt={currentLangObject?.native_name}
                width={28}
                height={28}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            </LangButton>

            {isLangOpen && (
              <LangMenu>
                <DropdownLanguageModule
                  langArray={langArray}
                  currentLangObject={currentLangObject}
                  changeLanguage={changeLanguage}
                  currentLang={currentLang}
                  setIsLangOpen={setIsLangOpen}
                  isLangOpen={isLangOpen}
                />
              </LangMenu>
            )}
          </LangContainer>
          <ThemeMenuModule />
        </Headerbtn>
      </ContainerMain>
      <BtnOpenCloseMenu onClick={toggleMenu} isOpen={isOpen} >
        <Icon isOpen={isOpen} isPersian={isPersian} />
      </BtnOpenCloseMenu>
    </Container>
  );
};

export default Header;
