import Dropdown from "./Dropdown";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { useEffect, useState } from "react";
import { getFieldTranslationByNames, getFieldsByTabName } from "../../../../Services/Utility";
import useRequest from "../../../../Services/Hooks/useRequest/index"; 

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  direction: rtl;
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
  const { Request } = useRequest(); 
  const [citiesFields, setCitiesFields] = useState([]);
  const [countriesFields, setCountriesFields] = useState([]);
  const [languagesFields, setLanguagesFields] = useState([]);
  const [isFieldsLoaded, setIsFieldsLoaded] = useState(false);

  useEffect(() => {
    // بررسی می‌کنیم که اگر در localStorage داده‌ای وجود داشته باشد یا state تنظیم شده باشد، درخواست به API ارسال نشود
    const savedCity = localStorage.getItem("loved_city");
    const savedCountry = localStorage.getItem("loved_country");
    const savedLanguage = localStorage.getItem("loved_language");

    if (!state.loved_city && !state.loved_country && !state.loved_language && !savedCity && !savedCountry && !savedLanguage) {
      const fetchData = async () => {
        try {
          const response = await Request("personal-info", "GET");
          if (response.data && response.data.data) {
            const data = response.data.data;
            const lovedCity = data.loved_city || "";
            const lovedCountry = data.loved_country || "";
            const lovedLanguage = data.loved_language || "";

            // فقط زمانی dispatch می‌کنیم که داده‌های جدید دریافت شوند
            dispatch({ type: "SET_CITY", payload: lovedCity });
            dispatch({ type: "SET_COUNTRY", payload: lovedCountry });
            dispatch({ type: "SET_LANGUAGE", payload: lovedLanguage });

            // ذخیره در localStorage
            localStorage.setItem("loved_city", lovedCity);
            localStorage.setItem("loved_country", lovedCountry);
            localStorage.setItem("loved_language", lovedLanguage);
          }
        } catch (error) {
          console.error("Error fetching data from API:", error);
        }
      };

      fetchData();
    } else {
      // اگر داده در localStorage موجود باشد، آنها را در state قرار می‌دهیم
      if (!state.loved_city && savedCity) {
        dispatch({ type: "SET_CITY", payload: savedCity });
      }
      if (!state.loved_country && savedCountry) {
        dispatch({ type: "SET_COUNTRY", payload: savedCountry });
      }
      if (!state.loved_language && savedLanguage) {
        dispatch({ type: "SET_LANGUAGE", payload: savedLanguage });
      }
    }

    // دریافت داده‌های مورد نیاز از API (لیست شهرها، کشورها و زبان‌ها)
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
  }, [dispatch, Request, state.loved_city, state.loved_country, state.loved_language, isFieldsLoaded]);

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
      localStorage.setItem("loved_city", selectedCity.name); // ذخیره در localStorage
    }
  };

  const handleCountryChange = (translation) => {
    const selectedCountry = countriesFields.find(field => field.translation === translation);
    if (selectedCountry) {
      dispatch({ type: "SET_COUNTRY", payload: selectedCountry.name });
      localStorage.setItem("loved_country", selectedCountry.name); // ذخیره در localStorage
    }
  };

  const handleLanguageChange = (translation) => {
    const selectedLanguage = languagesFields.find(field => field.translation === translation);
    if (selectedLanguage) {
      dispatch({ type: "SET_LANGUAGE", payload: selectedLanguage.name });
      localStorage.setItem("loved_language", selectedLanguage.name); // ذخیره در localStorage
    }
  };

  return (
    <Container>
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
