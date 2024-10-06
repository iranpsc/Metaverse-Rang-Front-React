import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { useEffect } from "react"; 
import { getFieldTranslationByNames, getFieldsByTabName } from "../../../../Services/Utility";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  direction: rtl;

  div {
    width: 100%;
  }

  @media (min-width: 1366px) {
    flex-direction: row;
    div {
      width: 48%;
    }
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 10px 12px;
  outline: none;
`;

const Select = styled.select`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #454545;
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  color: #84858f;
  padding: 10px 12px;
  outline: none;
`;

const EducationsAndJob = () => {
  const { state, dispatch } = useGlobalState();

  const educationFields = getFieldsByTabName("misc", "education");

  useEffect(() => {
    const storedEducation = localStorage.getItem("education");
    const storedJob = localStorage.getItem("job");

    if (storedEducation) {
      dispatch({ type: "SET_EDUCATIONS", payload: storedEducation });
    }
    if (storedJob) {
      dispatch({ type: "SET_JOB", payload: storedJob });
    }
  }, [dispatch]);

  const handleEducationChange = (e) => {
    const educationValue = e.target.value;
    dispatch({ type: "SET_EDUCATIONS", payload: educationValue });
    localStorage.setItem("education", educationValue); 
  };

  const handleJobChange = (e) => {
    const jobValue = e.target.value;
    dispatch({ type: "SET_JOB", payload: jobValue });
    localStorage.setItem("job", jobValue); 
  };

  return (
    <Container>
      <div>
        <Label htmlFor="education">{getFieldTranslationByNames("citizenship-account", "education")}</Label>
        <Select
          id="education"
          value={state.educations}
          onChange={handleEducationChange}
        >
          <option value="">{getFieldTranslationByNames("citizenship-account", "education")}</option>
          {educationFields.map((field) => (
            <option key={field.name} value={field.name}>
              {field.translation}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <Label htmlFor="job">{getFieldTranslationByNames("citizenship-account", "career in physics")}</Label>
        <Input
          id="job"
          value={state.job}
          onChange={handleJobChange}
          placeholder={getFieldTranslationByNames("citizenship-account", "career in physics")}
        />
      </div>
    </Container>
  );
};

export default EducationsAndJob;
