import Button from "../../../../Components/Button";
import Title from "../../../../Components/Title";
import styled from "styled-components";
import { useGlobalState } from "./aboutGlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import useRequest from "../../../../Services/Hooks/useRequest/index";
import {  useState } from "react";
import Alert from "../../../../Components/Alert/Alert";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;
const Text = styled.div`
  p {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
`;

const SaveInfo = () => {
  const { Request, HTTP_METHOD } = useRequest();
  const { state } = useGlobalState();
  const [successMessage, setSuccessMessage] = useState(false); 


  const saveData = async () => {
    const formData = {
      about: state.about,
      education: state.education,
      occupation: state.occupation,
      passions: state.hobbies,
      loved_country: state.loved_country,
      loved_city: state.loved_city,
      loved_language: state.loved_language,
      memory: state.memory,
      problem_solving: state.opportunity,
      prediction: state.prediction,
    };
    try {
       await Request("personal-info", HTTP_METHOD.PUT, formData); 
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false); 
      }, 3000);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <>
      {successMessage && (
        <Alert type="success" text={getFieldTranslationByNames("citizenship-account", "your information has been successfully saved")} />
      )}

      <Header>
        <Text>
          <Title title={getFieldTranslationByNames("citizenship-account", "about me")} />
          <p>
            {getFieldTranslationByNames("citizenship-account", "in this section, write descriptions about yourself so that citizens can get to know you")}
          </p>
        </Text>
        <Button label={getFieldTranslationByNames("citizenship-account", "saved")} fit onclick={saveData} />
      </Header>
    </>
  );
};

export default SaveInfo;
