import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../../../../Assets/images/searchIcon.png";
import CrossIcon from "../../../../../Assets/images/cross.png";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackIcon from "../../../../../Assets/images/back.png";

const ParentInput = styled.div`
  width:50%;
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
  cursor: pointer;
  &:nth-child(odd) {
    background-color: #f1f2f3;
  }
`;

const ProfilePhoto = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;
const IconBack = styled.img`
  width: 60px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content:space-around ;
`;

export default function UserSearch({
  setCurrentUser,
  currentUser,
  setCurrentUserId,
  handleBack,
}) {
  const [query, setQuery] = useState("");
  const { Request, HTTP_METHOD } = useRequest();
  const [users, setUsers] = useState([]);

  const SearchHandler = () => {
    Request("dynasty/search", HTTP_METHOD.POST, { searchTerm: query }).then(
      (response) => {
        setUsers([response.data]);
      }
    );
  };

  const onClickHandler = (code, id) => {
    setCurrentUser(code);
    setCurrentUserId(id);
    setQuery(code);
    setUsers([]);
  };

  const onRemoveHandler = () => {
    setCurrentUser(null);
    setCurrentUserId(null);
    setQuery("");
    setUsers([]);
  };
  return (
    <Container>
      <IconBack src={BackIcon} onClick={handleBack} />
      <ParentInput>
        <InputSearch
          disabled={currentUser}
          type="text"
          placeholder="جستجو کنید"
          onChange={(e) => setQuery(e.target.value)}
          value={currentUser ? currentUser : query}
        />

        {users.length > 0 && (
          <UserContainer>
            {users.slice(0, 2).map((user) => (
              <UserItem onClick={() => onClickHandler(user?.code, user?.id)}>
                <p>{user.name}</p>
                <ProfilePhoto src={user.image} alt="" />
              </UserItem>
            ))}
          </UserContainer>
        )}

        {currentUser || users.length > 0 ? (
          <IconSearch src={CrossIcon} onClick={onRemoveHandler} />
        ) : (
          <IconSearch src={SearchIcon} onClick={SearchHandler} />
        )}
      </ParentInput>
    </Container>
  );
}
