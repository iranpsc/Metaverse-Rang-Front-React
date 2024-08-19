import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";

import DatePicker from "react-multi-date-picker";
import { FaRegCalendarAlt } from "react-icons/fa";

import TimePicker from "react-multi-date-picker/plugins/time_picker";

import TransactionsList from "./TransactionsList";
import blue from "../../../../Assets/gif/blue-color.gif";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import psc from "../../../../Assets/gif/psc.gif";
import red from "../../../../Assets/gif/red-color.gif";
import rial from "../../../../Assets/gif/rial.gif";
import styled from "styled-components";
import { useState, useEffect, useRef, useCallback } from "react";
import yellow from "../../../../Assets/gif/yellow-color.gif";
import SearchInput from "../../../../Components/SearchInput";
import Title from "../../../../Components/Title";
import useRequest from "../../../../Services/Hooks/useRequest";

const Container = styled.div`
  padding: 20px 15px 0px 0;
  direction: ltr;
  overflow-y: auto;
  height: 550px;
  z-index: 10;
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  height: 48px;
  padding: 0 10px;
  svg {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
`;

const TransactionsTab = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { Request } = useRequest();
  const observer = useRef();

  useEffect(() => {
    Request(`user/transactions?page=${page}`).then((res) => {
      setTransactions((prevTransactions) => [
        ...prevTransactions,
        ...res.data.data,
      ]);
      setHasMore(res.data.links.next !== null);
    });
  }, [page]);

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

  const updatedTransactions = transactions.map((transaction) => {
    let assetGif = null;

    switch (transaction.asset) {
      case "رنگ زرد":
        assetGif = yellow;
        break;
      case "رنگ قرمز":
        assetGif = red;
        break;
      case "رنگ آبی":
        assetGif = blue;
        break;
      case "PSC":
        assetGif = psc;
        break;
      case "ریال":
        assetGif = rial;
        break;
      default:
        assetGif = null;
        break;
    }

    return { ...transaction, assetGif };
  });

  const filteredItems = updatedTransactions.filter((row) => {
    const codeMatch = row.id.includes(searched);
    const statusMatch =
      (!status.success && !status.failed && !status.pending) ||
      (status.success && row?.status == "1") ||
      (status.failed && row?.status == "0") ||
      (status.pending && row?.status == "-1");
    const titleMatch =
      (!title.property_dealing && !title.property_buy) ||
      (title.property_dealing && row?.type === "معامله ملک") ||
      (title.property_buy && row?.type === "خرید دارایی");
    const subjectMatch =
      (!subject.blue &&
        !subject.red &&
        !subject.yellow &&
        !subject.psc &&
        !subject.rial) ||
      (subject.blue && row.asset === "رنگ آبی") ||
      (subject.red && row.asset === "رنگ قرمز") ||
      (subject.yellow && row.asset === "رنگ زرد") ||
      (subject.psc && row.asset === "PSC") ||
      (subject.rial && row.asset === "ریال");

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
