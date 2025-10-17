import "react-quill/dist/quill.snow.css";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";

import { useGlobalState } from "./GlobalVodStateProvider";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../services/Utility";
import { EditorContainer,Char,Label,formats,modules} from "../../../components/editorContainerStyle";


const Description = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      dispatch({ type: "SET_DESCRIPTION", payload: value });
    }
  };

  const currentLength = state.description.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;


  return (
    <>
      <Label> {getFieldTranslationByNames("1327")}</Label>
      <EditorContainer>
        <ReactQuill
          value={state.description}
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>
          {convertToPersian(remainingChars)}{" "}
          {getFieldTranslationByNames("530")}
        </span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default Description;
