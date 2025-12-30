import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: flex-start;
  color: flex-start;
  padding: 6px 0;
  cursor: pointer;

  &:hover {
    color: #0066ff;
  }
`;

const Name = styled.p`
  max-width: 200px;
  overflow: hidden;
  transition: max-width 0.2s ease;

  color: ${(p) => (p.selected ? p.theme.colors.primary : "#858585")};
  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// ===============================
//          COMPONENT
// ===============================
export default function DropdownLanguageModule({
  langArray,
  currentLangObject,
  changeLanguage,
  currentLang,
  setIsLangOpen,
  isLangOpen,
}) {
  return (
    <Wrapper>
      <Menu>
        {langArray?.map((item) => (
          <Item
            key={item.id}
            onClick={() => {
              changeLanguage(item.code); // ← تغییر زبان با انتخاب آیتم
              setIsLangOpen(!isLangOpen);
            }}
          >
            <img
              src={item.icon}
              alt={item.native_name}
              width={28}
              height={28}
            />
            <Name selected={currentLang === item.code}>{item.native_name}</Name>
          </Item>
        ))}
      </Menu>
    </Wrapper>
  );
}
