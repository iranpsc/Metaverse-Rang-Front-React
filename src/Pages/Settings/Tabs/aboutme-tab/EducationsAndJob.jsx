import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames, getFieldsByTabName} from "../../../../Services/Utility"; 

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;

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


  const handleEducationChange = (e) => {
    const newEducation = e.target.value;
    dispatch({ type: "SET_EDUCATION", payload: newEducation });
  };

  const handleJobChange = (e) => {
    const newOccupation = e.target.value;
    dispatch({ type: "SET_OCCUPATION", payload: newOccupation });
  };

  return (
    <Container>
      <div>
        <Label htmlFor="education">
          {getFieldTranslationByNames("citizenship-account", "education")}
        </Label>
        <Select
          id="education"
          value={state.education || ""} 
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
        <Label htmlFor="job">
          {getFieldTranslationByNames("citizenship-account", "career in physics")}
        </Label>
        <Input
          id="job"
          value={state.occupation || ""} 
          onChange={handleJobChange}
          placeholder={getFieldTranslationByNames("citizenship-account", "career in physics")}
          maxLength={25}
        />
      </div>
    </Container>
  );
};

export default EducationsAndJob;
