import { MdKeyboardArrowDown } from "react-icons/md";
import RequestRow from "./RequestRow";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  border-radius: 0.25rem;

  /* width: 73vw !important; */
  overflow-x: auto;
  min-height: 93vh;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 640px) {
    /* width: 75vw !important; */
  }
  @media (min-width: 840px) {
    min-height: 80vh !important;
  }
  @media (min-width: 1024px) {
    /* width: 83vw !important; */
  }
  @media (min-width: 1280px) {
    /* width: 78.5vw !important; */
  }
  @media (min-width: 1360px) {
    /* width: 64.5vw !important; */
  }
  @media (min-width: 1920px) {
    width: auto !important;
    min-height: 55vh;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 994px;
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
  background-color: #1a1a18;
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
  background-color: #1a1a18;
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
    color: #ffffff;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
  h2 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
  h3 {
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
`;
const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: #1a1a18;
  div {
    position: relative;
    padding-right: 5px;
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
    font-size: 16px;
    color: #dedee9;
    font-weight: 400;
    cursor: pointer;
    &:first-of-type {
      margin-bottom: 10px;
    }
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
  color: #ffffff;
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
    color: white;
    border: none;
  }
`;

const SendRequestsList = ({ rows, member, status, setStatus, setMember }) => {
  const [visibleRows, setVisibleRows] = useState(10);

  const [filters, setFilters] = useState({
    status: false,
    member: false,
  });

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ارسال به</TableHeader>
            <TableHeader date>تاریخ و ساعت ارسال</TableHeader>
            <TableHeader>
              <Div>
                نسبت خانوادگی
                <Arrows onClick={() => setFilters({ member: !filters.member })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${
                        filters.member ? "rotate(180deg)" : "rotate(360deg)"
                      }`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.member && (
                <StatusFilter>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.child && "#3B3B3B"}`,
                    }}
                  >
                    <h1
                      onClick={() => {
                        setMember({ ...member, child: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      فرزند
                    </h1>
                    {member.child && (
                      <span
                        onClick={() => {
                          setMember({ ...member, child: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.wife && "#3B3B3B"}`,
                    }}
                  >
                    <h2
                      onClick={() => {
                        setMember({ ...member, wife: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      همسر
                    </h2>
                    {member.wife && (
                      <span
                        onClick={() => {
                          setMember({ ...member, wife: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.sister && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, sister: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      خواهر
                    </h3>
                    {member.sister && (
                      <span
                        onClick={() => {
                          setMember({ ...member, sister: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.brother && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, brother: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      برادر
                    </h3>
                    {member.brother && (
                      <span
                        onClick={() => {
                          setMember({ ...member, brother: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.father && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, father: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      پدر
                    </h3>
                    {member.father && (
                      <span
                        onClick={() => {
                          setMember({ ...member, father: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      borderRadius: "5px",
                      backgroundColor: `${member.mother && "#3B3B3B"}`,
                    }}
                  >
                    <h3
                      onClick={() => {
                        setMember({ ...member, mother: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      مادر
                    </h3>
                    {member.mother && (
                      <span
                        onClick={() => {
                          setMember({ ...member, mother: false });
                          setFilters({ ...filters, member: false });
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
                وضعیت درخواست
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
                <TitleFilter>
                  <div
                    style={{
                      backgroundColor: `${status.confirmed && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, confirmed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      تایید شده
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
                  <div
                    style={{
                      backgroundColor: `${status.pending && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, pending: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      در دست بررسی
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
                  <div
                    style={{
                      backgroundColor: `${status.failed && "#3B3B3B"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, failed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {" "}
                      رد شده
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
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader subject>
              <Div>پاداش دریافتی</Div>
            </TableHeader>
            <TableHeader>مشاهده</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.slice(0, visibleRows).map((request) => (
            <RequestRow key={request.id} {...request} />
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

export default SendRequestsList;
