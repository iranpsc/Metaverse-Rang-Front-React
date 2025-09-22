import Follower from "./Follower";
import SearchInput from "../../../Search/Components/SearchInput";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Title from "../../../../Components/Title";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useParams } from "react-router-dom";

const Container = styled.div`
  padding-right: 15px;
  padding-top: 20px;
  overflow-y: auto;
  height: 242px;
  @media (min-width: 840px) {
    height: 274px;
  }
  @media (min-width: 880px) {
    height: 230px;
  }
  @media (min-width: 890px) {
    height: 297px;
  }
  @media (min-width: 900px) {
    height: 296px;
  }
  @media (min-width: 930px) {
    height: 314px;
  }
  @media (min-width: 1024px) {
    height: 398px;
  }
  @media (min-width: 1180px) {
    height: 595px;
  }
  @media (min-width: 1280px) {
    height: 580px;
  }
  @media (min-width: 1366px) {
    height: 639px;
  }
  @media (min-width: 1400px) {
    height: 560px;
  }
  @media (min-width: 1920px) {
    height: 642px;
  }
`;
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
        <Title
          title={getFieldTranslationByNames("38")}
        />
      </div>
      <SearchInput
        placeholder={getFieldTranslationByNames("57")}
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <List>
        {filteredItems.map((item) => (
          <Follower
            key={item.id}
            {...item}
            setFollowers={setFollowers}
            followers={followers}
          />
        ))}
      </List>
    </Container>
  );
};

export default Followers;
