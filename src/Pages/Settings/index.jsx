import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import AccountSetting from "./Tabs/AccountSetting";
import GeneralSettings from "./Tabs/GeneralSettings";

export default function Settings() {
  const tabs = [
    { title: "تنظیمات عمومی", content: <GeneralSettings /> },
    { title: "حساب کاربری", content: <AccountSetting /> },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type="modal-section-md" title="تنظیمات">
      {TabPanel}
    </Modal>
  );
}
