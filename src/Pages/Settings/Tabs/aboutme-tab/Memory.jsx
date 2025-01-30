import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../Services/Utility/index";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useEffect, useState } from "react";
import { EditorContainer,Label, Char,formats,modules} from "../../../../Components/editorContainerStyle";

const Memory = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;
  
  const [memoryValue, setMemoryValue] = useState(""); 
  useEffect(() => {
    if (state.memory) {
      setMemoryValue(state.memory); 
    }
  }, [ state.memory]);



  const handleChange = (value) => {
    setMemoryValue(value); 
    if (value.length <= charLimit && value !== state.memory) {
      dispatch({ type: "SET_MEMORY", payload: value });
    }
  };
  const handleKeyDown = (event) => {
    if (memoryValue.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); 
    }
  };
  const currentLength = memoryValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars =convertToPersian(remainingChars);
 

  return (
    <>
      <Label>{getFieldTranslationByNames("93")}</Label>
      <EditorContainer>
        <ReactQuill
          value={memoryValue} 
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

export default Memory;
