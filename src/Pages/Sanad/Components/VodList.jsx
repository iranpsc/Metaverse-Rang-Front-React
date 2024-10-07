import { MdKeyboardArrowDown } from "react-icons/md";

import styled from "styled-components";
import { useState } from "react";
import VodRow from "../Tabs/recieve/VodRow";

const Container = styled.div`
  border-radius: 0.25rem;
  overflow-x: auto;
  min-height: 93vh;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 840px) {
    min-height: 80vh !important;
  }
  @media (min-width: 1920px) {
    width: auto !important;
    min-height: 55vh;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 1250px;
  text-align: right;
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
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 10px !important;
`;

const TableRow = styled.tr``;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  position: relative;
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

const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  div {
    position: relative;
    padding-right: 5px;
    background-color: ${(props) =>
      props.status.confirmed &&
      props.theme.colors.newColors.otherColors.bgContainer};
    border-radius: 10px;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.newColors.otherColors.inputBg};
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

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VodList = ({
  rows,
  mode = "receive",
  member,
  status,
  setStatus,
  setMember,
  domain,
  subdomain,
}) => {
  const [visibleRows, setVisibleRows] = useState(10);

  const [filters, setFilters] = useState({
    status: false,
  });

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            {mode === "receive" ? (
              <>
                <TableHeader>کد سند</TableHeader>
                <TableHeader>عنوان سند</TableHeader>
                <TableHeader>
                  <Div>ارسال کننده</Div>
                </TableHeader>
                <TableHeader>
                  <Div>
                    وضعیت
                    <Arrows
                      onClick={() => setFilters({ status: !filters.status })}
                    >
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
                    <TitleFilter status={status}>
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, confirmed: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          پاسخ داده شده{" "}
                        </h1>
                        {status.confirmed && (
                          <span
                            onClick={() => {
                              setStatus({ ...status, confirmed: false });
                              setFilters({ ...filters, status: false });
                            }}
                          >
                            X
                          </span>
                        )}
                      </div>
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, pending: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          باز نشده
                        </h1>
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
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, failed: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          بسته شده{" "}
                        </h1>
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
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, read: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          خوانده شده
                        </h1>
                        {status.read && (
                          <span
                            onClick={() => {
                              setStatus({ ...status, read: false });
                              setFilters({ ...filters, status: false });
                            }}
                          >
                            X
                          </span>
                        )}
                      </div>
                    </TitleFilter>
                  )}
                </TableHeader>
                <TableHeader>تاریخ و ساعت ارسال</TableHeader>
              </>
            ) : (
              <>
                <TableHeader>کد ارسال</TableHeader>
                <TableHeader>عنوان ارسال</TableHeader>
                <TableHeader>
                  <Div>دریافت کننده</Div>
                </TableHeader>
                <TableHeader>
                  <Div>
                    وضعیت
                    <Arrows
                      onClick={() => setFilters({ status: !filters.status })}
                    >
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
                    <TitleFilter status={status}>
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, confirmed: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          پاسخ داده شده{" "}
                        </h1>
                        {status.confirmed && (
                          <span
                            onClick={() => {
                              setStatus({ ...status, confirmed: false });
                              setFilters({ ...filters, status: false });
                            }}
                          >
                            X
                          </span>
                        )}
                      </div>
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, pending: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          باز نشده
                        </h1>
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
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, failed: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          بسته شده{" "}
                        </h1>
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
                      <div>
                        <h1
                          onClick={() => {
                            setStatus({ ...status, read: true });
                            setFilters({ ...filters, status: false });
                          }}
                        >
                          {" "}
                          خوانده شده
                        </h1>
                        {status.read && (
                          <span
                            onClick={() => {
                              setStatus({ ...status, read: false });
                              setFilters({ ...filters, status: false });
                            }}
                          >
                            X
                          </span>
                        )}
                      </div>
                    </TitleFilter>
                  )}
                </TableHeader>
                <TableHeader>تاریخ و ساعت ارسال</TableHeader>
              </>
            )}
            <TableHeader>مشاهده سند</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows?.slice(0, visibleRows).map((request) => (
            <VodRow
              key={request.id}
              {...request}
              domain={domain}
              subdomain={subdomain}
            />
          ))}
        </tbody>
      </Table>
      {visibleRows < rows.length && (
        <Loader>
          <button onClick={handleLoadMore}>نمایش موارد بیشتر</button>
        </Loader>
      )}
    </Container>
  );
};

export default VodList;
