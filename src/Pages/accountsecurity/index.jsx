import ModalXs from "../../Components/Modal/ModalXs";
import AccountSecurity from "./AccountSecurity";

const AccountSecurityModal = () => {
  return (
    <ModalXs title={["account-security", "account security"]}>
      <AccountSecurity />
    </ModalXs>
  );
};

export default AccountSecurityModal;
