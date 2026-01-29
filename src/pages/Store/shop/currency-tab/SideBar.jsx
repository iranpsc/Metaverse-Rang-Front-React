import { useNavigate, useLocation } from "react-router-dom";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";
import { Container, Label } from "../../../../components/sidbar";
import { currencies } from "../data";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // آخرین قسمت URL
  const currentPath = location.pathname.split("/").pop();

  return (
    <Container>
      {currencies.map((item, index) => {
        // active logic مثل tools
        const isActive =
          currentPath === item.path  ||
          (currentPath === "currency" && index === 0);

        return (
          <div
            key={item.id}
            onClick={() =>
              navigate(`/metaverse/store/currency/${item.path}`, {
                replace: true,
              })
            }
          >
            <Label menu={isActive}>
              {getFieldTranslationByNames("504")}{" "}
              {convertToPersian(item.id)}
            </Label>
          </div>
        );
      })}
    </Container>
  );
};

export default SideBar;
