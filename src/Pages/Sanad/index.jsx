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
      title: getFieldTranslationByNames("send-vod", "writing the document"),
      content: <WriteVodTab />,
    },
    {
      title: getFieldTranslationByNames("send-vod", "list of documents"),
      content: <VodListTab />,
    },
    {
      title: getFieldTranslationByNames("send-vod", "note"),
      content: <NotesListTab />,
    },
  ];

  const TabPanel = useTabs(tabs);

  return (
    <GlobalNoteStateProvider>
      <GlobalVodStateProvider>
        <Modal title={["send-vod", "documents"]}>{TabPanel}</Modal>
      </GlobalVodStateProvider>
    </GlobalNoteStateProvider>
  );
}
