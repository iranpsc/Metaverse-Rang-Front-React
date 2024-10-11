import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { useEffect } from "react";
import { getFieldTranslationByNames, getFieldsByTabName } from "../../../../Services/Utility"; 
import useRequest from "../../../../Services/Hooks/useRequest/index"; 

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
  const { Request } = useRequest();
  const educationFields = getFieldsByTabName("misc", "education");

  // هنگام بارگذاری اولیه، اطلاعات را از localStorage دریافت می‌کنیم
  useEffect(() => {
    const savedOccupation = localStorage.getItem("occupation");
    const savedEducation = localStorage.getItem("education");

    // اگر اطلاعات در localStorage موجود بود، از آن استفاده می‌کنیم
    if (savedOccupation && savedEducation) {
      dispatch({ type: "SET_OCCUPATION", payload: savedOccupation });
      dispatch({ type: "SET_EDUCATION", payload: savedEducation });
    } else {
      // اگر اطلاعات در state یا localStorage نبود، از API دریافت می‌شود
      if (!state.occupation || !state.education) {
        const fetchData = async () => {
          try {
            const response = await Request("personal-info", "GET");
            if (response.data && response.data.data) {
              const data = response.data.data;

              if (data.occupation) {
                dispatch({ type: "SET_OCCUPATION", payload: data.occupation });
                localStorage.setItem("occupation", data.occupation); // ذخیره در localStorage
              }
              if (data.education) {
                dispatch({ type: "SET_EDUCATION", payload: data.education });
                localStorage.setItem("education", data.education); // ذخیره در localStorage
              }
            }
          } catch (error) {
            console.error("Error fetching data from API:", error);
          }
        };

        fetchData(); // فقط زمانی fetchData فراخوانی می‌شود که occupation یا education موجود نباشد
      }
    }
  }, []); // وابستگی‌ها به [] محدود شده تا useEffect فقط یکبار اجرا شود

  const handleEducationChange = (e) => {
    const newEducation = e.target.value;
    dispatch({ type: "SET_EDUCATION", payload: newEducation });
    localStorage.setItem("education", newEducation); // ذخیره تغییرات در localStorage
  };

  const handleJobChange = (e) => {
    const newOccupation = e.target.value;
    dispatch({ type: "SET_OCCUPATION", payload: newOccupation });
    localStorage.setItem("occupation", newOccupation); // ذخیره تغییرات در localStorage
  };

  return (
    <Container>
      <div>
        <Label htmlFor="education">
          {getFieldTranslationByNames("citizenship-account", "education")}
        </Label>
        <Select
          id="education"
          value={state.education || ""} // استفاده از state یا مقدار پیش‌فرض
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
          value={state.occupation || ""} // استفاده از state یا مقدار پیش‌فرض
          onChange={handleJobChange}
          placeholder={getFieldTranslationByNames("citizenship-account", "career in physics")}
        />
      </div>
    </Container>
  );
};

export default EducationsAndJob;
