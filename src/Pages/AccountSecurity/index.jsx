import ModalXs from "../../Components/Modal/ModalXs";
import AccountSecurity from "./AccountSecurity";

const AccountSecurityModal = ({ onClose }) => {
  return (
    <ModalXs title={"31"} handleExitClick={onClose}>
      <AccountSecurity />
    </ModalXs>
  );
};

export default AccountSecurityModal;
