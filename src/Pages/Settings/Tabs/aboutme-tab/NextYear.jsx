import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../Services/Utility/index";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useState,useEffect } from "react";
import { EditorContainer,Label, Char,formats,modules} from "../../../../Components/editorContainerStyle";

const NextYear = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
  const [predictionValue, setPredictionValue] = useState(""); 
  useEffect(() => {
    if (state.prediction) {
      setPredictionValue(state.prediction); 
    }
  }, [ state.prediction]);
  

  const handleChange = (value) => {    
      setPredictionValue(value); 

    if (value.length <= charLimit) {
      dispatch({ type: "SET_PREDICTION", payload: value });
    }
  };
  const handleKeyDown = (event) => {
    if (predictionValue.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); 
    }
  };
  const currentLength = predictionValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars=  convertToPersian(remainingChars);
  
  return (
    <>
      <Label>{getFieldTranslationByNames("Citizenship-profile", "forecast 2022")}</Label>
      <EditorContainer>
        <ReactQuill 
          value={predictionValue} 
          onChange={handleChange} 
          onKeyDown={handleKeyDown} 

          modules={modules}
          formats={formats}
        />
      </EditorContainer >
      
      <Char isOverLimit={isOverLimit} >
        <span>{localizedRemainingChars} {getFieldTranslationByNames("citizenship-account", "character")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default NextYear;
