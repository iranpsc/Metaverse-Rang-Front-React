import MapTreeD from "./map";
import Menu from "./menu";
import StatusBar from "./statusBar";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MenuContextProvider } from "../services/reducers/MenuContext";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { UserContext } from "../services/reducers/UserContext";
import { getItem } from "../services/Utility/LocalStorage";

const Container = styled.section`
  display: flex;
  overflow-y: hidden;
  width: 100%;
  height: var(--app-height);
  flex-direction: row;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.newColors.shades.bg2};
  padding: 5px;
  @media (min-width: 768px) {
    gap: 10px;
    padding: 10px;
  }

  transition: all 0.3s ease 0s;
`;
const MainLayout = () => {
  const navigate = useNavigate();
  const usertoken = getItem("user");
  const [user] = useContext(UserContext);
useEffect(() => {
  if (!user || !usertoken) return;

  // هنوز مقدار از API نیامده
  if (user.has_wallet === undefined) return;

  // اگر کیف پول دارد، کاری نکن
  if (user.has_wallet === true) return;

  const currentSession = `${usertoken.token}-${usertoken.expire}`;
  const shownSession = localStorage.getItem("walletModalShown");

  if (shownSession !== currentSession) {
    localStorage.setItem("walletModalShown", currentSession);
    navigate("/connectWallet", { replace: true });
  }
}, [user, usertoken, navigate]);
  return (
    <Container>
      <MenuContextProvider>
        <Menu />
      </MenuContextProvider>
      <MapTreeD />
      <Outlet />
      <StatusBar />
    </Container>
  );
};

export default MainLayout;
