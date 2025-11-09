import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import VodRow from "./Tabs/receive/VodRow";
import { getFieldTranslationByNames } from "../../services/Utility";

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
  width: 100%;

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
  gap: 5px;
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.bgContainer};

  h1 {
    font-size: 16px;
    font-weight: 400;

    &:first-of-type {
      margin: 3px 0;
    }
  }
`;
const FilterOption = styled.div`
  padding: 0 7px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s linear;

  background-color: ${(props) =>
    props.active ? props.theme.colors.shades[80] : "transparent"};
  color: ${(props) =>
    props.active ? props.theme.colors.newColors.primaryText : "inherit"};

  &:hover {
    background-color: ${({ theme }) => theme.colors.shades[80]};
    color: ${({ theme }) => theme.colors.newColors.primaryText};
  }

  span {
    color: red;
    cursor: pointer;
    font-size: 14px;
  }
`;

const Arrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const VodList = ({ rows, status, setStatus, domain, subdomain }) => {
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
    <TitleFilter>
      {["confirmed", "pending", "failed", "read"].map((filterKey) => (
        <FilterOption
          key={filterKey}
          active={status[filterKey]}
          onClick={() => handleFilterClick(filterKey)}
        >
          <h1>
            {filterKey === "confirmed"
              ? getFieldTranslationByNames("1343")
              : filterKey === "pending"
              ? getFieldTranslationByNames("1344")
              : filterKey === "failed"
              ? getFieldTranslationByNames("1345")
              : getFieldTranslationByNames("1346")}
          </h1>

          {status[filterKey] && (
<span
  onClick={(e) => {
    e.stopPropagation();
    handleFilterClick(filterKey);
  }}
>
  X
</span>
          )}
        </FilterOption>
      ))}
    </TitleFilter>
  );

  return (
    <Container>
      <Table>
        <TableHead>
          <tr>
            <TableHeader>{getFieldTranslationByNames("1339")}</TableHeader>
            <TableHeader>{getFieldTranslationByNames("1319")}</TableHeader>
            <TableHeader>
              <Div>{getFieldTranslationByNames("1340")}</Div>
            </TableHeader>
            <TableHeader>
              <Div>
                {getFieldTranslationByNames("1341")}
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
            <TableHeader>{getFieldTranslationByNames("64")}</TableHeader>
            <TableHeader>{getFieldTranslationByNames("1342")}</TableHeader>
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
