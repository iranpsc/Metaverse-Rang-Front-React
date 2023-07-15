import ChangePassword from "./Sections/ChangePassword";
import Variable from "./Sections/Variable";
import ChangeEmail from "./Sections/ChangeEmail";
import ChangePhone from "./Sections/ChangePhone";

import {
  Container,
  ContainerBox,
} from "../../Styles";
import { useEffect, useState } from "react";
import useRequest from "../../../../Services/Hooks/useRequest";

export default function AccountSetting() {
  const [settings, setSettings] = useState({});
  const { Request } = useRequest();

  useEffect(() => {
    Request('settings').then(response => {
      setSettings(response.data.data);
    })
 
  }, [])

  return (
    <Container>
      <ContainerBox>
        <ChangePassword />
        <Variable settings={settings}/>
      </ContainerBox>

      <ContainerBox style={{ overflowY: 'scroll' }}>
        <ChangeEmail settings={settings}/>
        <ChangePhone settings={settings}/>
      </ContainerBox>
    </Container>
  );
}
