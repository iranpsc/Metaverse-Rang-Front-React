import CustomEditor from "../../../components/Common/CustomEditor";
import { useGlobalState } from "./GlobalVodStateProvider";
import { getFieldTranslationByNames } from "../../../services/Utility";

const Description = () => {
  const { state, dispatch } = useGlobalState();
  const charLimit = 2000;

  const handleChange = (value) => {
    if (value.length <= charLimit) {
      dispatch({ type: "SET_DESCRIPTION", payload: value });
    }
  };

  return (
    <CustomEditor
      value={state.description}
      onChange={handleChange}
      label={getFieldTranslationByNames("1327")}
      img
    />
  );
};

export default Description;
