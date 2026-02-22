import CustomEditor from "../../../../components/Common/CustomEditor";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const WriteNoteInput = ({ description, onChange }) => {
  return (
    <CustomEditor
      value={description}
      onChange={onChange}
      label={getFieldTranslationByNames("1360")}
      img
    />
  );
};

export default WriteNoteInput;
