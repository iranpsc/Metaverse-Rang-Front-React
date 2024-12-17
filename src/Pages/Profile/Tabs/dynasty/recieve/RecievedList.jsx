import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";
import RecieveRequestsList from "./RecieveRequestsList";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styled from "styled-components";
import { useState } from "react";
import Title from "../../../../../Components/Title";
import SearchInput from "../../../../../Components/SearchInput";

const Container = styled.div`
  padding: 20px 15px 0px 0;

  overflow-y: auto;
  height: 550px;
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
    member: "فرزند",
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
    time: " ۱۶:۲۱:۰۸",
    member: "مادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "پدر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "مادر",
    status: "pending",
    member_slug: "mother",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 5,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "مادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "برادر",
    status: "confirmed",
    member_slug: "brother",
    gif: 0.5,
    count: 100,
    psc: 1000,
  },
  {
    id: 9,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    member: "پدر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "همسر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "فرزند",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "فرزند",
    status: "failed",
    member_slug: "child",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 14,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    member: "پدر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "برادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "مادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "فرزند",
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
    time: " ۱۶:۲۱:۰۸",
    member: "همسر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "پدر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "فرزند",
    status: "pending",
    member_slug: "child",
    gif: 1.7,
    count: 100,
    psc: 1000,
  },
  {
    id: 23,
    code: "978512",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "برادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "برادر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
  {
    id: 28,
    code: "865721",
    date: "۲۱ اردیبهشت ۱۴۰۳",
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
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
    time: " ۱۶:۲۱:۰۸",
    member: "خواهر",
    status: "pending",
    member_slug: "sister",
    gif: 3.2,
    count: 100,
    psc: 1000,
  },
];
const RecievedList = ({ setShowDetails }) => {
  const [searched, setSearched] = useState("");
  const [status, setStatus] = useState({
    pending: false,
    confirmed: false,
    failed: false,
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
    const codeMatch = row.code.toString().includes(searched);
    const statusMatch =
      (!status.confirmed && !status.failed && !status.pending) ||
      (status.confirmed && row.status === "confirmed") ||
      (status.failed && row.status === "failed") ||
      (status.pending && row.status === "pending");
    const memberMatch =
      (!member.child &&
        !member.wife &&
        !member.brother &&
        !member.sister &&
        !member.father &&
        !member.mother) ||
      (member.child && row.member_slug === "child") ||
      (member.wife && row.member_slug === "wife") ||
      (member.brother && row.member_slug === "brother") ||
      (member.sister && row.member_slug === "sister") ||
      (member.father && row.member_slug === "father") ||
      (member.mother && row.member_slug === "mother");

    return codeMatch && statusMatch && memberMatch;
  });

  return (
    <Container>
      <div>
        <Title title="درخواست دریافتی" />
      </div>
      <Div>
        <SearchInput
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder="جستجو شناسه ..."
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
      <RecieveRequestsList
        setStatus={setStatus}
        setMember={setMember}
        member={member}
        status={status}
        rows={filteredItems}
      />
    </Container>
  );
};

export default RecievedList;
