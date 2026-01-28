import { NavLink } from "react-router-dom";
import { getFieldTranslationByNames } from "../../../services/Utility";
import { Container, Label } from "../../../components/sidbar";

const Sidebar = () => {
  return (
    <Container>
      <NavLink to="received" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames("1335")}</Label>
        )}
      </NavLink>

      <NavLink to="sent" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames("1336")}</Label>
        )}
      </NavLink>
    </Container>
  );
};

export default Sidebar;
