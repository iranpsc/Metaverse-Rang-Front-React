import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useEffect, useState } from "react";
import { convertToPersian } from "../../../../Services/Utility/index";
import { EditorContainer,Label, Char} from "./editorContainerStyle";


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
    if (value.length <= charLimit) {
      setAboutValue(value);
      dispatch({ type: "SET_ABOUT", payload: value });
    }
  };

  const currentLength = aboutValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;

  const localizedRemainingChars = convertToPersian(remainingChars);

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
      <Label>{getFieldTranslationByNames("781")}</Label>

      <EditorContainer>
        <ReactQuill
          value={aboutValue}
          onChange={handleChange}
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
