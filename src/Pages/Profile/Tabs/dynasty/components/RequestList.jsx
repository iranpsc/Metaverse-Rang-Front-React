
import styled from "styled-components";
import { useState, useEffect } from "react";
import Title from "../../../../../Components/Title";
import SearchInput from "../../../../../Components/SearchInput";
import useRequest from "../../../../../Services/Hooks/useRequest";
import {  getFieldTranslationByNames } from "../../../../../Services/Utility";
import { useLanguage } from "../../../../../Services/Reducers/LanguageContext";
import CustomDatePicker from "../../../../../Components/CustomDatePicker";
import useDateFilter from '../../../../../Services/Hooks/useDateFilter';

const Container = styled.div`
  padding: 20px 15px 0px 0;
  overflow-y: auto;
  overflow-x: hidden;

 height: calc(100vh - 110px);
  @media (min-width: 992px) {
    height: calc(100vh - 230px);
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


const RequestList = ({ 
  title,
  requestType,
  ListComponent,
  userField = "to_user"
}) => {
  const { Request } = useRequest();
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState([]);
  const language = useLanguage();
  const { dateRange, setDateRange, filterByDate } = useDateFilter();
  const [status, setStatus] = useState({
    pending: false,
    confirmed: false,
    failed: false,
  });

  const [member, setMember] = useState({
    father: false,
    mother: false,
    child: false,
    sister: false,
    brother: false,
    wife: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Request(`dynasty/requests/${requestType}`);
        const formattedData = response.data.data.map((item) => ({
          id: item.id,
          code: item[userField].code,
          date: item.date,
          time: item.time,
          member: item.relationship,
          status: item.status === 1 ? "confirmed" : item.status === 0 ? "pending" : "failed",
          member_slug: item.relationship,
          gif: item?.prize?.satisfaction || 0,
          psc: item?.prize?.psc || 0,
        }));
        setRows(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [requestType, userField]);

  const filteredItems = rows.filter((row) => {
    const codeMatch = row.code.toString().includes(searched);
    const statusMatch =
      (!status.confirmed && !status.failed && !status.pending) ||
      (status.confirmed && row.status === "confirmed") ||
      (status.failed && row.status === "failed") ||
      (status.pending && row.status === "pending");
    const memberMatch =
      (!member.child &&
        !member.wife &&
        !member.brother &&
        !member.sister &&
        !member.father &&
        !member.mother) ||
      (member.child && row.member_slug === "child") ||
      (member.wife && row.member_slug === "wife") ||
      (member.brother && row.member_slug === "brother") ||
      (member.sister && row.member_slug === "sister") ||
      (member.father && row.member_slug === "father") ||
      (member.mother && row.member_slug === "mother");

    const dateMatch = filterByDate(row);

    return codeMatch && statusMatch && memberMatch && dateMatch;
  });

  return (
    <Container>
      <div>
        <Title title={getFieldTranslationByNames(title)} />
      </div>
      <Div>
        <SearchInput
          onchange={(e) => setSearched(e.target.value)}
          value={searched}
          placeholder={getFieldTranslationByNames(849)}
        />
        <CustomDatePicker
          value={dateRange}
          onChange={setDateRange}
          range={true}
        />
      </Div>
      <ListComponent
        setStatus={setStatus}
        setMember={setMember}
        member={member}
        status={status}
        rows={filteredItems}
      />
    </Container>
  );
};

export default RequestList;