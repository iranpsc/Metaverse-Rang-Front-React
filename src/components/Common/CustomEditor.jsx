import "react-quill-new/dist/quill.snow.css";
import React, { useState, useEffect,useMemo } from "react";
import ReactQuill from "react-quill-new";
import { CiEdit } from "react-icons/ci";
import {
  convertToPersian,
  SanitizeHTML,
  getTranslation,
} from "../../services/Utility";
import styled from "styled-components";

const EditorContainer = styled.div`
   background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  overflow: hidden;
  color: white;
  margin: 10px auto;
  height: ${({ showToolbar }) => (showToolbar ? "212px" : "162px")};
  border: ${({ border }) => (border ? "1px solid gray" : "none")};

  .ql-toolbar {
    display: ${({ showToolbar }) => (showToolbar ? "block" : "none")};
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: none;
    border-bottom: 1px solid gray;
  }

  .ql-container {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    border: none;
    overflow: auto;
    max-height: 150px;
  }


  && .ql-editor {
    min-height: 150px;
    text-align: unset;
    font-size: 18px !important;
    line-height: 1.6;
    -webkit-text-size-adjust: 100%;
    font-family: "AzarMehr" !important;
  }

  /* placeholder */
  && .ql-editor::before {
    font-size: inherit !important;
    color: #888;
    opacity: 0.7;
    font-family: "AzarMehr" !important;
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

  @media (max-width: 700px) {
    && .ql-editor {
      font-size: 15px !important;
      -webkit-text-size-adjust: 100%;
    }
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

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  svg {
    color: ${({ isOverLimit, theme }) =>
      isOverLimit ? "red" : theme.colors.newColors.shades.title};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;
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
const getModules = (img = false, showToolbar = true) => {
  if (!showToolbar) {
    return { toolbar: false };
  }

  const toolbar = [
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "code-block"],
    [{ align: [] }],
  ];

  if (img) {
    toolbar[2].splice(1, 0, "image");
  }

  return { toolbar };
};

/**
 * Reusable RichTextEditor with strict char limit
 *
 * Props:
 * - value: string (initial content)
 * - onChange: function (called when value changes)
 * - charLimit: number (max characters)
 * - label: string (optional label above editor)
 * - showIcon: boolean (whether to show CiEdit icon)
 * - placeholder: string (placeholder when empty)
 */
const CustomEditor = ({
  value = "",
  onChange,
  charLimit = 2000,
  label,
  showIcon = true,
  placeholder = "",
  border = false,
  img = false,
    showToolbar = true, // 👈 جدید

}) => {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);
    const modules = useMemo(
    () => getModules(img, showToolbar),
    [img, showToolbar],
  );
  const handleChange = (val, delta, source, editor) => {
    const text = editor.getText();
    let newValue = val;

    if (text.length - 1 > charLimit) {
      const quill = editor;
      quill.deleteText(charLimit, text.length);
      newValue = quill.root.innerHTML;
    }

    const safeValue = SanitizeHTML(newValue);

    setContent(safeValue);
    onChange?.(safeValue);
  };

  const handleKeyDown = (event) => {
    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
    ];
    if (content.length >= charLimit && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  const handlePaste = (event) => {
    event.preventDefault();

    const paste = event.clipboardData.getData("text");
    const remaining = charLimit - content.length;

    if (paste.length > remaining) {
      return;
    }

    const newValue = content + paste;

    const safeValue = SanitizeHTML(newValue);

    setContent(safeValue);
    onChange?.(safeValue);
  };

  const remainingChars = charLimit - content.length;
  const isOverLimit = remainingChars <= 0;

  return (
    <div>
      {label && <Label>{label}</Label>}
      <EditorContainer border={border} showToolbar={showToolbar}>
        <ReactQuill
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>
          {convertToPersian(remainingChars)} {getTranslation("530")}
        </span>
        {showIcon && <CiEdit size={20} />}
      </Char>
    </div>
  );
};

export default CustomEditor;
