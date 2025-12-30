import Bank from "./Bank";
import ChangeCard from "./ChangeCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import Container from "../../../../components/Common/Container"; // همون کانتینر اصلی

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 20px;
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

  const [mobileChange, setMobileChange] = useState({
    title: "625",
    warn: "",
    inputs: [
      { id: 1, type: "number", label: "631", value: "" },
      { id: 2, type: "number", label: "34", value: "" },
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
      setMobileChange((prevState) => ({
        ...prevState,
        warn: ` ${settings.phone_reset_count}  ${getFieldTranslationByNames(
          "1364"
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
    <GridContainer>
      <ChangeCard
        title={mobileChange.title}
        warn={mobileChange.warn}
        inputs={mobileChange.inputs}
      />
      <Bank />
    </GridContainer>
  );
};

export default AccountTab;
