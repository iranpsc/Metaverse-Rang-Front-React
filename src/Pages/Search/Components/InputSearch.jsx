import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import SearchIcon from "../../../Assets/images/searchIcon.png";
import CrossIcon from "../../../Assets/images/cross.png";

import useRequest from "../../../Services/Hooks/useRequest";
import FeatureContainer from "./FeatureContainer";
import UserContainer from "./UserContainer";

const Container = styled.div`
  height: 30px;
  border-radius: 5px;
  border: 1px solid #454545;
  padding: 10px 12px;
  color: #84858f;
  direction: rtl;
  background-color: #2c2c2c;
  display: grid;
  align-items: center;
  grid-template-columns: 5px 1fr;
  width: 100%;
  gap: 50px;
  svg {
    color: white;
  }
  input {
    height: 100%;
    background-color: transparent;
    font-size: 18px;
    width: 100% !important;
    outline: none;
    border: none;
    color: white;
  }
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
    <Container>
      <input
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
      {!isLoading && data.length <= 0 && (
        <UsersContainer>
          <p style={{ textAlign: "center" }}>
            اطلاعات موجود نمیباشد جستجوی کنید
          </p>
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
              <UserContainer user={data} key={data.id} />
            ) : (
              <FeatureContainer feature={data} key={data.id} />
            )
          )}
        </UsersContainer>
      )}
      {currentUser || data.length > 0 ? (
        <IconSearch src={CrossIcon} onClick={onRemoveHandler} />
      ) : (
        <IconSearch src={SearchIcon} onClick={searchHandler} />
      )}
    </Container>
  );
}

function searchAPI(request, method, query, isCitizen) {
  const url = isCitizen ? "search/users" : "search/features";
  const body = { searchTerm: query };
  return request(url, method.POST, body);
}
