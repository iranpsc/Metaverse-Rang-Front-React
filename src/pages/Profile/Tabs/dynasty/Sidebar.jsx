import { getFieldTranslationByNames } from "../../../../services/Utility";
import { Container,Label } from "../../../../components/sidbar";

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
