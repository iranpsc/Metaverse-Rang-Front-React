import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Button from "../../../../Components/Button";
import OnOff from "../OnOff";
import { AlertContext } from "../../../../services/Reducers/AlertContext";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  padding-right: 15px;
  height: 74%;
  overflow-y: auto;

  @media (min-width: 930px) {
    height: 75%;
  }
  @media (min-width: 1300px) {
    height: auto;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 5px;
  padding: 10px;
  p {
    font-weight: 500;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 16px;
    }
  }
`;

const Settings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
`;

const settings = [
  {
    id: 1,
    translationId: "620",
    key: "transactions_sms",
  },
  {
    id: 2,
    translationId: "615",
    key: "announcements_sms",
  },
  {
    id: 3,
    translationId: "621",
    key: "transactions_email",
  },
  {
    id: 4,
    translationId: "616",
    key: "announcements_email",
  },
  { id: 5, translationId: "622", key: "trades_sms" },
  { id: 6, translationId: "617", key: "reports_sms" },
  { id: 7, translationId: "623", key: "trades_email" },
  { id: 8, translationId: "618", key: "reports_email" },
  {
    id: 9,
    translationId: "623",
    key: "login_verification_sms",
  },
  {
    id: 10,
    translationId: "619",
    key: "login_verification_email",
  },
];

const PublicTab = () => {
  const { alert, setAlert } = useContext(AlertContext);
  const { Request, HTTP_METHOD } = useRequest();
  const [generalSettings, setGeneralSettings] = useState({
    announcements_sms: 0,
    announcements_email: 0,
    reports_sms: 0,
    reports_email: 0,
    login_verification_sms: 0,
    login_verification_email: 0,
    transactions_sms: 0,
    transactions_email: 0,
    trades_sms: 0,
    trades_email: 0,
  });

  useEffect(() => {
    Request("general-settings").then((response) => {
      setGeneralSettings({ ...response.data.data });
    });
  }, []);

  const handleToggleChange = (key, value) => {
    setGeneralSettings((prevState) => ({
      ...prevState,
      [key]: value ? 1 : 0,
    }));
  };

  const handleSubmit = () => {
    const data = Object.fromEntries(
      Object.entries(generalSettings).filter(([key]) => !key.includes("id"))
    );
    Request(`general-settings/${generalSettings.id}`, HTTP_METHOD.PUT, data)
      .then(() => {
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("Failed to update settings:", error);
      });
  };

  return (
    <Container>
      {alert && <Alert type="success" text="به روزرسانی با موفقیت انجام شد" />}
      <Settings>
        {settings.map((setting) => (
          <Wrapper key={setting.id}>
            <p>{getFieldTranslationByNames(setting?.translationId)}</p>
            <OnOff
              label={setting?.label}
              isOn={!!generalSettings[setting.key]}
              onToggle={(value) => handleToggleChange(setting.key, value)}
            />
          </Wrapper>
        ))}
      </Settings>

      <Button label={getFieldTranslationByNames("411")} onclick={handleSubmit} />
    </Container>
  );
};

export default PublicTab;
