import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { Label } from "../../../../components/sidbar";
import { NavLink } from "react-router-dom";
const Wrapper = styled.div`
  max-width: 171px !important;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 5px;
  color: #dedee9;
  margin-top: 20px;
`;

const SidebarOptions = () => {
  return (
    <Wrapper>
      <NavLink to="price" replace end> 
        {({isActive})=>(  <Label menu={isActive}>
        {getFieldTranslationByNames("524")}
      </Label>)}
       </NavLink>
   
    </Wrapper>
  );
};

export default SidebarOptions;
