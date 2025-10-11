import Dropdown from "./Dropdown";
import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { useEffect, useState } from "react";
import { getFieldTranslationByNames, getFieldsByTabName,getFieldsByTabNameReverse } from "../../../../services/Utility";
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
     padding: 40px 0;

  justify-content: space-between;
  @media (min-width: 1366px) {
    flex-direction: row;
  }
`;

const SelectContainer = styled.div`
  flex: 1;
  &:last-child {
    margin-right: 0;
  }
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
`;


const CountryCity = () => {
  const { state, dispatch } = useGlobalState();
  
  const [fields, setFields] = useState({
    cities: [],
    countries: [],
    languages: []
  });
   const [fieldsReverse, setFieldsReverse] = useState({
    cities: [],
    countries: [],
    languages: []
  });

  const [isFieldsLoaded, setIsFieldsLoaded] = useState(false);

  useEffect(() => {
    if (!isFieldsLoaded) {
      const loadFields = () => {
        // زبان نرمال
        const normalFields = {
          cities: getFieldsByTabName("misc", "iranian-cities"),
          countries: getFieldsByTabName("misc", "countries"),
          languages: getFieldsByTabName("misc", "languages")
        };

        // زبان برعکس
        const reversedFields = {
          cities: getFieldsByTabNameReverse("misc", "iranian-cities"),
          countries: getFieldsByTabNameReverse("misc", "countries"),
          languages: getFieldsByTabNameReverse("misc", "languages")
        };

        setFields(normalFields);
        setFieldsReverse(reversedFields);
        setIsFieldsLoaded(true);

      };

      loadFields();
    }
  }, [isFieldsLoaded]);
const isPersianText = (text) => /[\u0600-\u06FF]/.test(text);

const getTranslation = (fieldsType, stateValue) => {
  if (!isFieldsLoaded || !stateValue) return "";

  const normalizedValue = stateValue.trim().toLowerCase();
  const isPersian = isPersianText(stateValue);

  const primaryFields = isPersian ? fields[fieldsType] : fieldsReverse[fieldsType];
  const secondaryFields = isPersian ? fieldsReverse[fieldsType] : fields[fieldsType];

  const selectedField = primaryFields.find(
    (field) => field?.translation?.trim().toLowerCase() === normalizedValue
  );

  if (selectedField) return getFieldTranslationByNames(selectedField.unique_id);

  const reversedField = secondaryFields.find(
    (field) => field?.translation?.trim().toLowerCase() === normalizedValue
  );

  if (reversedField) return getFieldTranslationByNames(reversedField.unique_id);

  return "";
};



 const handleFieldChange = (fieldsType, translation, actionType) => {
  const selectedField = fields[fieldsType].find(
    (field) => field?.translation === translation
  );
  if (selectedField) {
    dispatch({ type: actionType, payload: selectedField.translation });
  }
};

  const options = [
    {
      type: "cities",
      translationId: "797",
      stateValue: state.city,
      actionType: "SET_CITY"
    },
    {
      type: "countries",
      translationId: "798",
      stateValue: state.country,
      actionType: "SET_COUNTRY"
    },
    {
      type: "languages",
      translationId: "799",
      stateValue: state.language,
      actionType: "SET_LANGUAGE"
    }
  ];
  useEffect(() => {
  console.log("=== STATE UPDATED ===");

  options.forEach((option) => {
    const translation = getTranslation(option.type, option.stateValue);

    console.log(`🔹 Option type: ${option.type}`);
    console.log(`   └─ stateValue: "${option.stateValue}"`);
    console.log(`   └─ translation result: "${translation}"`);
  });
}, [state]);
// فرض: fields ساختاری شبیه این داره
// fields = { cities: [...], countries: [...], languages: [...] }



  return (
    <Container>
      {options.map((option) => (
        <SelectContainer key={option.type}>
          <Label>{getFieldTranslationByNames(option.translationId)}</Label>
          <Dropdown
            options={fields[option.type].map((field) => field.translation)}
            value={getTranslation(option.type, option.stateValue)}
            label={getFieldTranslationByNames(option.translationId)}
            onChange={(translation) => handleFieldChange(option.type, translation, option.actionType)}
          />
        </SelectContainer>
      ))}
    </Container>
  );
};

export default CountryCity;
