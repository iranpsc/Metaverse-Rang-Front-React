import { useEffect, useRef, useState } from "react";

import { CgDanger } from "react-icons/cg";
import styled from "styled-components";
import { useGlobalState } from "./GlobalVodStateProvider";
import { getFieldTranslationByNames } from "../../../Services/Utility";

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

const Subject = styled.div`
  select {
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
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 91%;
    font-size: 16px;
    font-weight: 400;
    @media (min-width: 1366px) {
      width: 96.5%;
    }
  }
`;

const CitizenInput = styled.div`
  margin-top: 20px;

  position: relative;

  .selected-citizens {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
    position: absolute;
    top: 41px;
    right: 10px;
  }

  .selected-citizen {
    background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
    color: ${(props) => props.theme.colors.newColors.shades.title};
    padding: 4px 8px 4px 12px;
    border-radius: 4px;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    align-items: center;
    gap: 4px;
  }

  .remove-btn {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    cursor: pointer;
  }

  .dropdown {
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
  }

  .dropdown-item {
    padding: 8px 12px;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.newColors.shades[90]};
  }

  .dropdown-item:hover {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.iconBg};
  }

  textarea {
    background-color: ${(props) =>
      props.theme.colors.newColors.otherColors.inputBg};
    border: 1px solid #454545;
    border-radius: 5px;
    padding: 10px 12px;
    outline: none;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    width: 96%;
    height: 75px;
    font-size: 16px;
    font-weight: 400;
    resize: none;
    @media (min-width: 1366px) {
      width: 98%;
    }
  }
`;

const Inputs = () => {
  const options = [
    { id: 1, label: "citizen", value: "citizen" },
    { id: 2, label: "security of citizens", value: "security" },
    { id: 3, label: "technical support", value: "support" },
    { id: 4, label: "investment", value: "invest" },
    { id: 5, label: "inspection", value: "review" },
    { id: 6, label: "protection", value: "guard" },
    { id: 7, label: "general management of z.t.b", value: "management" },
  ];
  const citizens = [
    { id: 1, name: "محمد عباسی" },
    { id: 2, name: "محمد غازی" },
    { id: 3, name: "محمد مسیری" },
    { id: 4, name: "علی حسینی" },
    { id: 5, name: "علیرضا رضایی" },
    { id: 6, name: "رضا صالحی" },
    { id: 7, name: "سارا توکلی" },
    { id: 8, name: "سعید مرتضوی" },
    { id: 9, name: "نرگس اسدی" },
    { id: 10, name: "فاطمه موسوی" },
  ];

  const { state, dispatch } = useGlobalState();
  const [selectedCitizens, setSelectedCitizens] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const handleCitizenSelect = (citizen) => {
    if (selectedCitizens.length < 9 && !selectedCitizens.includes(citizen)) {
      setSelectedCitizens([...selectedCitizens, citizen]);
    }
    setDropdownOpen(false);
    setSearchTerm("");
  };

  const removeCitizen = (citizen) => {
    setSelectedCitizens(
      selectedCitizens.filter((selected) => selected !== citizen)
    );
  };

  const subjectHandler = (e) => {
    const value = e.target.value;
    dispatch({ type: "SET_SUBJECT", payload: value });
  };

  const titleHandler = (e) => {
    const value = e.target.value;
    if (value.length < 201) {
      dispatch({ type: "SET_TITLE", payload: value });
    }
  };

  const filteredCitizens = citizens.filter(
    (citizen) =>
      citizen.name.includes(searchTerm) &&
      !selectedCitizens.some((selected) => selected.id === citizen.id)
  );

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
        <Subject>
          <Label>
            {getFieldTranslationByNames("send-vod", "send the document to")}
          </Label>
          <select value={state.subject} onChange={(e) => subjectHandler(e)}>
            <option value="">
              {" "}
              {getFieldTranslationByNames(
                "send-vod",
                "select the document category"
              )}
            </option>
            {options.map((option) => (
              <option value={option.value} key={option.id}>
                {getFieldTranslationByNames("send-vod", option.label)}
              </option>
            ))}
          </select>
        </Subject>
        <Title>
          <Label>
            {" "}
            {getFieldTranslationByNames("send-vod", "document title")}
          </Label>
          <input
            type="text"
            placeholder={getFieldTranslationByNames(
              "send-vod",
              "document title"
            )}
            value={state.title}
            onChange={(e) => titleHandler(e)}
          />
        </Title>
      </Container>

      {state.subject === "citizen" && (
        <CitizenInput ref={dropdownRef}>
          <Label>
            {" "}
            {getFieldTranslationByNames(
              "send-vod",
              "the citizen or citizens in question"
            )}
          </Label>

          <div className="selected-citizens">
            {selectedCitizens.map((citizen) => (
              <div key={citizen.id} className="selected-citizen">
                <button
                  className="remove-btn"
                  onClick={() => removeCitizen(citizen)}
                >
                  X
                </button>
                {citizen.name}
              </div>
            ))}
          </div>

          <textarea
            rows={2}
            placeholder={`${
              selectedCitizens.length === 0 &&
              getFieldTranslationByNames(
                "send-vod",
                "the citizen or citizens in question"
              )
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
            onFocus={() => setDropdownOpen(true)}
          />

          {isDropdownOpen && (
            <div className="dropdown">
              {filteredCitizens.length > 0 ? (
                filteredCitizens.map((option) => (
                  <div
                    key={option.id}
                    className="dropdown-item"
                    onClick={() => handleCitizenSelect(option)}
                  >
                    {option.name}
                  </div>
                ))
              ) : (
                <div className="dropdown-item">
                  {" "}
                  {getFieldTranslationByNames(
                    "send-vod",
                    "citizenship not found"
                  )}
                </div>
              )}
            </div>
          )}

          <div
            style={{
              color: "#A0A0AB",
              fontSize: "13px",
              fontWeight: "400",
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
          >
            <CgDanger size={20} />{" "}
            {getFieldTranslationByNames(
              "send-vod",
              "the maximum number of citizens allowed is 9 people"
            )}
          </div>
        </CitizenInput>
      )}
    </Wrapper>
  );
};

export default Inputs;
