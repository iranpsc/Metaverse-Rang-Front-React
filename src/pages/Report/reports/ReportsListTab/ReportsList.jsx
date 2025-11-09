import { MdKeyboardArrowDown } from "react-icons/md";
import ReportRow from "./ReportRow";
import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import { getFieldTranslationByNames } from "../../../../services/Utility/index";

const Container = styled.div`
  border-radius: 0.25rem;
  overflow-x: auto;
  min-height: 300px;

  margin-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
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
  display: flex;
  flex-direction: column;
  gap: 5px;
  top: 65px;
  width: 170px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  border: 1px solid #9c9c9c53;
  font-size: 16px;
  z-index: 1;
`;

const StatusFilterTitle = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${(p) =>
    p.active
      ? p.theme.colors.newColors.primaryText
      : p.theme.colors.newColors.shades.title};
  &:hover {
    color: ${(props) => props.theme.colors.newColors.primaryText};
  }
  padding: 3px 10px;
  background-color: ${(p) =>
    p.active ? p.theme.colors.shades[80] : "transparent"};
  position: relative;
  &:hover {
    background-color: ${({ theme }) => theme.colors.shades[80]};
    transition: all 0.2s linear;
    /* h1,h2,h3{
        color:white;
      }*/
  }
  span {
    color: red;
    cursor: pointer;
    font-size: 14px;
  }

  h1,
  h2,
  h3 {
    font-weight: 400;
    font-size: 16px;
  }
`;
/*const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.newColors.otherColors.inputBg};
  border: 1px solid #9c9c9c53;

  div {
    position: relative;
    padding-right: 5px;
    
    &:hover {
      background-color: #9c9c9c;
      transition: all 0.2s linear;
      h1{
        color: white;
      }
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
`;*/

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
  text-align: start;
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

const ReportsList = ({
  rows,
  member,
  // status,
  //setStatus,
  setMember,
  domain,
  subdomain,
  hasMore,
  handleLoadMore,
}) => {
  const [visibleRows, setVisibleRows] = useState(10);
  const [filters, setFilters] = useState({
    // status: false,
    member: false,
  });

  const filterRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      filterRef.current &&
      !filterRef.current.contains(event.target) &&
      !event.target.closest(".arrow-container")
    ) {
      setFilters({ /*status: false,*/ member: false });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader style={{ width: "0%", whiteSpace: "nowrap" }}>
              <Div>{getFieldTranslationByNames("1383")}</Div>
            </TableHeader>
            <TableHeader style={{ width: "40%" }}>
              <Div>{getFieldTranslationByNames("19")}</Div>
            </TableHeader>
            <TableHeader style={{ width: "12%", whiteSpace: "nowrap" }}>
              <Div>
                {getFieldTranslationByNames("746")}
                <Arrows
                  className="arrow-container"
                  onClick={() => setFilters({ member: !filters.member })}
                >
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
                <StatusFilter ref={filterRef}>
                  <StatusFilterTitle active={member.displayError}>
                    <h1
                      onClick={() => {
                        setMember({ ...member, displayError: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      {getFieldTranslationByNames("1385")}
                    </h1>
                    {member.displayError && (
                      <span
                        onClick={() => {
                          setMember({ ...member, displayError: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </StatusFilterTitle>
                  <StatusFilterTitle active={member.spellingError}>
                    <h2
                      onClick={() => {
                        setMember({ ...member, spellingError: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      {getFieldTranslationByNames("15")}
                    </h2>
                    {member.spellingError && (
                      <span
                        onClick={() => {
                          setMember({ ...member, spellingError: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </StatusFilterTitle>
                  <StatusFilterTitle active={member.codingError}>
                    <h3
                      onClick={() => {
                        setMember({ ...member, codingError: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      {getFieldTranslationByNames("16")}
                    </h3>
                    {member.codingError && (
                      <span
                        onClick={() => {
                          setMember({ ...member, codingError: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </StatusFilterTitle>
                  <StatusFilterTitle active={member.FPSError}>
                    <h3
                      onClick={() => {
                        setMember({ ...member, FPSError: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      {getFieldTranslationByNames("17")}
                    </h3>
                    {member.FPSError && (
                      <span
                        onClick={() => {
                          setMember({ ...member, FPSError: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </StatusFilterTitle>
                  <StatusFilterTitle active={member.disrespect}>
                    <h3
                      onClick={() => {
                        setMember({ ...member, disrespect: true });
                        setFilters({ ...filters, member: false });
                      }}
                    >
                      {getFieldTranslationByNames("18")}
                    </h3>
                    {member.disrespect && (
                      <span
                        onClick={() => {
                          setMember({ ...member, disrespect: false });
                          setFilters({ ...filters, member: false });
                        }}
                      >
                        X
                      </span>
                    )}
                  </StatusFilterTitle>
                </StatusFilter>
              )}
            </TableHeader>
            {/* <TableHeader style={{ width: "120px" }}>
              <Div>
                {getFieldTranslationByNames("65")}
                <Arrows
                  className="arrow-container"

                onClick={() => setFilters({ status: !filters.status })}>
                  <MdKeyboardArrowDown
                    style={{
                      transform: `${filters.status ? "rotate(180deg)" : "rotate(360deg)"}`,
                    }}
                  />
                </Arrows>
              </Div>
              {filters.status && (
                <TitleFilter ref={filterRef}>
                  <div
                    style={{
                      backgroundColor: `${status.confirmed && "#9c9c9c"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, confirmed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames("1343")}
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
                      backgroundColor: `${status.pending && "#9c9c9c"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, pending: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames("852")}
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
                      backgroundColor: `${status.failed && "#9c9c9c"}`,
                      borderRadius: "10px",
                    }}
                  >
                    <h1
                      onClick={() => {
                        setStatus({ ...status, failed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames("1345")}
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
            </TableHeader>*/}

            <TableHeader style={{ width: "16%", whiteSpace: "nowrap" }}>
              <Div>{getFieldTranslationByNames("64")}</Div>
            </TableHeader>
            <TableHeader style={{ width: "10%", whiteSpace: "nowrap" }}>
              {getFieldTranslationByNames("1380")}
            </TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.slice(0, visibleRows).map((request) => (
            <ReportRow
              key={request.id}
              {...request}
              domain={domain}
              subdomain={subdomain}
            />
          ))}
        </tbody>
      </Table>
      {hasMore && (
        <Loader>
          <button
            onClick={() => {
              handleLoadMore();
              setVisibleRows((prev) => prev + 10);
            }}
          >
            {getFieldTranslationByNames("368")}
          </button>
        </Loader>
      )}
    </Container>
  );
};

export default ReportsList;
