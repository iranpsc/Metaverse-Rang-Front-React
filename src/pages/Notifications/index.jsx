import NotifCard from "./NotifCard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import useRequest from "../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import ModalSm from "../../components/Modal/ModalSm";
import { getFieldTranslationByNames } from "../../services/Utility";
import NoNotification from "./NoNotification";
import { Skeleton } from "../../components/Skeleton";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
    padding-bottom: 60px;

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

// اسکلتون برای کارت
const SkeletonCard = styled.div`
  padding: 20px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};

`;

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true); // اضافه شد
  const { Request, HTTP_METHOD } = useRequest();

  useEffect(() => {
    setLoading(true);
    Request("notifications")
      .then((response) => {
        setNotifications(response.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
        setNotifications([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = () => {
    Request("notifications/read/all", HTTP_METHOD.POST)
      .then(() => {
        setNotifications([]);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ModalSm title={"238"}>
      <Container>
        <h4 onClick={handleDelete}>{getFieldTranslationByNames("866")}</h4>
        <Div>
          {loading ? (
            // اسکلتون برای 3 کارت
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index}>
                <div style={{ display: "flex", alignItems: "center", justifyContent:"space-between" ,width:"100%", gap: "12px", marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" , gap: "12px", }}>
                    <Skeleton width="60px" height="60px" radius="50%" />
                  <div>
                    <Skeleton width="120px" height="20px" radius="4px" style={{ marginBottom: "8px" }} />
                    <Skeleton width="150px" height="14px" radius="4px" />
                  </div>
                  </div>
                  <Skeleton width="35px" height="35px" radius="50%"  />
                </div>
                <Skeleton width="100%" height="30px" radius="4px" />
              </SkeletonCard>
            ))
          ) : notifications.length === 0 ? (
            <NoNotification />
          ) : (
            notifications.map((notif) => (
              <NotifCard
                setNotifications={setNotifications}
                notifications={notifications}
                key={notif.id}
                id={notif.id}
                data={notif}
                isLoading={false}
              />
            ))
          )}
        </Div>
      </Container>
    </ModalSm>
  );
};

export default Notifications;