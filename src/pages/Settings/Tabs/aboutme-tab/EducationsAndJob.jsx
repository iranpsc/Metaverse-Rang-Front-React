import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import {
 getFieldTranslationByNames,
 getFieldsByTabName,getFieldsByTabNameReverse
} from "../../../../services/Utility";
import { useState,useMemo} from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Container = styled.div`
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 gap: 20px;
 padding-top: 20px;

 div {
  width: 100%;
 }

 @media (min-width: 1366px) {
  flex-direction: row;
  div {
   width: 100%;
  }
 }
`;

const Label = styled.label`
 color: ${(props) => props.theme.colors.newColors.shades.title};
 display: block;
 margin-bottom: 10px;
 font-weight: 500;
`;

const Input = styled.input`
 width: 100%;
 margin-bottom: 20px;
 border-radius: 5px;
 border: 1px solid #454545;
 background-color: ${(props) =>
  props.theme.colors.newColors.otherColors.inputBg};
 color: ${(props) => props.theme.colors.newColors.shades.title};
 padding: 10px 12px;
 outline: none;
   font-size: 16px;

`;

const CustomSelectWrapper = styled.div`
 position: relative;
 width: 100%;
 margin-bottom: 20px;
`;

const SelectHeader = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 cursor: pointer;
 border-radius: 5px;
 border: 1px solid #454545;
 background-color: ${(props) =>
  props.theme.colors.newColors.otherColors.inputBg};
 color: #84858f;
 padding: 10px 12px;
 min-height: 42px;
`;

const OptionsList = styled.ul`
 position: absolute;
 top: 100%;
 left: 0;
 z-index: 10;
 width: 100%;
 margin: 4px 0 0 0;
 padding: 0;
 list-style: none;
 border-radius: 5px;
 border: 1px solid #454545;
 background-color: ${(props) =>
  props.theme.colors.newColors.otherColors.inputBg};
 max-height: 200px;
 overflow-y: auto;
  

  &::-webkit-scrollbar {
    display: none; 
  }

  scrollbar-width: none; 

  -ms-overflow-style: none;

`;
const OptionItem = styled.li`
 padding: 10px 12px;
 cursor: pointer;
  color: #84858f;

 &:hover {
    background-color: ${(props) => props.theme.colors.shades[80]};
    color: white;

 }
`;

const EducationsAndJob = () => {
 const { state, dispatch } = useGlobalState();
 const educationFields = getFieldsByTabName("misc", "education");
  const educationFieldsReverse = getFieldsByTabNameReverse("misc", "education");

 const [isDropdownOpen, setIsDropdownOpen] = useState(false);

 const handleEducationChange = (fieldName) => {
  dispatch({ type: "SET_EDUCATION", payload: fieldName });
  setIsDropdownOpen(false);
 };

 const handleJobChange = (e) => {
  const newOccupation = e.target.value;
  dispatch({ type: "SET_OCCUPATION", payload: newOccupation });
 };



const isPersianText = (text) => /[\u0600-\u06FF]/.test(text);
console.log("isPersianText", isPersianText(state.education));

const selectedEducation = useMemo(() => {
  if (!state.education) return getFieldTranslationByNames("1465");

  const isPersian = isPersianText(state.education);

  const primaryFields = isPersian ? educationFields : educationFieldsReverse;
  const secondaryFields = isPersian ? educationFieldsReverse : educationFields;

  const match = primaryFields.find(f => f.translation === state.education);
  if (match) return getFieldTranslationByNames(String(match.unique_id || match.id));

  const reverseMatch = secondaryFields.find(f => f.translation === state.education);
  if (reverseMatch) return getFieldTranslationByNames(String(reverseMatch.unique_id || reverseMatch.id));

  return state.education;
}, [state.education, educationFields, educationFieldsReverse]);


 return (
  <Container>
   <div>
    <Label htmlFor="education">
     {getFieldTranslationByNames("1465")}
    </Label>

    <CustomSelectWrapper>
     <SelectHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
      <span>{selectedEducation}</span>
      {isDropdownOpen ? (
       <IoIosArrowUp size={18} color="#84858f" />
      ) : (
       <IoIosArrowDown size={18} color="#84858f" />
      )}
     </SelectHeader>

     {isDropdownOpen && (
      <OptionsList>
       <OptionItem onClick={() => handleEducationChange("")}>
        {getFieldTranslationByNames("1465")}
       </OptionItem>

       {educationFields.map((field) => (
        
        <OptionItem
         key={field.translation}
         onClick={() => handleEducationChange(field.translation)}
        >
         {field.translation}
        </OptionItem>
       ))}
      </OptionsList>
     )}
    </CustomSelectWrapper>
   </div>
   <div>
    <Label htmlFor="job">{getFieldTranslationByNames("86")}</Label>
    <Input
     id="job"
     value={state.occupation || ""}
     onChange={handleJobChange}
     placeholder={getFieldTranslationByNames("783")}
     maxLength={25}
    />
   </div>
  </Container>
 );
};

export default EducationsAndJob;