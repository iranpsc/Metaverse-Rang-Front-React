import styled from "styled-components";

const Container = styled.div`
  background-color: #1a1a18;
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
  color: ${(props) => (props.menu ? "#FFC700" : "#dedee9")};
  padding: 8px 25px;
  cursor: pointer;
  border-right: 2px solid ${(props) => (props.menu ? "#FFC700" : "transparent")};
  transition: all 0.2s linear;
  &:hover {
    color: #ffc700;
    border-right: 2px solid #ffc700;
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
