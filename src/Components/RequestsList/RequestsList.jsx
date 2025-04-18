import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
import { useState } from "react";
import RequestRow from "../../pages/Profile/Tabs/dynasty/sent/RequestRow";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Container = styled.div`
  border-radius: 0.25rem;

  width: 73vw !important;
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
    width: 64.5vw !important;
  }
  @media (min-width: 1920px) {
    width: auto !important;
    min-height: 55vh;
  }
  margin-top: 20px;
`;

const Table = styled.table`
  width: 994px;

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
    font-weight: 400;
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
  }
  h2 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
    font-weight: 400;
    font-size: 16px;
    border-radius: 5px;
    padding: 2px 18px;
    cursor: pointer;
    margin: 10px 0;
  }
  h3 {
    color: ${(props) => props.theme.colors.newColors.shades.title};
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
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  div {
    position: relative;
    padding-right: 5px;
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
const RequestsList = ({
  rows,
  member,
  status,
  setStatus,
  setMember,
  setShowDetails, // Optional prop
  type, // 'send' or 'receive'
}) => {
  const [visibleRows, setVisibleRows] = useState(10);
  const [filters, setFilters] = useState({
    status: false,
    member: false,
  });

  const handleLoadMore = () => {
    setVisibleRows((prevVisibleRows) => prevVisibleRows + 10);
  };

  const handleMemberFilter = (memberType) => {
    setMember({ ...member, [memberType]: true });
    setFilters({ ...filters, member: false });
  };

  const handleMemberRemove = (memberType) => {
    setMember({ ...member, [memberType]: false });
    setFilters({ ...filters, member: false });
  };

  const handleStatusFilter = (statusType) => {
    setStatus({ ...status, [statusType]: true });
    setFilters({ ...filters, status: false });
  };

  const handleStatusRemove = (statusType) => {
    setStatus({ ...status, [statusType]: false });
    setFilters({ ...filters, status: false });
  };

  const memberTypes = [
    { key: "child", label: 129, type: "h1" },
    { key: "wife", label: 825, type: "h2" },
    { key: "sister", label: 127, type: "h3" },
    { key: "brother", label: 128, type: "h3" },
    { key: "father", label: 125 , type: "h3" },
    { key: "mother", label: 126, type: "h3" },
  ];

  const statusTypes = [
    { key: "confirmed", label: 854  },
    { key: "pending", label: 852 },
    { key: "failed", label: 853 },
  ];

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>{type === "send" ?getFieldTranslationByNames(144) : getFieldTranslationByNames(111)}</TableHeader>
            <TableHeader date> {getFieldTranslationByNames(850)}</TableHeader>
            <TableHeader>
              <Div>
     {getFieldTranslationByNames(145)}
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
                  {memberTypes.map(({ key, label, type }) => (
                    <div
                      key={key}
                      style={{
                        borderRadius: "5px",
                        backgroundColor: `${member[key] && "#3B3B3B"}`,
                      }}
                    >
                      {React.createElement(
                        type,
                        {
                          onClick: () => handleMemberFilter(key),
                        },
                        getFieldTranslationByNames(label)
                      )}
                      {member[key] && (
                        <span onClick={() => handleMemberRemove(key)}>X</span>
                      )}
                    </div>
                  ))}
                </StatusFilter>
              )}
            </TableHeader>
            <TableHeader title>
              <Div>
            {getFieldTranslationByNames(146)}
          
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
                  {statusTypes.map(({ key, label }) => (
                    <div
                      key={key}
                      style={{
                        backgroundColor: `${status[key] && "#3B3B3B"}`,
                        borderRadius: "10px",
                      }}
                    >
                      <h1 onClick={() => handleStatusFilter(key)}>{getFieldTranslationByNames(label)}</h1>
                      {status[key] && (
                        <span onClick={() => handleStatusRemove(key)}>X</span>
                      )}
                    </div>
                  ))}
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader subject>
              <Div>
                {getFieldTranslationByNames(851)}
              </Div>
            </TableHeader>
            <TableHeader>{getFieldTranslationByNames(147)}</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {rows.slice(0, visibleRows).map((request) => (
            <RequestRow
              key={request.id}
              {...request}
              type={type}
              setShowDetails={setShowDetails}
            />
          ))}
        </tbody>
      </Table>
      {visibleRows < rows.length && (
        <Loader>
          <button onClick={handleLoadMore}>{getFieldTranslationByNames(1410)}</button>
        </Loader>
      )}
    </Container>
  );
};

export default RequestsList;
