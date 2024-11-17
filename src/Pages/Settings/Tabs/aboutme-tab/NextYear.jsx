import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../Services/Utility/index";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useState,useEffect } from "react";
import { EditorContainer,Label, Char} from "./editorContainerStyle";

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
    if (value.length <= charLimit) {
      setPredictionValue(value); 
      dispatch({ type: "SET_PREDICTION", payload: value });
    }
  };

  const currentLength = predictionValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars=  convertToPersian(remainingChars);
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "code-block"],
      [{ align: [] }],
    ],
  };

  const formats = [
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
    "align",
  ];

  return (
    <>
      <Label>{getFieldTranslationByNames(643)}</Label>
      <EditorContainer>
        <ReactQuill 
          value={predictionValue} 
          onChange={handleChange} 
          modules={modules}
          formats={formats}
        />
      </EditorContainer >
      
      <Char isOverLimit={isOverLimit} >
        <span>{localizedRemainingChars} {getFieldTranslationByNames(9217)}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default NextYear;
