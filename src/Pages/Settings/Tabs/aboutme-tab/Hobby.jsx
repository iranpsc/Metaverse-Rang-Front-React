import brush from "../../../../Assets/images/settings/brush.png";
import bubble from "../../../../Assets/images/settings/bubble.png";
import clock from "../../../../Assets/images/settings/clock.png";
import coffee from "../../../../Assets/images/settings/coffee.png";
import { convertToPersian } from "../../../../Services/Utility/index";
import cpu from "../../../../Assets/images/settings/cpu.png";
import dollar from "../../../../Assets/images/settings/dollar-circle.png";
import ghost from "../../../../Assets/images/settings/ghost.png";
import lang from "../../../../Assets/images/settings/language-square.png";
import layer from "../../../../Assets/images/settings/layer.png";
import music from "../../../../Assets/images/settings/musicnote.png";
import note from "../../../../Assets/images/settings/note-2.png";
import pet from "../../../../Assets/images/settings/pet.png";
import styled from "styled-components";
import tree from "../../../../Assets/images/settings/tree.png";
import { useGlobalState } from "./aboutGlobalStateProvider";
import weight from "../../../../Assets/images/settings/weight.png";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import { useEffect, useState } from "react";
const Container = styled.div`
  margin-top: 20px;
`;

const Label = styled.label`
  color: ${(props) => props.theme.colors.newColors.shades.title};
  display: block;
  font-weight: 600;
`;

const CheckboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  @media (min-width: 944px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1202px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1452px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h4 {
    color: ${(props) => (props.limitReached ? "red" : "#a0a0ab")};
    font-size: 14px;
    font-weight: 400;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #ffffff;
  gap: 8px;

  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
    white-space: nowrap;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #dedee9;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    position: relative;
    transition: background-color 0.3s ease;

    &:checked {
      background-color: ${(props) => props.theme.colors.primary};
      border: 2px solid transparent;

      &::after {
        content: "✓";
        font-size: 16px;
        font-weight: 600;
        color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Hobby = () => {
  const { state, dispatch } = useGlobalState();
  const maxHobbies = 5;
  const selectedHobbiesCount = Object.keys(state.hobbies || {}).filter(
    (key) => state.hobbies[key] === 1
  ).length;
  const remainingHobbies = maxHobbies - selectedHobbiesCount;
  const limitReached = selectedHobbiesCount >= maxHobbies;
  const localizedRemainingHobbies = convertToPersian(remainingHobbies);
  const [hobbyValue, setHobbyValue] = useState(state.hobbies || {});

  useEffect(() => {
    if (state.hobbies) {
      setHobbyValue(state.hobbies);
    }
  }, [state.hobbies]);

  const handleHobbyChange = (hobbyKey) => {
    const updatedHobbies = { ...hobbyValue };
    updatedHobbies[hobbyKey] = updatedHobbies[hobbyKey] === 1 ? 0 : 1;
    setHobbyValue(updatedHobbies);
    dispatch({ type: "SET_HOBBIES", payload: updatedHobbies });
  };

  const hobbies = [
    { id: 1, key: "music", name: "instruments and music", icon: music },
    { id: 2, key: "sport_health", name: "exercise and health", icon: weight },
    { id: 3, key: "art", name: "meta art", icon: brush },
    {
      id: 4,
      key: "language_culture",
      name: "language and culture",
      icon: lang,
    },
    { id: 5, key: "philosophy", name: "philosophy", icon: note },
    { id: 6, key: "animals_nature", name: "animals and nature", icon: pet },
    { id: 7, key: "aliens", name: "space creatures", icon: ghost },
    { id: 8, key: "food_cooking", name: "food and cooking", icon: coffee },
    {
      id: 9,
      key: "travel_leature",
      name: "travel and entertainment",
      icon: tree,
    },
    {
      id: 10,
      key: "manufacturing",
      name: "construction and production",
      icon: layer,
    },
    {
      id: 11,
      key: "science_technology",
      name: "science and technology",
      icon: cpu,
    },
    { id: 12, key: "space_time", name: "space and time", icon: clock },
    { id: 13, key: "history", name: "history and civilization", icon: bubble },
    {
      id: 14,
      key: "politics_economy",
      name: "politics and economics",
      icon: dollar,
    },
  ];

  return (
    <Container>
      <Div limitReached={limitReached}>
        <Label>
          {getFieldTranslationByNames("citizenship-account", "interests")}
        </Label>
        <h4>{`${localizedRemainingHobbies} ${getFieldTranslationByNames(
          "citizenship-account",
          "choose items"
        )}`}</h4>
      </Div>
      <CheckboxContainer>
        {hobbies.map((hobby) => (
          <CheckboxLabel key={hobby.id}>
            <input
              type="checkbox"
              checked={hobbyValue[hobby.key] === 1}
              onChange={() => handleHobbyChange(hobby.key)}
              disabled={hobbyValue[hobby.key] === 0 && limitReached}
            />
            <div>
              <img src={hobby.icon} alt={hobby.name} width={24} height={24} />
              <span>
                {getFieldTranslationByNames("citizenship-account", hobby.name)}
              </span>
            </div>
          </CheckboxLabel>
        ))}
      </CheckboxContainer>
    </Container>
  );
};

export default Hobby;
