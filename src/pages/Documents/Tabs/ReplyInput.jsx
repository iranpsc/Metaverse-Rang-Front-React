import { getTranslation } from "../../../services/Utility";
import CustomEditor from "../../../components/Common/CustomEditor";

const ReplyInput = ({ message, setMessage }) => {
  const charLimit = 2000;

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      setMessage(value);
    }
  };

  return (
    <CustomEditor
      value={message}
      onChange={handleChange}
      label={getTranslation("1351")}
    />
  );
};

export default ReplyInput;
