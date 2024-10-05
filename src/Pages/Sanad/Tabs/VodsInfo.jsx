import NotesListTab from "../../components/send_vod/notes/NotesListTab";
import VodListTab from "./VodListTab";
import WriteVodTab from "./WriteVodTab";

const VodsInfo = ({ active }) => {
  if (active === "write_vod") return <WriteVodTab />;
  if (active === "vods_list") return <VodListTab />;
  if (active === "notes") return <NotesListTab />;
};

export default VodsInfo;