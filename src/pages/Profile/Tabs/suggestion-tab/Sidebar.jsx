import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import { Container, Label } from "../../../../components/sidbar";

const Sidebar = ({ setMenu, menu }) => {
  return (
    <Container>
      <Label menu={menu === 1} onClick={() => setMenu(1)}>
        {getFieldTranslationByNames("764")}{" "}
      </Label>
      <Label menu={menu === 2} onClick={() => setMenu(2)}>
        {getFieldTranslationByNames("765")}{" "}
      </Label>
    </Container>
  );
};

export default Sidebar;
