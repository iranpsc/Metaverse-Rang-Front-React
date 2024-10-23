import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../lib/convertToPersian";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { getFieldTranslationByNames,useRTL } from "../../../../Services/Utility";
import { useState,useEffect } from "react";
import i18n from "../../../../i18n/i18n";

const EditorContainer = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  overflow: hidden;
  color: white;
  direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
  text-align: ${(props) => (props.isRTL ? "right" : "left")};
  margin: 10px auto;
  height: 212px;
  overflow: auto;

  .ql-toolbar {
    background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
    border: none;
    border-bottom: 1px solid gray;
  }

  .ql-container {
    background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    border: none;
    direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
    text-align: ${(props) => (props.isRTL ? "right" : "left")};
  }

  .ql-editor {
    min-height: 150px;
    direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
    text-align: ${(props) => (props.isRTL ? "right" : "left")};
  }

  .ql-toolbar .ql-picker {
    color: white;
  }

  .ql-toolbar .ql-stroke {
    stroke: ${(props) => props.theme.colors.newColors.shades.title};
  }

  .ql-toolbar .ql-fill {
    fill: ${(props) => props.theme.colors.newColors.shades.title};
  }


  .ql-toolbar .ql-picker-options {
    border: 1px solid #555;
  }
`;

const Label = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
  direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};

`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
    direction: ${(props) => (props.isRTL ? "rtl" : "ltr")};
    text-align: ${(props) => (props.isRTL ? "right" : "left")};
    svg {
      color: ${({ isOverLimit, theme }) => (isOverLimit ? "red" : theme.colors.newColors.shades.title)};
    }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }

`;
const NextYear = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
  const [predictionValue, setPredictionValue] = useState(""); 
  const isRTL = useRTL();
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
  const localizedRemainingChars= i18n.language ==="fa" ? convertToPersian(remainingChars) : remainingChars;
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
      <Label isRTL={isRTL}>{getFieldTranslationByNames("Citizenship-profile", "forecast 2022")}</Label>
      <EditorContainer isRTL={isRTL}>
        <ReactQuill 
          value={predictionValue} 
          onChange={handleChange} 
          modules={modules}
          formats={formats}
        />
      </EditorContainer >
      
      <Char isOverLimit={isOverLimit} isRTL={isRTL} >
        <span>{localizedRemainingChars} {getFieldTranslationByNames("citizenship-account", "character")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default NextYear;
