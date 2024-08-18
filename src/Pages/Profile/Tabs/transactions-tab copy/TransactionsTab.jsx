import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";
import SearchInput from "../../SearchInput";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import Title from "../../Title";
import TransactionsList from "./TransactionsList";
import blue from "../../../assets/images/profile/blue-color.gif";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import psc from "../../../assets/images/profile/psc.gif";
import red from "../../../assets/images/profile/red-color.gif";
import rial from "../../../assets/images/profile/rial.gif";
import styled from "styled-components";
import { useState } from "react";
import yellow from "../../../assets/images/profile/yellow-color.gif";

const Container = styled.div`
  padding: 20px 15px 0px 0;
  direction: ltr;
  overflow-y: auto;
  height: 550px;
  z-index: -10;
  @media (min-width: 640px) {
    height: 290px;
  }
  @media (min-width: 740px) {
    height: 270px;
  }
  @media (min-width: 840px) {
    height: 290px;
  }
  @media (min-width: 890px) {
    height: 315px;
  }
  @media (min-width: 930px) {
    height: 330px;
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
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 2,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 3,
    code: "953258",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 4,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "ریال",
    subject_slug: "rial",
    gif: rial,
    count: 100,
  },
  {
    id: 5,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 6,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 7,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 8,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 9,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 10,
    code: "827161",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 11,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 12,
    code: "953258",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 13,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "ریال",
    subject_slug: "rial",
    gif: rial,
    count: 100,
  },
  {
    id: 14,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 15,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 16,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 17,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 18,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 19,
    code: "827161",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 20,
    code: "789452",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 21,
    code: "953258",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 22,
    code: "135647",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "success",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "ریال",
    subject_slug: "rial",
    gif: rial,
    count: 100,
  },
  {
    id: 23,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ زرد",
    subject_slug: "yellow",
    gif: yellow,
    count: 100,
  },
  {
    id: 24,
    code: "954274",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 25,
    code: "875162",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "رنگ قرمز",
    subject_slug: "red",
    gif: red,
    count: 100,
  },
  {
    id: 26,
    code: "147862",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "failed",
    title: "خرید دارایی",
    title_slug: "property_buy",
    subject: "رنگ آبی",
    subject_slug: "blue",
    gif: blue,
    count: 100,
  },
  {
    id: 27,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 28,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 29,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
  {
    id: 30,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    status: "pending",
    title: "معامله ملک",
    title_slug: "property_dealing",
    subject: "PSC",
    subject_slug: "psc",
    gif: psc,
    count: 100,
  },
];
const TransactionsTab = () => {
  const [searched, setSearched] = useState("");
  const [status, setStatus] = useState({
    success: false,
    failed: false,
    pending: false,
  });
  
  const [title, setTitle] = useState({
    property_dealing: false,
    property_buy: false,
  });
  
  const [subject, setSubject] = useState({
    blue: false,
    red: false,
    yellow: false,
    psc: false,
    rial: false,
  });
  
  const [rows, setRows] = useState(rows_items);
  const filteredItems = rows.filter((row) => {
    const codeMatch = row.code.toString().includes(searched);
    const statusMatch =
      (!status.success && !status.failed && !status.pending) ||
      (status.success && row.status === "success") ||
      (status.failed && row.status === "failed") ||
      (status.pending && row.status === "pending");
    const titleMatch =
      (!title.property_dealing && !title.property_buy) ||
      (title.property_dealing && row.title_slug === "property_dealing") ||
      (title.property_buy && row.title_slug === "property_buy");
    const subjectMatch =
      (!subject.blue &&
        !subject.red &&
        !subject.yellow &&
        !subject.psc &&
        !subject.rial) ||
      (subject.blue && row.subject_slug === "blue") ||
      (subject.red && row.subject_slug === "red") ||
      (subject.yellow && row.subject_slug === "yellow") ||
      (subject.psc && row.subject_slug === "psc") ||
      (subject.rial && row.subject_slug === "rial");
  
    return codeMatch && statusMatch && titleMatch && subjectMatch;
  });
  return (
    <Container>
      <div dir="rtl">
        <Title title="تراکنش ها" />
      </div>
      <Div>
        <SearchInput
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder="جستجو شناسه تراکنش"
        />
        <Date>
          <DatePicker
            placeholder="تاریخ و ساعت"
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
      <TransactionsList
        setStatus={setStatus}
        setTitle={setTitle}
        setSubject={setSubject}
        title={title}
        status={status}
        subject={subject}
        rows={filteredItems}
      />
    </Container>
  );
};

export default TransactionsTab;
