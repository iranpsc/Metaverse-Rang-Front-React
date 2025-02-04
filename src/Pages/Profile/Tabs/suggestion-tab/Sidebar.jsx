import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility/index";
import { useLanguage } from "../../../../Services/Reducers/LanguageContext";

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg1};
    border-radius: 5px;
  padding: 15px 0;
  height: 100%;
  max-width: 200px;
  min-width: 200px;

  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.menu ? props.theme.colors.primary : props.theme.colors.newColors.shades[30])};
  
  padding: 8px 25px;
  cursor: pointer;
  transition: all 0.2s linear;
  
  ${({ isPersian, menu, theme }) => `
    border-${isPersian ? "right" : "left"}: 2px solid ${menu ? theme.colors.primary : "transparent"};
  `}

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    ${({ isPersian, theme }) => `
      border-${isPersian ? "right" : "left"}: 2px solid ${theme.colors.primary};
    `}
  }
`;

const Sidebar = ({ setMenu, menu }) => {
  const isPersian = useLanguage();

  return (
    <Container>
      <Label menu={menu === 1} isPersian={isPersian} onClick={() => setMenu(1)}>
        {getFieldTranslationByNames("764")}{" "}
      </Label>
      <Label menu={menu === 2} isPersian={isPersian} onClick={() => setMenu(2)}>
        {getFieldTranslationByNames("765")}{" "}
      </Label>
    </Container>
  );
};

export default Sidebar;
