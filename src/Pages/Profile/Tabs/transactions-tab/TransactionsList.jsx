import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import TransactionRow from "./TransactionRow";
import blue from "../../../../Assets/gif/blue-color.gif";
import psc from "../../../../Assets/gif/psc.gif";
import red from "../../../../Assets/gif/red-color.gif";
import rial from "../../../../Assets/gif/rial.gif";
import yellow from "../../../../Assets/gif/yellow-color.gif";
import styled from "styled-components";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Container = styled.div`
  border-radius: 0.25rem;
  overflow-x: auto;
  min-height: 93vh;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 640px) {
    width: 75vw !important;
  }
  @media (min-width: 840px) {
    min-height: 80vh !important;
  }
  @media (min-width: 1024px) {
    width: 83vw !important;
  }
  @media (min-width: 1280px) {
    width: 78.5vw !important;
  }
  @media (min-width: 1360px) {
    width: 78.5vw !important;
  }
  @media (min-width: 1920px) {
    width: auto !important;
    min-height: 55vh;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 1215px;

  margin-top: 5px;
  border-collapse: collapse;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  @media (min-width: 1920px) {
    width: 100% !important;
  }
`;

const TableHead = styled.thead`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border-radius: 10px !important;
  overflow: hidden !important;
`;

const TableRow = styled.tr``;
const StatusFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 169px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  font-size: 16px;
  div {
    position: relative;
    &:hover {
      background-color: #3b3b3b;
      transition: all 0.2s linear;
    }
    span {
      position: absolute;
      left: 10px;
      top: 3px;
      color: red;
      cursor: pointer;
      font-size: 14px;
    }
  }
  h1 {
    font-weight: 400;
    color: #18c08f;
    background-color: #18c09017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
  h2 {
    color: #ffc800;
    font-weight: 400;
    background-color: #ffc80017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
  h3 {
    color: #ff0000;
    font-weight: 400;
    background-color: #ff000017;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
`;
const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  div {
    position: relative;
    padding-right: 5px;
    &:hover {
      background-color: #3b3b3b;
      color: #dedee9;
      transition: all 0.2s linear;
    }
    span {
      position: absolute;
      left: 10px;
      top: 3px;
      color: red;
      cursor: pointer;
      font-size: 14px;
    }
  }
  h1 {
    font-size: 16px;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 400;
    cursor: pointer;
    &:first-of-type {
      margin-bottom: 10px;
    }
  }
`;
const SubjectFilter = styled.div`
  position: absolute;
  top: 65px;
  width: max-content;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  font-size: 16px;
  div {
    position: relative;
    padding: 3px;
    &:hover {
      background-color: #3b3b3b;
      color: #dedee9;
      transition: all 0.2s linear;
    }
    span {
      position: absolute;
      left: 10px;
      top: 3px;
      color: red;
      cursor: pointer;
      font-size: 14px;
    }
  }
  span {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 400;
    font-size: 16px;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;
const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  position: relative;
  width: ${(props) =>
    props.date ? "235px" : props.subject ? "160px" : props.title && "140px"};
`;

const Loader = styled.div`
  margin: 10px 0;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    border: none;
  }
`;

const subjects = [
  { id: 1, label: "buy blue", slug: "blue", gif: blue },
  { id: 2, label: "buy red", slug: "red", gif: red },
  { id: 3, label: "buy yellow", slug: "yellow", gif: yellow },
  { id: 4, label: "buy rial currency", slug: "rial", gif: rial },
  { id: 5, label: "buy psc currency", slug: "psc", gif: psc },
];

const TransactionsList = ({
  rows,
  title,
  status,
  subject,
  setStatus,
  setTitle,
  setSubject,
}) => {
  const [visibleRows, setVisibleRows] = useState(10);
  const loaderRef = useRef(null);

  const [filters, setFilters] = useState({
    status: false,
    title: false,
    subject: false,
  });

  // Function to load more rows when near the bottom
  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  // Set up IntersectionObserver to trigger when the loader becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          handleLoadMore();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              {getFieldTranslationByNames(
                "citizenship-account",
                "transaction id"
              )}
            </TableHeader>
            <TableHeader date>
              {getFieldTranslationByNames(
                "citizenship-account",
                "date and time of sending"
              )}
            </TableHeader>
            <TableHeader>
              <Div>
                {getFieldTranslationByNames("citizenship-account", "condition")}
                <Arrows onClick={() => setFilters({ status: !filters.status })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.status ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.status && (
                <StatusFilter>
                  <div
                    style={{
                      backgroundColor: `${status.success && "#3B3B3B"}`,
                      borderRadius: "5px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, success: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "successful"
                      )}
                    </h1>
                    {status.success && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, success: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: `${status.pending && "#3B3B3B"}`,
                      borderRadius: "5px",
                    }}
                  >
                    <h2
                      onClick={() => {
                        setStatus({ ...status, pending: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "suspended"
                      )}
                    </h2>
                    {status.pending && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, pending: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: `${status.failed && "#3B3B3B"}`,
                      borderRadius: "5px",
                    }}
                  >
                    <h3
                      onClick={() => {
                        setStatus({ ...status, failed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "unsuccessful"
                      )}
                    </h3>
                    {status.failed && (
                      <span
                        onClick={() => {
                          setStatus({ ...status, failed: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                </StatusFilter>
              )}
            </TableHeader>
            <TableHeader title>
              <Div>
                {getFieldTranslationByNames("citizenship-account", "title")}
                <Arrows onClick={() => setFilters({ title: !filters.title })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.title ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.title && (
                <TitleFilter>
                  <div
                    style={{
                      backgroundColor: `${title.property_buy && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setTitle({ ...title, property_buy: true });
                        setFilters({ ...filters, title: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "purchase property"
                      )}
                    </h1>
                    {title.property_buy && (
                      <span
                        onClick={() => {
                          setTitle({ ...title, property_buy: false });
                          setFilters({ ...filters, title: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      backgroundColor: `${title.property_dealing && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setTitle({ ...title, property_dealing: true });
                        setFilters({ ...filters, title: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "real estate transaction"
                      )}
                    </h1>
                    {title.property_dealing && (
                      <span
                        onClick={() => {
                          setTitle({ ...title, property_dealing: false });
                          setFilters({ ...filters, title: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader subject>
              <Div>
                {getFieldTranslationByNames("citizenship-account", "issue")}
                <Arrows
                  onClick={() => setFilters({ subject: !filters.subject })}
                >
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.subject ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.subject && (
                <SubjectFilter>
                  {subjects.map((item) => (
                    <div
                      onClick={() => {
                        setSubject((prev) => ({ ...prev, [item.slug]: true }));
                        setFilters({ ...filters, subject: false });
                      }}
                      key={item.id}
                      style={{
                        display: "flex",
                        gap: "5px",
                        cursor: "pointer",
                        alignItems: "center",
                        backgroundColor: `${subject[item.slug] && "#3B3B3B"}`,
                        marginBottom: `${item.id !== 5 && "10px"}`,
                        borderRadius: "10px",
                      }}
                    >
                      <img
                        src={item.gif}
                        alt={item.slug}
                        width={24}
                        height={26}
                        loading="lazy"
                      />
                      <h3>
                        {getFieldTranslationByNames(
                          "citizenship-account",
                          item.label
                        )}
                      </h3>
                      {subject[item.slug] && (
                        <span
                          onClick={(e) => {
                            setSubject((prev) => ({
                              ...prev,
                              [item.slug]: false,
                            }));
                            e.stopPropagation();
                            setFilters({ ...filters, subject: false });
                          }}
                        >
                          X
                        </span>
                      )}
                    </div>
                  ))}
                </SubjectFilter>
              )}
            </TableHeader>
            <TableHeader>
              {" "}
              {getFieldTranslationByNames(
                "citizenship-account",
                "the amount of"
              )}
            </TableHeader>
            <TableHeader>
              {getFieldTranslationByNames("citizenship-account", "view-print")}
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.slice(0, visibleRows).map((transaction) => (
            <TransactionRow key={transaction.id} {...transaction} />
          ))}
        </tbody>
      </Table>
      {visibleRows < rows.length && <div ref={loaderRef} />}
    </Container>
  );
};

export default TransactionsList;
