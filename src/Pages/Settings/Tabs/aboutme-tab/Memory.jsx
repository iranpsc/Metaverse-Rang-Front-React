import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../lib/convertToPersian";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import useRequest from "../../../../Services/Hooks/useRequest/index"; // استفاده از useRequest برای درخواست API
import { useEffect, useState } from "react";

const EditorContainer = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  overflow: hidden;
  color: white;
  direction: rtl;
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
    direction: rtl;
    text-align: right;
  }

  .ql-editor {
    min-height: 150px;
    direction: rtl;
    text-align: right;
  }

  .ql-editor::before {
    content: attr(data-placeholder);
    color: #a0a0ab;
    font-style: italic;
    position: absolute;
    left: 0;
    right: 20px;
    font-family: inherit;
    text-align: right;
    pointer-events: none;
    display: block;
  }

  .ql-toolbar .ql-picker {
    color: white;
  }

  .ql-toolbar .ql-stroke {
    stroke: ${(props) => props.theme.colors.newColors.shades[80]};
  }

  .ql-toolbar .ql-fill {
    fill: ${(props) => props.theme.colors.newColors.shades[80]};
  }

  .ql-toolbar .ql-picker-label,
  .ql-toolbar .ql-picker-options {
    color: white;
    background-color: #444;
  }

  .ql-toolbar .ql-picker-options {
    border: 1px solid #555;
  }

  .ql-toolbar .ql-picker-label:hover,
  .ql-toolbar .ql-picker-options:hover {
    color: #ddd;
    background-color: #555;
  }
`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  direction: rtl;

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
  direction: rtl;
`;
const Memory = () => {
  const { Request } = useRequest(); // استفاده از useRequest
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;
  const [memoryValue, setMemoryValue] = useState(
    state.memory || localStorage.getItem("memory") || "" // مقداردهی اولیه از state یا localStorage
  );

  useEffect(() => {
    if (!state.memory && !localStorage.getItem("memory")) { // اگر حافظه قبلاً ذخیره نشده باشد
      const fetchData = async () => {
        try {
          const response = await Request("personal-info", "GET"); // درخواست به API برای دریافت اطلاعات

          if (response.data && response.data.data.memory) {
            const memoryData = response.data.data.memory;
            setMemoryValue(memoryData); // تنظیم مقدار حافظه از API
            dispatch({ type: "SET_MEMORY", payload: memoryData });
            localStorage.setItem("memory", memoryData); // ذخیره در localStorage
          }
        } catch (error) {
          console.error("Error fetching data from API:", error);
        }
      };

      fetchData();
    }
  }, [dispatch, Request, state.memory]);

  const handleChange = (value) => {
    if (value.length <= charLimit && value !== state.memory) {
      setMemoryValue(value); 
      dispatch({ type: "SET_MEMORY", payload: value });
      localStorage.setItem("memory", value); // ذخیره تغییرات جدید در localStorage
    }
  };

  const currentLength = memoryValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
      <Label>{getFieldTranslationByNames("Citizenship-profile", "pleasant memory")}</Label>
      <EditorContainer>
        <ReactQuill
          value={memoryValue} // استفاده از memoryValue که از API یا localStorage دریافت شده
          onChange={handleChange}
          modules={modules}
          formats={formats}
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>{convertToPersian(remainingChars)} {getFieldTranslationByNames("citizenship-account", "character")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default Memory;
