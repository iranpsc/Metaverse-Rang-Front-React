import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";

const Container = styled.div`
  padding-top: 20px;
  padding: 20px;
  padding-right: 15px;
  display: grid;
  direction: ltr;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
  padding-right: 15px;
  overflow-y: auto;
  height: 73%;
  @media (min-width: 1400px) {
    height: 79%;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const AccountTab = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const { Request } = useRequest();

  const [emailChange, setEmailChange] = useState({
    title: "تغییر ایمیل ورود به متاورس",
    warn: "",
    inputs: [
      { id: 1, type: "text", label: "ایمیل جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  });

  const [mobileChange, setMobileChange] = useState({
    title: "تغییر شماره موبایل در سراسر متاورس",
    warn: "",
    inputs: [
      { id: 1, type: "number", label: "شماره تلفن جدید", value: "" },
      { id: 2, type: "number", label: "کد تایید", value: "" },
    ],
  });

  const [passwordChange, setPasswordChange] = useState({
    title: "تغییر رمز ورود به متاورس",
    inputs: [
      { id: 1, type: "number", label: "رمز قدیمی", value: "" },
      { id: 2, type: "number", label: "رمز جدید", value: "" },
    ],
  });

  useEffect(() => {
    Request("settings")
      .then((response) => {
        setSettings(response.data.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(settings).length > 0) {
      setEmailChange((prevState) => ({
        ...prevState,
        warn: `فقط ${settings.email_reset_count} بار می توانید ایمیل خود را عوض کنید`,
      }));

      setMobileChange((prevState) => ({
        ...prevState,
        warn: `فقط ${settings.phone_reset_count} بار می توانید شماره موبایل خود را عوض کنید`,
      }));
    }
  }, [settings]);

  if (loading) {
    return (
      <LoadingContainer>
        <div>Loading...</div>
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <ChangeCard
        title={mobileChange.title}
        warn={mobileChange.warn}
        inputs={mobileChange.inputs}
      />
      <ChangeCard
        title={emailChange.title}
        warn={emailChange.warn}
        inputs={emailChange.inputs}
      />
      <Bank />
      <ChangeCard title={passwordChange.title} inputs={passwordChange.inputs} />
    </Container>
  );
};

export default AccountTab;
