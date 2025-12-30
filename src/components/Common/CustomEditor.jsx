import "react-quill/dist/quill.snow.css";
import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { CiEdit } from "react-icons/ci";
import {
  convertToPersian,
  getFieldTranslationByNames,
} from "../../services/Utility";
import {
  EditorContainer as StyledEditorContainer,
  Label,
  Char,
  formats,
  modulesWithoutImage,
} from "../editorContainerStyle";

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
}) => {
  const [content, setContent] = useState(value);

  useEffect(() => {
    setContent(value);
  }, [value]);
  const handleChange = (val, delta, source, editor) => {
    // طول واقعی متن بدون html
    const text = editor.getText(); // این متن plain text است
    let newValue = val;

    if (text.length - 1 > charLimit) {
      // -1 چون editor یه \n اضافه می‌کنه
      const allowedText = text.slice(0, charLimit);
      // جایگزینی متن editor با محدودیت
      const quill = editor;
      quill.deleteText(charLimit, text.length); // بقیه رو حذف می‌کنه
      newValue = quill.root.innerHTML;
    }

    setContent(newValue);
    onChange?.(newValue);
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
    if (remaining <= 0) return; // هیچ چیزی اضافه نشود
    const toPaste = paste.slice(0, remaining);
    const newValue = content + toPaste;
    setContent(newValue);
    onChange?.(newValue);
  };

  const remainingChars = charLimit - content.length;
  const isOverLimit = remainingChars <= 0;

  return (
    <div>
      {label && <Label>{label}</Label>}
      <StyledEditorContainer>
        <ReactQuill
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          modules={modulesWithoutImage}
          formats={formats}
          placeholder={placeholder}
        />
      </StyledEditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>
          {convertToPersian(remainingChars)} {getFieldTranslationByNames("530")}
        </span>
        {showIcon && <CiEdit size={20} />}
      </Char>
    </div>
  );
};

export default CustomEditor;
