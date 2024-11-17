import NotifCard from "./NotifCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import ModalSm from "../../Components/Modal/ModalSm";
import { getFieldTranslationByNames } from "../../Services/Utility";
import NoNotification from "./NoNotification";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding-right: 15px;
  height: 100%;
`;
const Container = styled.div`
  height: 77%;
  h4 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    width: fit-content;
    cursor: pointer;
    margin-top: 10px;
  }
`;

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const { Request } = useRequest();

  useEffect(() => {
    Request("notifications").then((response) => {
      setNotifications(response.data.data);
    });
  }, []);

  return (
    <ModalSm title={10449}>
      <Container>
        <h4 onClick={() => setNotifications([])}>
          {getFieldTranslationByNames(10463)}
        </h4>

        <Div>
          {notifications.length === 0 ? (
            <NoNotification />
          ) : (
            notifications.map((notif) => (
              <NotifCard
                setNotifications={setNotifications}
                notifications={notifications}
                key={notif.id}
                id={notif.id}
                data={notif}
              />
            ))
          )}
        </Div>
      </Container>
    </ModalSm>
  );
};

export default Notifications;
