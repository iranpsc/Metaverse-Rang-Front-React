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
  const [data, setdata] = useState([]);

  const SearchHandler = useCallback(() => {
    Request(
      `${isCitizen ? "search/users" : "search/features"}`,
      HTTP_METHOD.POST,
      { searchTerm: query }
    ).then((response) => {
      setdata(response.data.data);
    });
  }, [HTTP_METHOD, Request, query]);

  const onRemoveHandler = useCallback(() => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setQuery("");
    setdata([]);
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

      {data.length > 0 && (
        <UsersContainer>
          {data.map((data) => {
            return isCitizen ? (
              <UserContainer user={data} />
            ) : (
              <FeatureContainer feature={data} />
            );
          })}
        </UsersContainer>
      )}

      {currentUser || data.length > 0 ? (
        <IconSearch src={CrossIcon} onClick={onRemoveHandler} />
      ) : (
        <IconSearch src={SearchIcon} onClick={SearchHandler} />
      )}
    </ParentInput>
  );
}
