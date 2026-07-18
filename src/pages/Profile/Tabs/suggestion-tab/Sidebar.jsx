import { getTranslation } from "../../../../services/Utility/index";
import { Container, Label } from "../../../../components/sidbar";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <Container>
      <NavLink to="recieved" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getTranslation("764")} </Label>
        )}
      </NavLink>
      <NavLink to="sent" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getTranslation("765")} </Label>
        )}
      </NavLink>
    </Container>
  );
};

export default Sidebar;
