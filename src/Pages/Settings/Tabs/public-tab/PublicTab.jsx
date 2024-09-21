import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import Alert from "../../../../Components/Alert/Alert";
import Button from "../../../../Components/Button";
import OnOff from "../OnOff";
import { AlertContext } from "../../../../Services/Reducers/AlertContext";
import useRequest from "../../../../Services/Hooks/useRequest";

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
  direction: rtl;
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
  { id: 1, label: "ارسال پیامک تسویه حساب تراکنش ها", key: "transactions_sms" },
  { id: 2, label: "ارسال پیامک اطلاعیه های متاورس", key: "announcements_sms" },
  {
    id: 3,
    label: "ارسال ایمیل تسویه حساب تراکنش ها",
    key: "transactions_email",
  },
  {
    id: 4,
    label: "ارسال ایمیل اطلاعیه های متاورس",
    key: "announcements_email",
  },
  { id: 5, label: "ارسال پیامک تایید خرید", key: "trades_sms" },
  { id: 6, label: "ارسال پیامک تذکر ارسال شده", key: "reports_sms" },
  { id: 7, label: "ارسال ایمیل تایید خرید", key: "trades_email" },
  { id: 8, label: "ارسال ایمیل تذکر ارسال شده", key: "reports_email" },
  {
    id: 9,
    label: "ارسال پیامک تایید برای ورود به حساب",
    key: "login_verification_sms",
  },
  {
    id: 10,
    label: "ارسال ایمیل تایید برای ورود به متاورس",
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
            <p>{setting.label}</p>
            <OnOff
              label={setting?.label}
              isOn={!!generalSettings[setting.key]}
              onToggle={(value) => handleToggleChange(setting.key, value)}
            />
          </Wrapper>
        ))}
      </Settings>
      <div dir="rtl">
        <Button label="بروزرسانی" onclick={handleSubmit} />
      </div>
    </Container>
  );
};

export default PublicTab;
