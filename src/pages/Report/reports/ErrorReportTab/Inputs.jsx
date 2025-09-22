import styled from "styled-components";
import { useReportsGlobalState } from "../GlobalReportStateProvider";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  margin-top: 20px;
`;

const Subject = styled.div`
  select {
    background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Label = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
  white-space: nowrap;
`;

const Title = styled.div`
  input {
    background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: #84858f;
    width: 94%;
    font-size: 16px;
    font-weight: 400;
    @media (min-width: 1366px) {
      width: 96.5%;
    }
  }
`;

const Inputs = () => {
  const options = [
    { id: 1, label: getFieldTranslationByNames("1385"), value: "displayError" },
    { id: 2, label: getFieldTranslationByNames("15"), value: "spellingError" },
    { id: 3, label: getFieldTranslationByNames("16"), value: "codingError" },
    { id: 4, label: getFieldTranslationByNames("17"), value: "FPSError" },
    { id: 5, label: getFieldTranslationByNames("18"), value: "disrespect" },
  ];

  const { state, dispatch } = useReportsGlobalState();

  const subjectHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_SUBJECT", payload: value });
  };

  const titleHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_TITLE", payload: value });
  };

  return (
    <Container>
      <Subject>
        <Label>{getFieldTranslationByNames("24")}</Label>
        <select value={state.subject} onChange={(e) => subjectHandler(e)}>
          <option value="">{getFieldTranslationByNames("24")}</option>
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </Subject>
      <Title>
        <Label>{getFieldTranslationByNames("19")}</Label>
        <input
          type="text"
          placeholder={getFieldTranslationByNames("19")}
          value={state.title}
          onChange={(e) => titleHandler(e)}
          maxLength={130} // محدودیت 200 کاراکتر
        />
      </Title>
    </Container>
  );
};

export default Inputs;
