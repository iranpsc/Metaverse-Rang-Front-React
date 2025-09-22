import "react-quill/dist/quill.snow.css";

import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";

import styled from "styled-components";
import { useGlobalState } from "../GlobalVodStateProvider";
import { useState } from "react";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../../../Services/Utility";

const EditorContainer = styled.div`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  overflow: hidden;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  border: 1px solid;
  margin: 10px auto;
  height: 212px;
  overflow: auto;

  .ql-toolbar {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: none;
    border-bottom: 1px solid gray;
  }

  .ql-container {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-family: inherit;
    border: none;
  }

  .ql-editor {
    min-height: 150px;
  }

  .ql-editor::before {
    content: attr(data-placeholder);
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-style: italic;
    position: absolute;
    left: 0;
    right: 20px;
    font-family: inherit;

    pointer-events: none;
    display: block;
  }

  .ql-toolbar .ql-picker {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }

  .ql-toolbar .ql-stroke {
    stroke: ${(props) => props.theme.colors.newColors.otherColors.iConText};
  }

  .ql-toolbar .ql-fill {
    fill: ${(props) => props.theme.colors.newColors.otherColors.iConText};
  }

  .ql-toolbar .ql-picker-label,
  .ql-toolbar .ql-picker-options {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.bgContainer};
  }

  .ql-toolbar .ql-picker-options {
    border: 1px solid #555;
  }

  .ql-toolbar .ql-picker-label:hover,
  .ql-toolbar .ql-picker-options:hover {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    background-color: #555;
  }
`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;

  svg {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#ffffff")};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;

const Label = styled.h2`
  color: ${(props) => props.theme.colors.newColors.shades.title};

  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 20px;
`;

const ReplyInput = ({ message, setMessage }) => {
  const [replyText, setReplyText] = useState("");
  const charLimit = 2000;

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      setReplyText(value);
      setMessage(value);
    }
  };

  const handleKeyPress = (e) => {
    const currentLength = replyText.length;
    if (currentLength >= charLimit) {
      e.preventDefault();
    }
  };

  const currentLength = replyText.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "code-block"],
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
    "code-block",
    "align",
  ];

  return (
    <>
      <Label>
        {getFieldTranslationByNames("1351")}
      </Label>
      <EditorContainer>
        <ReactQuill
          value={replyText}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
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

export default ReplyInput;
