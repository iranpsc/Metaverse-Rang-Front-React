import Button from "../../../../Components/aboutMeTab/Button";
import Title from "../../../../Components/aboutMeTab/Title";
import styled from "styled-components";
import { useGlobalState } from "./GlobalStateProvider";
import { getFieldTranslationByNames } from "../../../../Services/Utility";
import useRequest from "../../../../Services/Hooks/useRequest/index";

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  direction: rtl;
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

  const saveData = async () => {
    const formData = {
      about: state.about,
      educations: state.educations,
      job: state.job,
      hobbies: state.hobbies,
      country: state.country,
      city: state.city,
      memory: state.memory,
      opportunity: state.opportunity,
      prediction2023: state.prediction2023,
      prediction2024: state.prediction2024,
    };
    try {
      const response = await Request("personal-info", HTTP_METHOD.PUT, formData); // استفاده از PUT برای ذخیره اطلاعات
      console.log("Data saved successfully:", formData);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <Header>
      <Text>
        <Title title={getFieldTranslationByNames("citizenship-account", "about me")} />
        <p>
          {getFieldTranslationByNames("citizenship-account", "in this section, write descriptions about yourself so that citizens can get to know you")}
        </p>
      </Text>
      <Button label={getFieldTranslationByNames("citizenship-account", "saved")} fit onclick={saveData} />
    </Header>
  );
};

export default SaveInfo;
