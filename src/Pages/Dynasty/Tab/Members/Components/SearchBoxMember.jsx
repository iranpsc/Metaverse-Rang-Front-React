import { useState } from "react";
import styled from "styled-components";
import SearchIcon from "../../../../../Assets/images/searchIcon.png";
import CrossIcon from "../../../../../Assets/images/cross.png";
import useRequest from "../../../../../Services/Hooks/useRequest";
import BackIcon from "../../../../../Assets/images/back.png";
import Checkbox from "../../../../../Components/Inputs/CheckBoxOrange";

const ParentInput = styled.div`
  width: 70%;
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
  background: transparent;
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
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  gap: 10px;
`;

const ProfilePhoto = styled.img`
  border-radius: 100px;
  width: 100%;
`;
const IconBack = styled.img`
  width: 50px;
  rotate: 360deg;
  transform: rotateY(185deg);
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 20px;
`;

const ContainerName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Segoe UI";
`;
const BorderImg = styled.div`
  border-radius: 100%;
  border: 1px solid #777;
  padding: 3px;
  width: 79px;
  height: 79px;
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
              <UserItem>
                <Checkbox/>
                <ContainerName>
                  <p style={{ color: "#0800FF", fontWeight: "700" }}>
                    {user.code}
                  </p>
                  <p style={{ fontWeight: "600" }}>{user.name}</p>
                </ContainerName>
                <BorderImg>
                  <ProfilePhoto src={user.image} alt="" />
                </BorderImg>
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
