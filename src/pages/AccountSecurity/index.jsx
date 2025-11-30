import ModalXs from "../../components/Modal/ModalXs";
import AccountSecurity from "./AccountSecurity";
import { useNavigate, useLocation } from "react-router-dom";

const AccountSecurityModal = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    if (location.state?.locationPage === "profile-5") {
      navigate("/metaverse/profile", { state: { activeTab: 4 } });
    }

    onClose?.();
  };

  return (
    <ModalXs title={"31"} handleExitClick={handleClose}>
      <AccountSecurity />
    </ModalXs>
  );
};

export default AccountSecurityModal;
