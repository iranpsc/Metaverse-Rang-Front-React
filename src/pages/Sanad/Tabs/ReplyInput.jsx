import { useState } from "react";
import { getFieldTranslationByNames } from "../../../services/Utility";
import CustomEditor from "../../../components/Common/CustomEditor";

const ReplyInput = ({ setMessage }) => {
  const [replyText, setReplyText] = useState("");
  const charLimit = 2000;

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      setReplyText(value);
      setMessage(value);
    }
  };

  return (
    <CustomEditor
      value={replyText}
      onChange={handleChange}
      label={getFieldTranslationByNames("1351")}
    />
  );
};

export default ReplyInput;
