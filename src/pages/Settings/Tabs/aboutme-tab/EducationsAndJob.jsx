import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import {
  getFieldTranslationByNames,
  getFieldsByTabName,
  getFieldsByTabNameReverse,
} from "../../../../services/Utility";
import { useState, useMemo, useEffect } from "react";
import Dropdown from "../../../../components/Common/Dropdown";
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  padding-top: 20px;

  div {
    width: 100%;
  }

  @media (min-width: 1366px) {
    flex-direction: row;
    div {
      width: 100%;
    }
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 10px 12px;
  outline: none;
  font-size: 16px;
`;

const EducationsAndJob = () => {
  const { state, dispatch } = useGlobalState();
  const educationFields = getFieldsByTabName("misc", "education");
  const educationFieldsReverse = getFieldsByTabNameReverse("misc", "education");
  const [selectedEducationFinal, setSelectedEducationFinal] = useState("");

  const handleEducationChange = (fieldName) => {
    dispatch({ type: "SET_EDUCATION", payload: fieldName });
  };

  const handleJobChange = (e) => {
    const newOccupation = e.target.value;
    dispatch({ type: "SET_OCCUPATION", payload: newOccupation });
  };

  const isPersianText = (text) => /[\u0600-\u06FF]/.test(text);

  const selectedEducation = useMemo(() => {
    if (!state.education) return getFieldTranslationByNames("1465");

    const isPersian = isPersianText(state.education);

    const primaryFields = isPersian ? educationFields : educationFieldsReverse;
    const secondaryFields = isPersian
      ? educationFieldsReverse
      : educationFields;

    const match = primaryFields.find((f) => f.translation === state.education);
    if (match)
      return getFieldTranslationByNames(String(match.unique_id || match.id));

    const reverseMatch = secondaryFields.find(
      (f) => f.translation === state.education
    );
    if (reverseMatch)
      return getFieldTranslationByNames(
        String(reverseMatch.unique_id || reverseMatch.id)
      );

    return state.education;
  }, [state.education, educationFields, educationFieldsReverse]);
  useEffect(() => {
    if (!state.education) {
      setSelectedEducationFinal(getFieldTranslationByNames("1465"));
      return;
    }

    if (selectedEducation) {
      setSelectedEducationFinal(selectedEducation);
    }
  }, [state.education, selectedEducation]);

  return (
    <Container>
      <div>
        <Label htmlFor="education">{getFieldTranslationByNames("1465")}</Label>

        <Dropdown
          options={educationFields.map((field) =>
            getFieldTranslationByNames(String(field.unique_id || field.id))
          )}
          selected={selectedEducationFinal}
          onSelect={(val) => {
            const selectedField = educationFields.find(
              (f) =>
                getFieldTranslationByNames(String(f.unique_id || f.id)) === val
            );
            handleEducationChange(selectedField?.translation || "");
          }}
          placeholder={getFieldTranslationByNames("1465")}
        />
      </div>
      <div>
        <Label htmlFor="job">{getFieldTranslationByNames("86")}</Label>
        <Input
          id="job"
          value={state.occupation || ""}
          onChange={handleJobChange}
          placeholder={getFieldTranslationByNames("783")}
          maxLength={25}
        />
      </div>
    </Container>
  );
};

export default EducationsAndJob;
