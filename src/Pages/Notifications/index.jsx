import NotifCard from "./NotifCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../Services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import ModalSm from "../../Components/Modal/ModalSm";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  padding-right: 15px;
  height: 220px;
  @media (min-width: 1000px) {
    height: 300px;
  }
`;
const Container = styled.div`
  h4 {
    color: #dedee9;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    text-align: left;
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
    <ModalSm title={[]}>
      <Container>
        <h4 onClick={() => setNotifications(["notification", "notifications"])}>
          {getFieldTranslationByNames("notification", "remove all")}
        </h4>

        <Div>
          {notifications.map((notif) => (
            <NotifCard
              setNotifications={setNotifications}
              notifications={notifications}
              key={notif.id}
              id={notif.id}
              data={notif}
            />
          ))}
        </Div>
      </Container>
    </ModalSm>
  );
};

export default Notifications;
