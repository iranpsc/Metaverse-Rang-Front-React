import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../services/Utility/index";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useEffect, useState } from "react";
import { EditorContainer,Label, Char,formats,modules} from "../../../../components/editorContainerStyle";

const Opportunity = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;
  const [opportunityValue, setOpportunityValue] = useState(""); 
useEffect(() => {
  if (state.opportunity) {
    setOpportunityValue(state.opportunity); 
  }
}, [ state.opportunity]);

  const handleChange = (value) => {
    setOpportunityValue(value);

    if (value.length <= charLimit) {
      dispatch({ type: "SET_OPPORTUNITY", payload: value });
    }
  };
  const handleKeyDown = (event) => {
    if (opportunityValue.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); 
    }
  };
  const currentLength = opportunityValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars = convertToPersian(remainingChars);

  return (
    <>
      <Label >{getFieldTranslationByNames("801")}</Label>

      <EditorContainer >
        <ReactQuill
          value={opportunityValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown} 

          modules={modules}
          formats={formats}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{localizedRemainingChars} {getFieldTranslationByNames("530")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default Opportunity;
