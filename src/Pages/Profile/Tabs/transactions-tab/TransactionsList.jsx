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
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const TitleFilter = styled.div`
  position: absolute;
  top: 65px;
  width: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
`;
const SubjectFilter = styled.div`
  position: absolute;
  top: 65px;
  width: max-content;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme.colors.newColors.otherColors.inputBg};
  font-size: 12px;
  div {
    position: relative;
    padding: 4px;

    &:hover {
      background-color: #3b3b3b;
      color: #dedee9;
      transition: all 0.2s linear;
    }
  }
`;

const TableHeader = styled.th`
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.newColors.shades.title};
  position: relative;
  width: ${(props) =>
    props.date ? "235px" : props.subject ? "165px" : props.title && "140px"};
`;

const subjects = [
  { id: 1, label: "buy blue", slug: "blue", gif: blue },
  { id: 2, label: "buy red", slug: "red", gif: red },
  { id: 3, label: "buy yellow", slug: "yellow", gif: yellow },
  { id: 4, label: "buy rial currency", slug: "rial", gif: rial },
  { id: 5, label: "buy psc currency", slug: "psc", gif: psc },
];

const TableBody = styled.tbody``;

const TableHeaderText = styled.span``;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 15px;
`;

const FilterArrows = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const RotatingArrow = styled(MdKeyboardArrowDown)`
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(360deg)")};
`;

const FilterItem = styled.div`
  position: relative;
  padding: ${(props) => props.padding || "0"};
  color: ${(props) => (props.active ? "white" : "black")} !important;
  background-color: ${(props) => (props.active ? "#3B3B3B" : "transparent")};
  border-radius: ${(props) => props.borderRadius || "0"};
  &:hover {
    background-color: #3b3b3b;
    color: #dedee9 !important;
    transition: all 0.2s linear;
  }
`;

const FilterItemText = styled.h1`
  font-size: 16px;
  color: ${(props) => {
    if (props.variant === "success") return "#18c08f";
    if (props.variant === "pending") return "#ffc800";
    if (props.variant === "failed") return "#ff0000";
    return props.theme.colors.newColors.shades.title;
  }};
  background-color: ${(props) => {
    if (props.variant === "success") return "#18c09017";
    if (props.variant === "pending") return "#ffc80017";
    if (props.variant === "failed") return "#ff000017";
    return "transparent";
  }};
  font-weight: 400;
  cursor: pointer;
  margin: ${(props) => props.margin || "0"};
  border-radius: 5px;
  padding: ${(props) => props.padding || "0"};
  display: flex;
  flex-direction: column;
  gap: 3px;
  &:hover {
    color: #dedee9 !important;
  }
`;

const FilterCloseButton = styled.span`
  position: absolute;
  left: -13px;
  top: 4px;
  color: red;
  cursor: pointer;
  font-size: 14px;
`;

const SubjectFilterItem = styled.div`
  display: flex;
  gap: 5px;
  cursor: pointer;
  align-items: center;
  color: ${(props) => (props.active ? "white" : "black")};
  background-color: ${(props) => (props.active ? "#3B3B3B" : "transparent")};
  margin-bottom: ${(props) => (props.isLast ? "0" : "10px")};
  border-radius: 10px;
  padding: 3px;
`;

const SubjectFilterImage = styled.img`
  width: 24px;
  height: 26px;
