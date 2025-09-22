import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";

import TimePicker from "react-multi-date-picker/plugins/time_picker";

import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchInput from "../../../../Components/SearchInput";
import Title from "../../../../Components/Title";
import VodList from "../../Components/VodList";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding: 20px 15px 0px 0;

  overflow-y: auto;
  height: 550px;
  @media (min-width: 640px) {
    height: 240px;
  }
  @media (min-width: 740px) {
    height: 225px;
  }
  @media (min-width: 840px) {
    height: 253px;
  }
  @media (min-width: 890px) {
    height: 290px;
  }
  @media (min-width: 910px) {
    height: 275px;
  }
  @media (min-width: 915px) {
    height: 275px;
  }
  @media (min-width: 930px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 400px;
  }
  @media (min-width: 1180px) {
    height: 600px;
  }
  @media (min-width: 1280px) {
    max-height: 945px;
  }
  @media (min-width: 1366px) {
    height: 650px;
  }
  @media (min-width: 1920px) {
    height: 640px;
  }
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;
  svg {
    color: ${(props) => props.theme.colors.newColors.otherColors.iconBg};
  }
  input {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #e0e0e0; // Example disabled background color
    pointer-events: none;
    opacity: 0.6;
    svg {
      color: #a0a0a0; // Example disabled icon color
    }
    input {
      color: #a0a0a0; // Example disabled text color
    }
  `}
`;
const rows_items = [
  {
    id: 1,
    code: "827161",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "علی نادی",
    status: "confirmed",
    member_slug: "child",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 2,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "یوسف خدری",
    status: "failed",
    member_slug: "mother",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 3,
    code: "953258",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "پریسا رضایی",
    status: "confirmed",
    member_slug: "father",
    gif: 1.6,
    count: 100,
    psc: 1000,
  },
  {
    id: 4,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "یوسف خدری",
    status: "read",
    member_slug: "mother",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 5,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "failed",
    member_slug: "sister",
    gif: 1.6,
    count: 100,
    psc: 1000,
  },
];
const SentList = ({ setShowDetails }) => {
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState("");
  const [status, setStatus] = useState({
    pending: false,
    confirmed: false,
    failed: false,
    read: false,
  });

  const { Request } = useRequest();

  useEffect(() => {
    Request("tickets").then((response) => {
      setRows(response.data.data);
    });
  }, []);
  const filteredItems = rows.filter((row) => {
    const codeMatch = row?.title?.toString().includes(searched) || false;

    const statusMatch =
      (!status.confirmed &&
        !status.failed &&
        !status.pending &&
        !status.read) ||
      (status.confirmed && row.status === "confirmed") ||
      (status.failed && row.status === "failed") ||
      (status.read && row.status === "read") ||
      (status.pending && row.status === "pending");

    return codeMatch && statusMatch;
  });

  return (
    <Container>
      <div>
        <Title
          title={getFieldTranslationByNames("1336")}
        />
      </div>
      <Div>
        <SearchInput
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder={getFieldTranslationByNames("1337")}
        />
        <Date disabled>
          <DatePicker
            placeholder={getFieldTranslationByNames("1338")}
            className="bg-dark yellow"
            format="YYYY/DD/MM HH:mm:ss"
            plugins={[<TimePicker position="bottom" />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            disabled={true}
          />
          <FaRegCalendarAlt size={20} />
        </Date>
      </Div>
      <VodList
        setStatus={setStatus}
        status={status}
        rows={filteredItems}
        mode=""
      />
    </Container>
  );
};

export default SentList;
