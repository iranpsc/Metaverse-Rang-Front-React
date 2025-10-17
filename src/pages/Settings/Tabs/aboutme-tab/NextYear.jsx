import "react-quill/dist/quill.snow.css";
import { CiEdit } from "react-icons/ci";
import ReactQuill from "react-quill";
import { convertToPersian } from "../../../../services/Utility";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useState, useEffect } from "react";
import { EditorContainer, Label, Char, formats, modules } from "../../../../components/editorContainerStyle";
import { useLanguage } from "../../../../services/reducers/LanguageContext";
import moment from "moment-jalaali";

const NextYear = () => {
  const [nextGeorgianYear, setNextGeorgianYear] = useState(null);
  const [nextJalaliYear, setNextJalaliYear] = useState(null);
  const { state, dispatch } = useGlobalState();
  const [predictionValue, setPredictionValue] = useState("");

  const charLimit = 10000;
  const isPersian = useLanguage();

  useEffect(() => {
    if (state.prediction) {
      setPredictionValue(state.prediction);
    }

    const now = moment();
    setNextGeorgianYear(now.year() + 1);
    setNextJalaliYear(moment().add(1, "jYear").format("jYYYY"));
  }, [state.prediction, isPersian]);

  const handleChange = (value) => {
    setPredictionValue(value);
    if (value.length <= charLimit) {
      dispatch({ type: "SET_PREDICTION", payload: value });
    }
  };

  const handleKeyDown = (event) => {
    if (predictionValue.length >= charLimit && event.key !== "Backspace" && event.key !== "Delete") {
      event.preventDefault();
    }
  };

  const currentLength = predictionValue.length;
  const remainingChars = charLimit - currentLength;
  const isOverLimit = remainingChars <= 0;
  const localizedRemainingChars = convertToPersian(remainingChars);

  const yearToDisplay = isPersian ? nextJalaliYear : nextGeorgianYear;

  return (
    <>
      <Label style={{ paddingTop: 20 }}>
        {getFieldTranslationByNames("656")} {convertToPersian(yearToDisplay)}
      </Label>

      <EditorContainer>
        <ReactQuill
          value={predictionValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          modules={modules}
          formats={formats}
        />
      </EditorContainer>

      <Char isOverLimit={isOverLimit}>
        <span>{localizedRemainingChars} {getFieldTranslationByNames("530")}</span>
        <CiEdit size={20} />
      </Char>
    </>
  );
};

export default NextYear;
