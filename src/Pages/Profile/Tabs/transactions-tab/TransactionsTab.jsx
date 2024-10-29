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
import { useState, useEffect, useRef } from "react";
import yellow from "../../../../Assets/gif/yellow-color.gif";
import SearchInput from "../../../../Components/SearchInput";
import Title from "../../../../Components/Title";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  padding: 20px 15px 0px 0;

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
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const { Request } = useRequest();
  const loaderRef = useRef(null);

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
  const [dateRange, setDateRange] = useState([null, null]);

  const fetchTransactions = async () => {
    console.log(subject);
    if (!hasMore || isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      const statusParams = [];
      if (status.success) statusParams.push(1);
      if (status.failed) statusParams.push(0);
      if (status.pending) statusParams.push(-1);

      const titleParams = [];
      if (title.property_dealing) titleParams.push("trade");
      if (title.property_buy) titleParams.push("order");

      const subjectParams = [];
      if (subject.blue) subjectParams.push("blue");
      if (subject.red) subjectParams.push("red");
      if (subject.yellow) subjectParams.push("yellow");
      if (subject.psc) subjectParams.push("psc");
      if (subject.rial) subjectParams.push("rial");
      const params = new URLSearchParams({
        page,
        search: searched,
        status: statusParams.join(","),
        type: titleParams.join(","),
        asset: subjectParams.join(","),
        start_date_time: dateRange[0] || "",
        end_date_time: dateRange[1] || "",
      });

      const response = await Request(`user/transactions?${params.toString()}`);
      const newTransactions = response.data.data;

      // Map asset GIFs to new transactions
      const processedTransactions = newTransactions.map((transaction) => {
        let assetGif = null;
        switch (transaction.asset) {
          case "yellow":
            assetGif = yellow;
            break;
          case "red":
            assetGif = red;
            break;
          case "blue":
            assetGif = blue;
            break;
          case "psc":
            assetGif = psc;
            break;
          case "rial":
            assetGif = rial;
            break;
          default:
            assetGif = null;
        }
        return { ...transaction, assetGif };
      });

      if (
        searched ||
        statusParams.length ||
        titleParams.length ||
        subjectParams.length ||
        dateRange[0]
      ) {
        setFilteredTransactions(processedTransactions);
      } else {
        setTransactions((prev) => [...prev, ...processedTransactions]);
      }

      setHasMore(response.data.links.next !== null);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching transactions:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(subject);
    fetchTransactions();
  }, [page, hasMore, searched, status, title, subject, dateRange]);

  // IntersectionObserver setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <Container>
      <div>
        <Title
          title={getFieldTranslationByNames(
            "citizenship-account",
            "transactions"
          )}
        />
      </div>
      <Div>
        <SearchInput
          onChange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder={getFieldTranslationByNames(
            "citizenship-account",
            "transaction id"
          )}
        />
        <Date>
          <DatePicker
            placeholder={getFieldTranslationByNames(
              "citizenship-account",
              "date and time range"
            )}
            className="bg-dark yellow"
            format="YYYY/MM/DD HH:mm:ss"
            plugins={[<TimePicker position="bottom" />]}
            calendar={persian}
            locale={persian_fa}
            calendarPosition="bottom-right"
            range
            value={dateRange}
            onChange={(dates) => {
              if (dates) {
                setDateRange(dates.toString().split(","));
              } else {
                setDateRange([null, null]);
              }
            }}
          />
          <FaRegCalendarAlt size={20} />
        </Date>
      </Div>

      {error && <div className="text-red-500">Error: {error}</div>}

      <TransactionsList
        setStatus={setStatus}
        setTitle={setTitle}
        setSubject={setSubject}
        title={title}
        status={status}
        subject={subject}
        rows={filteredTransactions.length ? filteredTransactions : transactions}
      />

      {isLoading && <div className="text-center py-4">Loading...</div>}
      {hasMore && <div ref={loaderRef} style={{ height: "20px" }} />}
    </Container>
  );
};

export default TransactionsTab;
