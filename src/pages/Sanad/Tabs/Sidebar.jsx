import { getFieldTranslationByNames } from "../../../services/Utility";
import { Container, Label } from "../../../components/sidbar";

const Sidebar = ({ setMenu, menu }) => {
  return (
    <Container>
      <Label menu={menu === 1} onClick={() => setMenu(1)}>
        {getFieldTranslationByNames("1335")}
      </Label>
      <Label menu={menu === 2} onClick={() => setMenu(2)}>
        {getFieldTranslationByNames("1336")}
      </Label>
    </Container>
  );
};

export default Sidebar;
