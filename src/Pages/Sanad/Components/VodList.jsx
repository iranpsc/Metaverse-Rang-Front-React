import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import VodRow from "../Tabs/recieve/VodRow";
import { getFieldTranslationByNames } from "../../../Services/Utility";

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
  @media (min-width: 1920px) {
    width: 100% !important;
  }
`;

const TableHead = styled.thead`
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  border-radius: 10px !important;
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  position: relative;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
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
  width: max-content;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};
  div {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right: 5px;
    border-radius: 10px;
    &:hover {
      background-color: ${(props) =>
        props.theme.colors.newColors.otherColors.inputBg};
      transition: all 0.2s linear;
    }
    span {
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

  status,
  setStatus,
  domain,
  subdomain,
}) => {
  const [visibleRows, setVisibleRows] = useState(10);
  const [filters, setFilters] = useState({ status: false });

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  const handleFilterClick = (filterKey) => {
    setStatus((prevStatus) => ({
      ...prevStatus,
      [filterKey]: !prevStatus[filterKey],
    }));
    setFilters({ status: false });
  };

  const renderStatusFilters = () => (
    <TitleFilter status={status}>
      {["confirmed", "pending", "failed", "read"].map((filterKey) => (
        <div key={filterKey}>
          <h1 onClick={() => handleFilterClick(filterKey)}>
            {filterKey === "confirmed"
              ? getFieldTranslationByNames("send-vod", "answered")
              : filterKey === "pending"
              ? getFieldTranslationByNames("send-vod", "not opened")
              : filterKey === "failed"
              ? getFieldTranslationByNames("send-vod", "closed")
              : getFieldTranslationByNames("send-vod", "read")}
          </h1>
          {status[filterKey] && (
            <span onClick={() => handleFilterClick(filterKey)}>X</span>
          )}
        </div>
      ))}
    </TitleFilter>
  );

  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>
              {getFieldTranslationByNames("send-vod", "document code")}
            </TableHeader>
            <TableHeader>
              {getFieldTranslationByNames("send-vod", "document title")}
            </TableHeader>
            <TableHeader>
              <Div>{getFieldTranslationByNames("send-vod", "sender")}</Div>
            </TableHeader>
            <TableHeader>
              <Div>
                {getFieldTranslationByNames("send-vod", "status")}
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
              {filters.status && renderStatusFilters()}
            </TableHeader>
            <TableHeader>
              {getFieldTranslationByNames(
                "send-vod",
                "date and time of sending"
              )}
            </TableHeader>
            <TableHeader>
              {getFieldTranslationByNames("send-vod", "view the document")}
            </TableHeader>
          </tr>
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