`;

const SubjectFilterText = styled.h3``;

const TransactionsList = ({
  rows,
  title,
  status,
  subject,
  setStatus,
  setTitle,
  setSubject,
}) => {
  const [filters, setFilters] = useState({
    status: false,
    title: false,
    subject: false,
  });

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>
              <TableHeaderText>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "transaction id"
                )}
              </TableHeaderText>
            </TableHeader>
            <TableHeader date>
              <TableHeaderText>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "date and time of sending"
                )}
              </TableHeaderText>
            </TableHeader>
            <TableHeader>
              <FilterContainer>
                <TableHeaderText>
                  {getFieldTranslationByNames(
                    "citizenship-account",
                    "condition"
                  )}
                </TableHeaderText>
                <FilterArrows
                  onClick={() => setFilters({ status: !filters.status })}
                >
                  <RotatingArrow isOpen={filters.status} />
                </FilterArrows>
              </FilterContainer>
              {filters.status && (
                <StatusFilter>
                  <FilterItem active={status.success} borderRadius="5px">
                    <FilterItemText
                      variant="success"
                      padding="2px 18px"
                      onClick={() => {
                        setStatus({ ...status, success: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "successful"
                      )}
                    </FilterItemText>
                    {status.success && (
                      <FilterCloseButton
                        onClick={() => {
                          setStatus({ ...status, success: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </FilterCloseButton>
                    )}
                  </FilterItem>

                  <FilterItem active={status.pending} borderRadius="5px">
                    <FilterItemText
                      variant="pending"
                      padding="2px 18px"
                      onClick={() => {
                        setStatus({ ...status, pending: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "suspended"
                      )}
                    </FilterItemText>
                    {status.pending && (
                      <FilterCloseButton
                        onClick={() => {
                          setStatus({ ...status, pending: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </FilterCloseButton>
                    )}
                  </FilterItem>

                  <FilterItem active={status.failed} borderRadius="5px">
                    <FilterItemText
                      variant="failed"
                      padding="2px 18px"
                      onClick={() => {
                        setStatus({ ...status, failed: true });
                        setFilters({ ...filters, status: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "unsuccessful"
                      )}
                    </FilterItemText>
                    {status.failed && (
                      <FilterCloseButton
                        onClick={() => {
                          setStatus({ ...status, failed: false });
                          setFilters({ ...filters, status: false });
                        }}
                      >
                        X
                      </FilterCloseButton>
                    )}
                  </FilterItem>
                </StatusFilter>
              )}
            </TableHeader>
            <TableHeader title>
              <FilterContainer>
                <TableHeaderText>
                  {getFieldTranslationByNames(
                    "citizenship-account",
                    "the title of the report"
                  )}
                </TableHeaderText>
                <FilterArrows
                  onClick={() => setFilters({ title: !filters.title })}
                >
                  <RotatingArrow isOpen={filters.title} />
                </FilterArrows>
              </FilterContainer>
              {filters.title && (
                <TitleFilter>
                  <FilterItem active={title.property_buy} borderRadius="10px">
                    <FilterItemText
                      onClick={() => {
                        setTitle({ ...title, property_buy: true });
                        setFilters({ ...filters, title: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "purchase property"
                      )}
                    </FilterItemText>
                    {title.property_buy && (
                      <FilterCloseButton
                        onClick={() => {
                          setTitle({ ...title, property_buy: false });
                          setFilters({ ...filters, title: false });
                        }}
                      >
                        X
                      </FilterCloseButton>
                    )}
                  </FilterItem>
                  <FilterItem
                    active={title.property_dealing}
                    borderRadius="10px"
                  >
                    <FilterItemText
                      onClick={() => {
                        setTitle({ ...title, property_dealing: true });
                        setFilters({ ...filters, title: false });
                      }}
                    >
                      {getFieldTranslationByNames(
                        "citizenship-account",
                        "real estate transaction"
                      )}
                    </FilterItemText>
                    {title.property_dealing && (
                      <FilterCloseButton
                        onClick={() => {
                          setTitle({ ...title, property_dealing: false });
                          setFilters({ ...filters, title: false });
                        }}
                      >
                        X
                      </FilterCloseButton>
                    )}
                  </FilterItem>
                </TitleFilter>
              )}
            </TableHeader>
            <TableHeader subject>
              <FilterContainer>
                <TableHeaderText>
                  {getFieldTranslationByNames(
                    "citizenship-account",
                    "select the subject of the report"
                  )}
                </TableHeaderText>
                <FilterArrows
                  onClick={() => setFilters({ subject: !filters.subject })}
                >
                  <RotatingArrow isOpen={filters.subject} />
                </FilterArrows>
              </FilterContainer>
              {filters.subject && (
                <SubjectFilter>
                  {subjects.map((item, index) => (
                    <SubjectFilterItem
                      key={item.id}
                      active={subject[item.slug]}
                      isLast={index === subjects.length - 1}
                      onClick={() => {
                        setSubject((prev) => ({ ...prev, [item.slug]: true }));
                        setFilters({ ...filters, subject: false });
                      }}
                    >
                      <SubjectFilterImage
                        src={item.gif}
                        alt={item.slug}
                        loading="lazy"
                      />
                      <SubjectFilterText>
                        {getFieldTranslationByNames(
                          "citizenship-account",
                          item.label
                        )}
                      </SubjectFilterText>
                      {subject[item.slug] && (
                        <FilterCloseButton
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
                        </FilterCloseButton>
                      )}
                    </SubjectFilterItem>
                  ))}
                </SubjectFilter>
              )}
            </TableHeader>
            <TableHeader>
              <TableHeaderText>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "the amount of"
                )}
              </TableHeaderText>
            </TableHeader>
            <TableHeader>
              <TableHeaderText>
                {getFieldTranslationByNames(
                  "citizenship-account",
                  "view-print"
                )}
              </TableHeaderText>
            </TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((transaction, index) => (
            <TransactionRow key={index} {...transaction} />
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default TransactionsList;
