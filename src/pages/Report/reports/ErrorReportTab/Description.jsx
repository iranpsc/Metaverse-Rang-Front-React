import "react-quill/dist/quill.snow.css";
import { useReportsGlobalState } from "../GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import CustomEditor from "../../../../components/Common/CustomEditor";

const Description = () => {
  const { state, dispatch } = useReportsGlobalState();
  const charLimit = 2000;

  const handleChange = (value) => {
    dispatch({ type: "SET_DESCRIPTION", payload: value });
  };

  return (
    <CustomEditor
      value={state.description}
      onChange={handleChange}
      charLimit={charLimit}
      label={getFieldTranslationByNames("20")}
      showIcon={true}
    />
  );
};

export default Description;
