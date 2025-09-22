import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useEffect, useState } from "react";
import { convertToPersian } from "../../../../services/Utility/index";
import { EditorContainer,Label, Char,formats,modules} from "../../../../components/editorContainerStyle";


const About = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
  const [aboutValue, setAboutValue] = useState("");


  useEffect(() => {
    if (state.about) {
      setAboutValue(state.about); 
    }
  }, [ state.about]);

  const handleChange = (value) => {
    setAboutValue(value);
    if (value.length <= charLimit) {
      dispatch({ type: "SET_ABOUT", payload: value });
    }
  };
  const handleKeyDown = (event) => {
    if (aboutValue.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault(); 
    }
  };
  const currentLength = aboutValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars = convertToPersian(remainingChars);

  return (
    <>
      <Label>{getFieldTranslationByNames("781")}</Label>

      <EditorContainer>
        <ReactQuill
          value={aboutValue}
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

export default About;
