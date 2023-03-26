import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import General from "./Tabs/General";
import Property from "./Tabs/Property";

export default function Player() {
  const tabs = [
    { title: 'کلیات', content: <General /> },
    { title: 'دارایی', content: <Property /> }
  ];

  const TabPanel = useTabs(tabs);

  return (
    <Modal type="modal-section-md" title='پروفایل'>
      {TabPanel}
    </Modal>
  );
}