import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";
import ReportsList from "./ReportsList";
import SearchInput from "../../../../components/SearchInput";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Title from "../../../../components/Title";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";
import { useTheme } from "../../../../services/reducers/ThemeContext"; // مسیر صحیح را وارد کنید
import useRequest from '../../../../services/Hooks/useRequest';

const Container = styled.div`
  padding: 20px 15px 0px 0;
  overflow-y: auto;
  height: 100%;
`;
const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  align-items: center;
  gap: 20px;
  margin-top: 15px;
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Date = styled.div`
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;
  svg {
    color: gray;
  }
  input {
    color: gray;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    &:focus {
      border: none;
      outline: none;
    }
    font-size: 16px;
  }
`;

const ReportsListTab = ({ title, subdomain }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark"; 

  const [searched, setSearched] = useState("");
  /*const [status, setStatus] = useState({
    pending: false,
    confirmed: false,
    failed: false,
  });*/

  const [member, setMember] = useState({
    disrespect: false,
    codingError: false,
    displayError: false,
    FPSError: false,
    spellingError: false,
  });

  const [rows, setRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { Request } = useRequest(); 

  const fetchData = async (page = 1) => {
    try {
      const response = await Request(`reports?page=${page}`, "GET");
      const formattedRows = response.data.data.map((item) => ({
        id: item.id,
        code: item.id || "کد ناموجود",
        datetime: item.datetime || "زمان ناموجود",
        member: item.subject || "عضو ناموجود",
        subject: item.subject || "", 
        //status: "confirmed" || "وضعیت ناموجود",
        title: item.title || "بدون عنوان",
      }));

      setRows((prevRows) => [...prevRows, ...formattedRows]);
      setHasMore(!!response.data.links.next); 
    } catch (error) {
      console.error("Error fetching reports:", error);
    }
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    fetchData(nextPage);
    setCurrentPage(nextPage);
  };

  const filteredItems = rows.filter((row) => {
    const titleMatch = row.title.toString().includes(searched);
    const statusMatch =
      (!status.confirmed && !status.failed && !status.pending) ||
      (status.confirmed && row.status === "confirmed") ||
      (status.failed && row.status === "failed") ||
      (status.pending && row.status === "pending");
    const memberMatch =
      (!member.displayError &&
       !member.spellingError &&
       !member.FPSError &&
       !member.disrespect &&
       !member.codingError) ||
      (member.displayError && row.subject === "displayError") ||
      (member.spellingError && row.subject === "spellingError") ||
      (member.FPSError && row.subject === "FPSError") ||
      (member.codingError && row.subject === "codingError") ||
      (member.disrespect && row.subject === "disrespect");

    return titleMatch && statusMatch && memberMatch;
  });

  return (
    <Container>
      <div>
        <Title title={getFieldTranslationByNames("22")} />
      </div>
      <Div>
        <SearchInput
          placeholder={getFieldTranslationByNames("1381")}
          value={searched}
          onchange={(e) => setSearched(e.target.value)}
        />
       
        <Date>
          <DatePicker
            placeholder={getFieldTranslationByNames("1382")}
            className={isDarkMode ? "bg-dark yellow" : ""}
            format="YYYY/DD/MM HH:mm:ss"
            plugins={[<TimePicker position="bottom" />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
          <FaRegCalendarAlt size={20} />
        </Date>
      </Div>
      <ReportsList
  //setStatus={setStatus}
  setMember={setMember}
  member={member}
  //status={status}
  rows={filteredItems}
  domain={title}
  subdomain={subdomain}
  handleLoadMore={handleLoadMore} 
  hasMore={hasMore} 
/>
    </Container>
  );
};

export default ReportsListTab;