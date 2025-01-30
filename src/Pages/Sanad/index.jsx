import React from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import WriteVodTab from "./Tabs/WriteVodTab";
import VodListTab from "./Tabs/VodListTab";
import NotesListTab from "./Tabs/notes/NotesListTab";
import { GlobalVodStateProvider } from "./Tabs/GlobalVodStateProvider";
import { GlobalNoteStateProvider } from "./Tabs/GlobalNoteStateProvider";

export default function Sanad() {
  const tabs = [
    {
      title: getFieldTranslationByNames("1314"),
      content: <WriteVodTab />,
    },
    {
      title: getFieldTranslationByNames("1316"),
      content: <VodListTab />,
    },
    {
      title: getFieldTranslationByNames("1317"),
      content: <NotesListTab />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <GlobalNoteStateProvider>
      <GlobalVodStateProvider>
        <Modal title={"1315"}>{TabPanel}</Modal>
      </GlobalVodStateProvider>
    </GlobalNoteStateProvider>
  );
}
