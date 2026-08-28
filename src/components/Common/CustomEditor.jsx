import "react-quill-new/dist/quill.snow.css";
import { useState, useEffect, useMemo, useRef } from "react";
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
  "indent",
  "link",
  "code-block",
  "align",
];

const getModules = (img = false, showToolbar = true) => {
  if (!showToolbar) {
    return {
      toolbar: false,
    };
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

  return {
    toolbar,
  };
};

/**
 * Reusable RichTextEditor with strict character limit
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
  showToolbar = true,
}) => {
  const [charCount, setCharCount] = useState(0);
  const quillRef = useRef(null);
  const lastValueRef = useRef(value);

  /**
   * تعداد واقعی کاراکترهای متن
   * نه تعداد کاراکترهای HTML
   */
  const getTextLength = (editor) => {
    if (!editor) return 0;

    return Math.max(0, editor.getText().length - 1);
  };

  const getTextLengthFromHtml = (html) => {
    if (!html) return 0;

    const temp = document.createElement("div");
    temp.innerHTML = html;

    return Math.max(0, (temp.textContent || "").length - 1);
  };

  useEffect(() => {
    setCharCount(getTextLengthFromHtml(value));

    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    if (value !== lastValueRef.current && value !== quill.root.innerHTML) {
      quill.clipboard.dangerouslyPasteHTML(value || "");
      lastValueRef.current = value;
    }
  }, [value]);

  const modules = useMemo(() => getModules(img, showToolbar), [img, showToolbar]);

  /**
   * وقتی متن تغییر می‌کند
   */
  const handleChange = (val) => {
    const quill = quillRef.current?.getEditor();
    if (!quill) return;

    let textLength = getTextLength(quill);

    /**
     * اگر متن از حد مجاز بیشتر شد،
     * فقط مقدار اضافه را حذف می‌کنیم.
     */
    if (textLength > charLimit) {
      const excess = textLength - charLimit;

      quill.deleteText(charLimit, excess, "silent");

      textLength = getTextLength(quill);

      const safeValue = SanitizeHTML(quill.root.innerHTML);

      setCharCount(textLength);
      onChange?.(safeValue);

      return;
    }

    const safeValue = SanitizeHTML(val);

    setCharCount(textLength);
    onChange?.(safeValue);
  };

  /**
   * جلوگیری از تایپ بیشتر از محدودیت
   */
  const handleKeyDown = (event) => {
    const quill = quillRef.current?.getEditor();

    if (!quill) return;

    const textLength = getTextLength(quill);

    const allowedKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    const isShortcut = event.ctrlKey || event.metaKey;
    const isPasteShortcut = isShortcut && event.key?.toLowerCase() === "v";

    if (
      textLength >= charLimit &&
      !allowedKeys.includes(event.key) &&
      !isShortcut
    ) {
      event.preventDefault();
    }

    if (isPasteShortcut && textLength >= charLimit) {
      event.preventDefault();
    }
  };

  /**
   * مدیریت Paste
   */
  const handlePaste = (event) => {
    const quill = quillRef.current?.getEditor();

    if (!quill) return;

    const paste = event.clipboardData.getData("text/plain");

    if (!paste) return;

    const selection = quill.getSelection(true);

    if (!selection) return;

    const currentLength = getTextLength(quill);

    if (currentLength >= charLimit) {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    const selectedLength = selection.length || 0;
    const availableLength = charLimit - currentLength + selectedLength;

    if (availableLength <= 0) return;

    const textToInsert = paste.slice(0, availableLength);

    if (selectedLength > 0) {
      quill.deleteText(selection.index, selectedLength, "silent");
    }

    quill.insertText(selection.index, textToInsert, "user");
    quill.setSelection(selection.index + textToInsert.length, 0, "silent");
  };

  const remainingChars = Math.max(0, charLimit - charCount);

  const isOverLimit = charCount >= charLimit;

  return (
    <>
      {label && <Label>{label}</Label>}

      <EditorContainer showToolbar={showToolbar} border={border}>
        <ReactQuill
          ref={quillRef}
          theme="snow"
          defaultValue={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
        />
      </EditorContainer>

      <Char isOverLimit={isOverLimit}>
        {showIcon && <CiEdit size={18} />}

        <span>
          {convertToPersian(remainingChars)} {getTranslation("530")}
        </span>
      </Char>
    </>
  );
};

export default CustomEditor;
