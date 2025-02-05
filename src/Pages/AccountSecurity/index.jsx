import { useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ModalXs from "../../Components/Modal/ModalXs";
import AccountSecurity from "./AccountSecurity";
import { useAccountSecurity } from "../../Services/Reducers/accountSecurityContext";

const AccountSecurityModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAccountSecurity, setSectionId, setSelectedItemId, selectedItemId } = useAccountSecurity();

  useEffect(() => {
    if (location.state?.itemId) {
      setSelectedItemId(location.state.itemId);
    }
  }, [location.state?.itemId, setSelectedItemId]);

  const handleClose = useCallback(
    (e) => {
      e.stopPropagation();
      const { sectionId } = location.state || {};

      if (sectionId && ["send-suggestion", "received-suggestion"].includes(sectionId)) {

        setSectionId(sectionId);
        setAccountSecurity(true);

        navigate("/metaverse/profile", {
          state: {
            activeTab: "profile-4",
            sectionId,
            itemId: selectedItemId,
          },
        });
      }
    },
    [location.state, navigate, setSectionId, setAccountSecurity, selectedItemId]
  );

  return (
    <div onClick={handleClose}>
      <ModalXs title="31" onClose={handleClose}>
        <div onClick={(e) => e.stopPropagation()}>
          <AccountSecurity />
        </div>
      </ModalXs>
    </div>
  );
};

export default AccountSecurityModal;