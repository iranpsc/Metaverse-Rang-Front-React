import styled from "styled-components";
import { getFieldTranslationByNames } from "../services/Utility";
import { NavLink } from "react-router-dom";
import { Label } from "./sidbar";
const Wrapper = styled.div`
  max-width: 171px !important;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 5px;
  color: #dedee9;
  height: 500px;
  margin-top: 20px;
`;

const SidebarOptions = ({ seller }) => {
  return (
    <Wrapper>
      <NavLink to={seller ? "lowest" : "price"} replace end>
        {({ isActive }) => (
          <Label menu={isActive}>
            {seller
              ? getFieldTranslationByNames("517")
              : getFieldTranslationByNames("524")}
          </Label>
        )}
      </NavLink>
      <NavLink to={seller ? "PriceDefine" : "suggest"} replace end>
        {({ isActive }) => (
          <Label menu={isActive}>
            {seller
              ? getFieldTranslationByNames("519")
              : getFieldTranslationByNames("525")}
          </Label>
        )}
      </NavLink>
    </Wrapper>
  );
};

export default SidebarOptions;
