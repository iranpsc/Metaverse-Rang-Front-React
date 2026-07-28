import ModalXs from "../../components/Modal/ModalXs";
import WalletSetup from "./WalletSetup";
import { useContext } from "react";
import { UserContext } from "../../services/reducers/UserContext";

const WalletSetupTab = () => {
  const [user] = useContext(UserContext);
  return (
    <ModalXs title={user?.has_wallet ? "1781" : "1668"}>
      <WalletSetup />
    </ModalXs>
  );
};

export default WalletSetupTab;
