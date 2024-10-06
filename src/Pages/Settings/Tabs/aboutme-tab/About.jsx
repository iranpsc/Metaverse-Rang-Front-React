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
    stroke:${(props) => props.theme.colors.newColors.shades[80]};
  }

  .ql-toolbar .ql-fill {
    fill: ${(props) => props.theme.colors.newColors.shades[80]};
  }

  .ql-toolbar .ql-picker-label,
  .ql-toolbar .ql-picker-options {
    color: white;
    background-color:#444;
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
  direction: rtl;
`;

const Char = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 5px;
  direction: rtl;

  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
  }

  span {
    color: ${({ isOverLimit }) => (isOverLimit ? "red" : "#a0a0ab")};
    font-size: 13px;
    font-weight: 400;
  }
`;

const About = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const { state, dispatch } = useGlobalState();
  const charLimit = 10000;
  const [aboutValue, setAboutValue] = useState(state.about || ""); 

  useEffect(() => {
    const cachedAbout = localStorage.getItem("aboutData"); 
    if (cachedAbout && !state.about) {
      setAboutValue(cachedAbout);
      dispatch({ type: "SET_ABOUT", payload: cachedAbout });
    } else if (!state.about) {
      const fetchData = async () => {
        try {
          const response = await Request("personal-info", HTTP_METHOD.GET); 
          console.log("data is",response.data.data);
          if (response.data && response.data.data.about) {
            setAboutValue(response.data.data.about); 
            dispatch({ type: "SET_ABOUT", payload: response.data.data.about }); 
            localStorage.setItem("aboutData", response.data.data.about); // 
          }
        } catch (error) {
          console.error("Error fetching data from API:", error);
        }
      };
      fetchData(); 
    }
  }, []); 

  const handleChange = (value) => {
    if (value.length <= charLimit && value !== state.about) {
      setAboutValue(value);
      dispatch({ type: "SET_ABOUT", payload: value });
      localStorage.setItem("aboutData", value); 
    }
  };


  const currentLength = aboutValue.length;
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
      <Label> {getFieldTranslationByNames("citizenship-account", "write about yourself")} </Label>
      <EditorContainer>
        <ReactQuill
          value={aboutValue}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          // placeholder="درباره خود بنویسید"
        />
      </EditorContainer>
      <Char isOverLimit={isOverLimit}>
        <span>
          {convertToPersian(remainingChars)} {getFieldTranslationByNames("citizenship-account", "character")}
        </span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default About;
