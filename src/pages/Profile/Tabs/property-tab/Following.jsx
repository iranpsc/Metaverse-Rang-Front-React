import FollowingCard from "./FollowingCard";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import SearchInput from "../../../Search/components/SearchInput";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useParams } from "react-router-dom";
import Container from "../../../../components/Common/Container";

const List = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Following = () => {
  const [searched, setSearched] = useState("");
  const [followings, setFollowings] = useState([]);
  const { Request } = useRequest();
  const { id } = useParams();
  useEffect(() => {
    const endpoint = id ? `players/${id}/following` : "following";
    Request(endpoint).then((response) => {
      setFollowings(response.data.data);
    });
  }, [id]);

  const filteredItems = followings.filter((item) => {
    const query = searched.toLowerCase().trim();
    const codeMatch = item.code.toLowerCase().includes(query);
    const nameMatch = item.name.toLowerCase().includes(query);

    return codeMatch || nameMatch;
  });

  return (
    <Container>
      <div style={{ marginBottom: "20px" }}>
        <Title title={getFieldTranslationByNames("55")} />
      </div>
      <SearchInput
        placeholder={getFieldTranslationByNames("57")}
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <List>
        {filteredItems.map((item) =>{
        console.log(item)
        return(
          <FollowingCard key={item.id} {...item} online={item.online}  />
        )})}
      </List>
    </Container>
  );
};

export default Following;
