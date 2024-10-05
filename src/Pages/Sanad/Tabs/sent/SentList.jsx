import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";

import TimePicker from "react-multi-date-picker/plugins/time_picker";

import VodList from "./VodList";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../../../../Components/SearchInput";
import Title from "../../../../Components/Title";

const Container = styled.div`
  padding: 20px 15px 0px 0;
  direction: ltr;
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
  direction: rtl;
  gap: 20px;
  margin-top: 15px;
  @media (min-width: 1024px) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Date = styled.div`
  direction: rtl;
  border-radius: 5px;
  border: 1px solid #454545;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #2c2c2c;
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
  {
    id: 6,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "یوسف خدری",
    status: "pending",
    member_slug: "mother",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 7,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 8,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شیما اکبری",
    status: "read",
    member_slug: "brother",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 9,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "پریسا رضایی",
    status: "failed",
    member_slug: "father",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 10,
    code: "827161",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شادی راد",
    status: "confirmed",
    member_slug: "wife",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 11,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "علی نادی",
    status: "pending",
    member_slug: "child",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 12,
    code: "953258",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "confirmed",
    member_slug: "sister",
    gif: 1.6,
    count: 100,
    psc: 1000,
  },
  {
    id: 13,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "علی نادی",
    status: "read",
    member_slug: "child",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 14,
    code: "978512",
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
    id: 15,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شیما اکبری",
    status: "pending",
    member_slug: "brother",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 16,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 17,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "یوسف خدری",
    status: "confirmed",
    member_slug: "mother",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 18,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 19,
    code: "827161",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "علی نادی",
    status: "failed",
    member_slug: "child",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 20,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شادی راد",
    status: "pending",
    member_slug: "wife",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 21,
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
    id: 22,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "علی نادی",
    status: "read",
    member_slug: "child",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 23,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "confirmed",
    member_slug: "sister",
    gif: 1.6,
    count: 100,
    psc: 1000,
  },
  {
    id: 24,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شیما اکبری",
    status: "pending",
    member_slug: "brother",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 25,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 1.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 26,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "شیما اکبری",
    status: "confirmed",
    member_slug: "brother",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 27,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "read",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 28,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 29,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 30,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    doc: "لورم ایپسوم متن ساختگی با تولید سادگی",
    time: " ۱۶:۲۱:۰۸",
    member: "حمید محمدی",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
];
const SentList = ({ setShowDetails }) => {
  const [searched, setSearched] = useState("");
  const [status, setStatus] = useState({
    pending: false,
    confirmed: false,
    failed: false,
    read: false,
  });

  const [member, setMember] = useState({
    father: false,
    mother: false,
    child: false,
    sister: false,
    brother: false,
    wife: false,
  });

  const [rows, setRows] = useState(rows_items);
  const filteredItems = rows.filter((row) => {
    const codeMatch = row.doc.toString().includes(searched);
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
      <div dir="rtl">
        <Title title="سندهای ارسال شده" />
      </div>
      <Div>
        <SearchInput
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder="جستجو عنوان سند"
        />
        <Date>
          <DatePicker
            placeholder="تاریخ و ساعت سند"
            className="bg-dark yellow"
            format="YYYY/DD/MM HH:mm:ss"
            plugins={[<TimePicker position="bottom" />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
          />
          <FaRegCalendarAlt size={20} />
        </Date>
      </Div>
      <VodList
        setStatus={setStatus}
        setMember={setMember}
        member={member}
        status={status}
        rows={filteredItems}
      />
    </Container>
  );
};

export default SentList;
