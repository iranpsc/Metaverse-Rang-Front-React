import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.menuBg};
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  /* اضافه کردن اسکرول برای حالت landscape */
  @media (orientation: landscape) {
    max-height: 100vh;
    overflow-y: auto;
    
    /* بهبود ظاهر اسکرول بار */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.newColors.shades[20]};
      border-radius: 3px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.colors.newColors.shades[30]};
    }
  }
  
  /* تنظیمات خاص برای گوشی‌های آیفون */
  @media (max-width: 768px) {
    max-height: calc(100vh - 120px); /* کسر کردن فضای سرچ بار و هدر */
    overflow-y: auto;
    
    /* تنظیمات اسکرول برای موبایل */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors.newColors.shades[20]};
      border-radius: 2px;
    }
  }
  
  /* تنظیمات خاص برای آیفون با سرچ بار ثابت */
  @supports (-webkit-touch-callout: none) {
    @media (max-width: 768px) {
      max-height: calc(100vh - 140px); /* فضای بیشتر برای سرچ بار آیفون */
      padding-bottom: 20px; /* فضای اضافی در پایین */
    }
  }
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) =>
    props.menu
      ? props.theme.colors.primary
      : props.theme.colors.newColors.shades[30]};
  padding: 8px 25px;
  cursor: pointer;
  border-right: 2px solid
    ${(props) => (props.menu ? props.theme.colors.primary : "transparent")};
  transition: all 0.2s linear;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
    border-right: 2px solid ${(props) => props.theme.colors.primary};
  }
`;

const Sidebar = ({ setMenu, menu, mode }) => {
  return (
    <Container>
      <Label menu={menu === 1} onClick={() => setMenu(1)}>
        {mode === 1
          ? getFieldTranslationByNames(807)
          : mode === 2 && getFieldTranslationByNames(819)}
      </Label>
      <Label menu={menu === 2} onClick={() => setMenu(2)}>
        {getFieldTranslationByNames(112)}
      </Label>
      <Label menu={menu === 3} onClick={() => setMenu(3)}>
        {getFieldTranslationByNames(113)}
      </Label>
      <Label menu={menu === 4} onClick={() => setMenu(4)}>
        {getFieldTranslationByNames(114)}
      </Label>
    </Container>
  );
};

export default Sidebar;
