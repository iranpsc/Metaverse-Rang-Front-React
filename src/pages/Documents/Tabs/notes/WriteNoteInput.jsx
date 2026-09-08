import CustomEditor from "../../../../components/Common/CustomEditor";
import { getTranslation } from "../../../../services/Utility";

const WriteNoteInput = ({ description, onChange }) => {
  return (
    <CustomEditor
      value={description}
      onChange={onChange}
      label={getTranslation("1360")}
      img
    />
  );
};

export default WriteNoteInput;
