import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding-top: 20px;
  padding: 20px;
  padding-right: 15px;
  display: grid;

  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
  padding-right: 15px;
  overflow-y: auto;
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
    title: 7824,
    warn: "",
    inputs: [
      { id: 1, type: "text", label: 7852, value: "" },
      { id: 2, type: "number", label: 7859, value: "" },
    ],
  });

  const [mobileChange, setMobileChange] = useState({
    title: 7838,
    warn: "",
    inputs: [
      { id: 1, type: "number", label: 7880, value: "" },
      { id: 2, type: "number", label: 7887, value: "" },
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
        warn: `${settings.email_reset_count}  ${getFieldTranslationByNames(
          15055
        )}`,
      }));

      setMobileChange((prevState) => ({
        ...prevState,
        warn: ` ${settings.phone_reset_count}  ${getFieldTranslationByNames(
          15055
        )}`,
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
    </Container>
  );
};

export default AccountTab;
