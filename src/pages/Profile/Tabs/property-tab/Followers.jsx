import Follower from "./Follower";
import SearchInput from "../../../Search/components/SearchInput";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Title from "../../../../components/Title";
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

const Followers = () => {
  const [searched, setSearched] = useState("");
  const [followers, setFollowers] = useState([]);
  const { Request } = useRequest();
  const { id } = useParams();

  useEffect(() => {
    const endpoint = id ? `players/${id}/followers` : "followers";
    Request(endpoint).then((response) => {
      setFollowers(response.data.data);

    });
  }, [id]);

  const filteredItems = followers.filter((item) => {
    const query = searched.toLowerCase().trim();
    const codeMatch = item.code.toLowerCase().includes(query);
    const nameMatch = item.name.toLowerCase().includes(query);
    return codeMatch || nameMatch;
  });

  return (
    <Container>
      <div style={{ marginBottom: "20px" }}>
        <Title title={getFieldTranslationByNames("38")} />
      </div>
      <SearchInput
        placeholder={getFieldTranslationByNames("57")}
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <List>
        {filteredItems.map((item) =>
        (
          <Follower
            key={item.id}
            {...item}
            setFollowers={setFollowers}
            followers={followers}
            canFollow={item.can.follow}
            online={item.online}
          />
        ))}
      </List>
    </Container>
  );
};

export default Followers;
