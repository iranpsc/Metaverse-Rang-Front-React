import Dropdown from "./Dropdown";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { useEffect, useState } from "react";
import { getFieldTranslationByNames, getFieldsByTabName ,useRTL } from "../../../../Services/Utility";
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction:  ${(props) => (props.isRTL ? "rtl" : "ltr")}; 
  text-align: ${(props) => (props.isRTL ? "right" : "left")};

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
`;const CountryCity = () => {
  const { state, dispatch } = useGlobalState();
  const [citiesFields, setCitiesFields] = useState([]);
  const [countriesFields, setCountriesFields] = useState([]);
  const [languagesFields, setLanguagesFields] = useState([]);
  const [isFieldsLoaded, setIsFieldsLoaded] = useState(false);
  const isRTL = useRTL();


  useEffect(() => {
 
    if (!isFieldsLoaded) {
      const loadFields = () => {
        const cities = getFieldsByTabName("misc", "iranian-cities");
        const countries = getFieldsByTabName("misc", "countries");
        const languages = getFieldsByTabName("misc", "languages");

        setCitiesFields(cities);
        setCountriesFields(countries);
        setLanguagesFields(languages);

        setIsFieldsLoaded(true);
      };

      loadFields();
    }
  }, [isFieldsLoaded]);

  const getCityTranslation = () => {
    if (!isFieldsLoaded) return "";
    const selectedCity = citiesFields.find(field => field.name.trim().toLowerCase() === state.loved_city?.trim().toLowerCase());
    return selectedCity ? selectedCity.translation : "";
  };

  const getCountryTranslation = () => {
    if (!isFieldsLoaded) return "";
    const selectedCountry = countriesFields.find(field => field.name.trim().toLowerCase() === state.loved_country?.trim().toLowerCase());
    return selectedCountry ? selectedCountry.translation : "";
  };

  const getLanguageTranslation = () => {
    if (!isFieldsLoaded) return "";
    const selectedLanguage = languagesFields.find(field => field.name.trim().toLowerCase() === state.loved_language?.trim().toLowerCase());
    return selectedLanguage ? selectedLanguage.translation : "";
  };

  const handleCityChange = (translation) => {
    const selectedCity = citiesFields.find(field => field.translation === translation);
    if (selectedCity) {
      dispatch({ type: "SET_CITY", payload: selectedCity.name });
    }
  };

  const handleCountryChange = (translation) => {
    const selectedCountry = countriesFields.find(field => field.translation === translation);
    if (selectedCountry) {
      dispatch({ type: "SET_COUNTRY", payload: selectedCountry.name });
    }
  };

  const handleLanguageChange = (translation) => {
    const selectedLanguage = languagesFields.find(field => field.translation === translation);
    if (selectedLanguage) {
      dispatch({ type: "SET_LANGUAGE", payload: selectedLanguage.name });
    }
  };

  return (
    <Container isRTL={isRTL}> 
      <SelectContainer>
        <Label>{getFieldTranslationByNames("citizenship-account", "the city you love so much")}</Label>
        <Dropdown
          options={citiesFields.map(field => field.translation)}
          value={getCityTranslation()}
          label={getFieldTranslationByNames("citizenship-account", "the city you love so much")}
          onChange={handleCityChange}
        />
      </SelectContainer>

      <SelectContainer>
        <Label>{getFieldTranslationByNames("citizenship-account", "country you love very much")}</Label>
        <Dropdown
          options={countriesFields.map(field => field.translation)}
          value={getCountryTranslation()}
          label={getFieldTranslationByNames("citizenship-account", "country you love very much")}
          onChange={handleCountryChange}
        />
      </SelectContainer>

      <SelectContainer>
        <Label>{getFieldTranslationByNames("citizenship-account", "language you like very much")}</Label>
        <Dropdown
          options={languagesFields.map(field => field.translation)}
          value={getLanguageTranslation()}
          label={getFieldTranslationByNames("citizenship-account", "language you like very much")}
          onChange={handleLanguageChange}
        />
      </SelectContainer>
    </Container>
  );
};

export default CountryCity;
