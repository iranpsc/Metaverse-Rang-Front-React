import {
  BtnBold,
  BtnBulletList,
  BtnItalic,
  BtnLink,
  BtnRedo,
  BtnStrikeThrough,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  HtmlButton,
  Toolbar,
  createButton,
} from "react-simple-wysiwyg";

import styled from "styled-components";

const Wrapper = styled.div`
  border-radius: 5px;
  border-bottom: 1px solid wheat;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  background-color: #${(props) => props.theme.colors.newColors.otherColors.inputBg};
  overflow: hidden;
  height: 250px !important;
`;
const SuggestText = ({ setValue, value }) => {
  function onChange(e) {
    const text = e.target.value;
    setValue(text.slice(0, 1000));
  }
  const BtnAlignCenter = createButton("Align center", "≡", "justifyCenter");
  return (
    <Wrapper>
      <EditorProvider>
        <Editor
          placeholder="متن پیشنهادی"
          value={value}
          onChange={onChange}
          style={{ height: "250px", maxWidth: "1000px" }}
        >
          <Toolbar
            style={{
              backgroundColor: "transparent",
              border: "1px solid #454545",
            }}
          >
            <BtnUndo style={{ color: "gray" }} />
            <BtnRedo style={{ color: "gray" }} />
            <BtnBold style={{ color: "gray" }} />
            <BtnItalic style={{ color: "gray" }} />
            <BtnUnderline style={{ color: "gray" }} />
            <BtnBulletList style={{ color: "gray", padding: "6px 0" }} />
            <BtnStrikeThrough style={{ color: "gray" }} />
            <BtnLink style={{ color: "gray" }} />
            <HtmlButton style={{ color: "gray" }} />
            <BtnAlignCenter style={{ color: "gray" }} />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </Wrapper>
  );
};

export default SuggestText;
