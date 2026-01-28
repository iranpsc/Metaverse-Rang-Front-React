import { getFieldTranslationByNames } from "../../../../services/Utility";
import { Container, Label } from "../../../../components/sidbar";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <NavLink to="houses" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames("58")}</Label>
        )}
      </NavLink>
      <NavLink to="following" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames("55")}</Label>
        )}
      </NavLink>
      <NavLink to="followers" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames("38")}</Label>
        )}
      </NavLink>{" "}
    </Container>
  );
};
  
export default Sidebar;
