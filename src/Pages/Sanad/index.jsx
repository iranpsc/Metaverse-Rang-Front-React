import React from "react";
import Modal from "../../Components/Modal";
import useTabs from "../../Services/Hooks/useTabs";
import { getFieldTranslationByNames } from "../../Services/Utility";
import WriteVodTab from "./Tabs/WriteVodTab";
import VodListTab from "./Tabs/VodListTab";
import NotesListTab from "./Tabs/notes/NotesListTab";

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

  return <Modal title={["send-vod", "documents"]}>{TabPanel}</Modal>;
}
