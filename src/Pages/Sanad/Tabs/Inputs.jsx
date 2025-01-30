import { useEffect, useRef, useState, useCallback } from "react";
import { CgDanger } from "react-icons/cg";
import styled from "styled-components";
import { useGlobalState } from "./GlobalVodStateProvider";
import { getFieldTranslationByNames } from "../../../Services/Utility";
import useRequest from "../../../Services/Hooks/useRequest";

const Wrapper = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 20px;

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.h3`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 4px;
`;

const Select = styled.select`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border: 1px solid #454545;
  border-radius: 5px;
  padding: 10px 12px;
  outline: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const Input = styled.input`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border: 1px solid #454545;
  border-radius: 5px;
  padding: 10px 12px;
  outline: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  width: 100%;
  font-size: 16px;
  font-weight: 400;
`;

const CitizenInputWrapper = styled.div`
  margin-top: 20px;
  position: relative;
`;

const SelectedCitizens = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
  position: absolute;
  top: 41px;
  right: 10px;
`;

const SelectedCitizen = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  color: ${(props) => props.theme.colors.newColors.shades.title};
  padding: 4px 8px 4px 12px;
  border-radius: 4px;
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  gap: 4px;
`;

const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  cursor: pointer;
`;

const Dropdown = styled.div`
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  border: 1px solid #454545;
  border-radius: 5px;
  margin-top: 4px;
  max-height: 150px;
  overflow-y: auto;
  position: absolute;
  top: 100px;
  z-index: 50;
  width: 100%;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.newColors.shades[90]};

  &:hover {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.iconBg};
  }
`;

const CitizenWarning = styled.div`
  color: #a0a0ab;
  font-size: 13px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Inputs = () => {
  const options = [
    { id: 1, label: "1", value: "382" },
    { id: 2, label: "1321", value: "citizens_safety" },
    { id: 3, label: "1322", value: "technical_support" },
    { id: 4, label: "1323", value: "investment" },
    { id: 5, label: "1324", value: "inspection" },
    { id: 6, label: "1325", value: "protection" },
    { id: 7, label: "1326", value: "ztb" },
  ];

  const { state, dispatch } = useGlobalState();
  const [selectedCitizens, setSelectedCitizens] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCitizens, setFilteredCitizens] = useState([]);
  const dropdownRef = useRef(null);
  const { Request, HTTP_METHOD } = useRequest();
  const searchTimeout = useRef(null);

  const handleCitizenSelect = useCallback(
    (citizen) => {
      if (
        selectedCitizens.length < 9 &&
        !selectedCitizens.some((selected) => selected.id === citizen.id)
      ) {
        const updatedCitizens = [...selectedCitizens, citizen];
        setSelectedCitizens(updatedCitizens);
        dispatch({ type: "SET_SELECTED_CITIZENS", payload: updatedCitizens }); // ذخیره در کانتکست
      }
      setDropdownOpen(false);
      setSearchTerm("");
    },
    [selectedCitizens, dispatch]
  );

  const removeCitizen = useCallback(
    (citizenId) => {
      const updatedCitizens = selectedCitizens.filter(
        (selected) => selected.id !== citizenId
      );
      setSelectedCitizens(updatedCitizens);
      dispatch({ type: "SET_SELECTED_CITIZENS", payload: updatedCitizens }); // به‌روزرسانی کانتکست
    },
    [selectedCitizens, dispatch]
  );

  const subjectHandler = useCallback(
    (e) => {
      dispatch({ type: "SET_SUBJECT", payload: e.target.value });
    },
    [dispatch]
  );

  const titleHandler = useCallback(
    (e) => {
      const value = e.target.value;
      if (value.length < 201) {
        dispatch({ type: "SET_TITLE", payload: value });
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }
    if (searchTerm && state.subject === "citizen") {
      searchTimeout.current = setTimeout(() => {
        Request("search/users", HTTP_METHOD.POST, { searchTerm })
          .then((response) => {
            setFilteredCitizens(response.data.data);
          })
          .catch(() => setFilteredCitizens([]));
      }, 600);
    } else {
      setFilteredCitizens([]);
    }
  }, [searchTerm, state.subject]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <InputWrapper>
          <Label>{getFieldTranslationByNames("1318")}</Label>
          <Select value={state.subject} onChange={subjectHandler}>
            <option value="">{getFieldTranslationByNames("1320")}</option>
            {options.map((option) => (
              <option value={option.value} key={option.id}>
                {getFieldTranslationByNames(option.label)}
              </option>
            ))}
          </Select>
        </InputWrapper>
        <InputWrapper>
          <Label>{getFieldTranslationByNames("1319")}</Label>
          <Input
            type="text"
            placeholder={getFieldTranslationByNames("1319")}
            value={state.title}
            onChange={titleHandler}
          />
        </InputWrapper>
      </Container>

      {state.subject === "citizen" && (
        <CitizenInputWrapper ref={dropdownRef}>
          <Label>{getFieldTranslationByNames("1329")}</Label>
          <SelectedCitizens>
            {selectedCitizens.map((citizen) => (
              <SelectedCitizen key={citizen.id}>
                <RemoveButton onClick={() => removeCitizen(citizen.id)}>
                  X
                </RemoveButton>
                {citizen.name}
              </SelectedCitizen>
            ))}
          </SelectedCitizens>
          <Input
            as="textarea"
            rows={2}
            placeholder={
              selectedCitizens.length === 0
                ? getFieldTranslationByNames("1329")
                : ""
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setDropdownOpen(true)}
          />
          {isDropdownOpen && (
            <Dropdown>
              {filteredCitizens.length > 0 ? (
                filteredCitizens.map((citizen) => (
                  <DropdownItem
                    key={citizen.id}
                    onClick={() => handleCitizenSelect(citizen)}
                  >
                    {citizen.name}
                  </DropdownItem>
                ))
              ) : (
                <DropdownItem>
                  {getFieldTranslationByNames("1331")}
                </DropdownItem>
              )}
            </Dropdown>
          )}
          <CitizenWarning>
            <CgDanger size={20} />
            {getFieldTranslationByNames("1330")}
          </CitizenWarning>
        </CitizenInputWrapper>
      )}
    </Wrapper>
  );
};

export default Inputs;
