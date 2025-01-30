import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../Services/Utility/index";
import { useReportsGlobalState } from "../GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility/index";
import { useEffect, useState } from "react";
import { EditorContainer,Label, Char,formats,modulesWithoutImage} from "../../../../Components/editorContainerStyle";

const Description = () => {
  const { state, dispatch } = useReportsGlobalState();
  const charLimit = 2000;
  const [description, setDescription] = useState(state.description); 

  useEffect(() => {
    setDescription(state.description); 
  }, [state.description]);

  const handleChange = (value) => {
    setDescription(value);
    if (value.length <= charLimit) {
      dispatch({ type: "SET_DESCRIPTION", payload: value });
    }
  };

  const handleKeyDown = (event) => {
    if (description.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); 
    }
  };

  const currentLength = description.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
 
  return (
    <>
      <Label>{getFieldTranslationByNames("report", "explanation of the report")}</Label>
      <EditorContainer>
        <ReactQuill
          value={state.description}
          onChange={handleChange}
          onKeyDown={handleKeyDown} 
          modules={modulesWithoutImage}
          formats={formats}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{convertToPersian(remainingChars)} {getFieldTranslationByNames("citizenship-account", "character")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default Description;
