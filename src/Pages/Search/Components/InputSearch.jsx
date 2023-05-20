import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import SearchIcon from "../../../Assets/images/searchIcon.png";
import CrossIcon from "../../../Assets/images/cross.png";

import useRequest from "../../../Services/Hooks/useRequest";
import FeatureContainer from "./FeatureContainer";
import UserContainer from "./UserContainer";

const ParentInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const InputSearch = styled.input`
  width: 100%;
  text-align: right;
  direction: rtl;
  padding: 8px 16px;
  width: 100%;
  margin-bottom: 16px;
  font-size: 1rem !important;
  font-family: iransans;
`;

const IconSearch = styled.img`
  width: 32px;
  height: 32px;
  left: 15px;
  top: 5px;
  position: absolute;
  cursor: pointer;
`;

const UsersContainer = styled.div`
  position: absolute;

  padding: 8px;
  z-index: 5002;
  width: 100%;
  top: 56px;
`;

export default function Search({
  setCurrentUser,
  currentUser,
  setCurrentUserId,
  isCitizen,
}) {
  const [query, setQuery] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = useCallback(() => {
    setIsLoading(true);
    searchAPI(Request, HTTP_METHOD, query, isCitizen).then((response) => {
      setData(response.data.data);
      setIsLoading(false);
    });
  }, [query, isCitizen, Request, HTTP_METHOD]);

  const onRemoveHandler = useCallback(() => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setQuery("");
    setData([]);
  }, [setCurrentUser, setCurrentUserId]);

  return (
    <ParentInput>
      <InputSearch
        disabled={currentUser}
        type="text"
        placeholder={`${
          isCitizen
            ? " شناسه شهروند یا نام را جستجوی کنید"
            : "شناسه ملک را وارد کنید "
        }`}
        onChange={(e) => setQuery(e.target.value)}
        value={currentUser ? currentUser : query}
      />
     {!isLoading && data.length <= 0  && (
         <UsersContainer>
             <p style={{ textAlign: "center" }}>اطلاعات موجود نمیباشد جستجوی کنید</p>
         </UsersContainer>
     )}
     
      {isLoading && (
        <UsersContainer>
          <p style={{ textAlign: "center" }}>درحال دریافت اطلاعات</p>
        </UsersContainer>
      )}
      {data.length > 0 && (
        <UsersContainer>
          {data.map((data) =>
            isCitizen ? (
              <UserContainer user={data} />
            ) : (
              <FeatureContainer feature={data} />
            )
          )}
        </UsersContainer>
      )}
      {currentUser || data.length > 0 ? (
        <IconSearch src={CrossIcon} onClick={onRemoveHandler} />
      ) : (
        <IconSearch src={SearchIcon} onClick={searchHandler} />
      )}
    </ParentInput>
  );
}

function searchAPI(request, method, query, isCitizen) {
  const url = isCitizen ? "search/users" : "search/features";
  const body = { searchTerm: query };
  return request(url, method.POST, body);
}
