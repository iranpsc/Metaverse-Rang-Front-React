import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../lib/convertToPersian";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import useRequest from "../../../../Services/Hooks/useRequest/index"; 
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
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#ffffff")};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;
const NextYear = () => {
  const { Request } = useRequest(); 
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
  const [predictionValue, setPredictionValue] = useState(
    localStorage.getItem("prediction") || "" // مقدار اولیه از localStorage
  );
  const [isDataLoaded, setIsDataLoaded] = useState(false); // کنترل اینکه فقط یکبار درخواست بزنیم

  useEffect(() => {
    if (!localStorage.getItem("prediction")) { // اگر پیش‌بینی قبلاً در localStorage ذخیره نشده باشد
      const fetchData = async () => {
        if (!isDataLoaded) { // فقط زمانی که هنوز داده بارگذاری نشده است، درخواست ارسال می‌شود
          try {
            const response = await Request("personal-info", "GET");

            if (response.data && response.data.data) {
              const predictionData = response.data.data.prediction || "";
              setPredictionValue(predictionData); // حتی اگر خالی باشد، مقدار خالی را تنظیم می‌کند
              localStorage.setItem("prediction", predictionData); // ذخیره در localStorage
              setIsDataLoaded(true); // داده‌ها بارگذاری شده‌اند، دیگر درخواست ارسال نمی‌شود
            }
          } catch (error) {
            console.error("Error fetching data from API:", error);
            setIsDataLoaded(true); // حتی اگر خطا باشد، دوباره درخواست نمی‌زند
          }
        }
      };

      fetchData(); // یک بار درخواست به API می‌زند
    }
  }, [isDataLoaded, Request]);

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      setPredictionValue(value); 
      dispatch({ type: "SET_PREDICTION", payload: value });
      localStorage.setItem("prediction", value); // ذخیره تغییرات در localStorage
    }
  };

  const currentLength = predictionValue.length;
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
      <Label>{getFieldTranslationByNames("Citizenship-profile", "forecast 2022")}</Label>
      <EditorContainer>
        <ReactQuill
          value={predictionValue} 
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

export default NextYear;
