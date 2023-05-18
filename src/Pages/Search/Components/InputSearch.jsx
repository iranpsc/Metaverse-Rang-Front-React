import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import { SearchIcon, CrossIcon } from "../../../Assets/images";

import useRequest from "../../../Services/Hooks/useRequest";

const ParentInput = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputSearch = styled.input`
  width: 100%;
  text-align: right;
  direction: rtl;
  padding: 8px 16px;
  width: 100%;
  margin-bottom: 16px;
  font-size: 1.3rem !important;
  font-family: iransans;
`;

const IconSearch = styled.img`
  width: 32px;
  height: 32px;
  left: 8px;
  top: 8px;
  position: absolute;
  cursor: pointer;
`;

const UserContainer = styled.div`
  position: absolute;
  background: #fff;
  padding: 8px;
  z-index: 5002;
  width: 100%;
  top: 56px;
  border-radius: 8px;
`;

const UserItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  height: 200px;
  width: 100%;
`;

const ProfilePhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export default function InputSearch({
  setCurrentUser,
  currentUser,
  setCurrentUserId,
  isCitizen,
}) {
  const [query, setQuery] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [users, setUsers] = useState([]);

  const SearchHandler = useCallback(() => {
    Request("search/users", HTTP_METHOD.POST, { searchTerm: query }).then(
      (response) => {
        setUsers(response.data.data);
      }
    );
  }, [HTTP_METHOD, Request, query]);

  const onRemoveHandler = useCallback(() => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setQuery("");
    setUsers([]);
  }, [setCurrentUser, setCurrentUserId]);

  const slicedUsers = useMemo(() => users.slice(0, 2), [users]);

  return (
    <ParentInput>
      <InputSearch
        disabled={currentUser}
        type="text"
        placeholder={`${
          isCitizen ? " شناسه شهروند یا نام را جستجوی کنید" : "شناسه ملک را وارد کنید "
        }`}
        onChange={(e) => setQuery(e.target.value)}
        value={currentUser ? currentUser : query}
      />

      {slicedUsers.length > 0 && (
        <UserContainer>
          {slicedUsers.map((user) => (
            <UserItem></UserItem>
          ))}
        </UserContainer>
      )}

      {currentUser || slicedUsers.length > 0 ? (
        <IconSearch src={CrossIcon} onClick={onRemoveHandler} />
      ) : (
        <IconSearch src={SearchIcon} onClick={SearchHandler} />
      )}
    </ParentInput>
  );
}
