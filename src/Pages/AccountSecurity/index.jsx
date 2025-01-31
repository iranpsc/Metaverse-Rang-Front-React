import ModalXs from "../../Components/Modal/ModalXs";
import AccountSecurity from "./AccountSecurity";
import { useLocation, useNavigate } from "react-router-dom";
import { useAccountSecurity } from "../../Services/Reducers/accountSecurityContext"; // ایمپورت کانتکست

const AccountSecurityModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setAccountSecurity } = useAccountSecurity(); // مقداردهی متغیر از کانتکست

  console.log("loc is", location.state);

  // تابع بستن مدال و بازگشت به صفحه و تب صحیح
  const handleClose = () => {
    if (location.pathname === "/metaverse/profile/confirmation" && location.state?.locationPage === "profile-5") {
      console.log("برگشت به تب profile-5");
      setAccountSecurity(true); // مقدار را روی `true` تنظیم می‌کنیم

      
    } else {
      navigate("/metaverse/profile", { replace: true }); // بازگشت به صفحه پروفایل بدون تغییر تب
      console.log("خطا");
    }
  };
  

  return (
    <ModalXs title={"31"} onClose={handleClose}> {/* ارسال تابع handleClose برای بستن مدال */}
      <AccountSecurity />
    </ModalXs>
  );
};

export default AccountSecurityModal;
