import { useEffect, useMemo, useState } from "react";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { Container, Label } from "../../../../components/sidbar";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();

  const lastSegment = useMemo(() => {
    const segments = pathname.split("/");
    return segments[segments.length - 1];
  }, [pathname]);

  const [dynastyStatus, setDynastyStatus] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("dynastyStatus");
    if (stored) {
      setDynastyStatus(stored);
    }

    const handler = (event) => {
      setDynastyStatus(event.detail);
    };

    window.addEventListener("dynastyStatusUpdated", handler);

    return () => {
      window.removeEventListener("dynastyStatusUpdated", handler);
    };
  }, []);

  if (!dynastyStatus) return null;

  const labelText =
    dynastyStatus === "has"
      ? getFieldTranslationByNames(819)
      : getFieldTranslationByNames(807);

  return (
    <Container>
      <NavLink to="establish" replace end>
        {({ isActive }) => (
          <Label menu={isActive || lastSegment === "estate"}>
            {labelText}
            {""}
          </Label>
        )}
      </NavLink>

      <NavLink to="members" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames(112)}</Label>
        )}
      </NavLink>

      <NavLink to="send" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames(113)}</Label>
        )}
      </NavLink>

      <NavLink to="recieved" replace end>
        {({ isActive }) => (
          <Label menu={isActive}>{getFieldTranslationByNames(114)}</Label>
        )}
      </NavLink>
    </Container>
  );
};

export default Sidebar;
