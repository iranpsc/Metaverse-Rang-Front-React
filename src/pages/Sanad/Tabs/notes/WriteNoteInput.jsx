import "react-quill/dist/quill.snow.css";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { EditorContainer,Char,Label,formats,modules} from "../../../../components/editorContainerStyle";

import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../services/Utility";

const WriteNoteInput = ({ description, onChange }) => {
  const charLimit = 2000;
  const currentLength = description.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;


  return (
    <>
      <Label>{getFieldTranslationByNames("1360")}</Label>
      <EditorContainer>
        <ReactQuill
          value={description}
          onChange={onChange}
          modules={modules}
          formats={formats}
          // placeholder="یادداشت خود را بنویسید"
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

export default WriteNoteInput;
