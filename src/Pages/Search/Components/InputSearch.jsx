import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import SearchIcon  from "../../../Assets/images/searchIcon.png";
import  CrossIcon from '../../../Assets/images/cross.png';

import useRequest from "../../../Services/Hooks/useRequest";

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

const UserContainer = styled.div`
  position: absolute;
 
  padding: 8px;
  z-index: 5002;
  width: 100%;
  top: 56px;
`;

const UserItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  width: 100%;
  border-bottom: 1px solid #777;
  padding: 0 10px;
  
`;

const ProfilePhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export default function Search({
  setCurrentUser,
  currentUser,
  setCurrentUserId,
  isCitizen,
}) {
  const [query, setQuery] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [users, setUsers] = useState([]);

  const SearchHandler = useCallback(() => {
    Request(
      `${isCitizen ? "search/users" : "search/features"}`,
      HTTP_METHOD.POST,
      { searchTerm: query }
    ).then((response) => {
      setUsers(response.data.data);
    });
  }, [HTTP_METHOD, Request, query]);

  const onRemoveHandler = useCallback(() => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setQuery("");
    setUsers([]);
  }, [setCurrentUser, setCurrentUserId]);

  const slicedUsers = useMemo(() => users, [users]);

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

      {slicedUsers.length > 0 && (
        <UserContainer>
          {slicedUsers.map((user) => (
            <UserItem>
              <div>11</div>
              <div>22</div>
            </UserItem>
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
