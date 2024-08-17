import { Editor } from "react-simple-wysiwyg";
import { useState } from "react";

const RichText = () => {
  const [html, setHtml] = useState("my <b>HTML</b>");

  function onChange(e) {
    setHtml(e.target.value);
  }

  return (
    <Editor
      containerProps={{ style: { resize: "vertical", border:'1px solid red' } }}
      value={html}
      onChange={onChange}
    />
  );
};

export default RichText;
