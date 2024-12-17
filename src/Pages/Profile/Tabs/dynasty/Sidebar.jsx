import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 15px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) =>
    props.menu
      ? props.theme.colors.newColors.otherColors.primary
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
        {mode === 1 ? "تاسیس سلسله" : mode === 2 && "ملک سلسله"}
      </Label>
      <Label menu={menu === 2} onClick={() => setMenu(2)}>
        اعضای سلسله{" "}
      </Label>
      <Label menu={menu === 3} onClick={() => setMenu(3)}>
        درخواست ارسالی{" "}
      </Label>
      <Label menu={menu === 4} onClick={() => setMenu(4)}>
        درخواست دریافتی{" "}
      </Label>
    </Container>
  );
};

export default Sidebar;
