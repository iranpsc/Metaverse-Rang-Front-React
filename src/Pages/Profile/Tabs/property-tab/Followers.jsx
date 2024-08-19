import Follower from "./Follower";
import SearchInput from "../../SearchInput";
import Title from "../../Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  direction: ltr;
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

const followers_items = [
  { id: 1, code: "HM-230120", name: "Ali Madani Far" },
  { id: 2, code: "HM-208020", name: "Amir Madani Far" },
  { id: 3, code: "HM-220420", name: "nader Madani Far" },
  { id: 4, code: "HM-200020", name: "mohammad Madani Far" },
  { id: 5, code: "HM-220620", name: "yusef Madani Far" },
  { id: 6, code: "HM-204020", name: "shahin Madani Far" },
];

const Followers = () => {
  const [followers, setFollowers] = useState(followers_items);
  const [searched, setSearched] = useState("");
  const filteredItems = followers.filter((item) => {
    const query = searched.toLowerCase().trim();
    const codeMatch = item.code.toLowerCase().includes(query);
    const nameMatch = item.name.toLowerCase().includes(query);

    return codeMatch || nameMatch; 
  });
  return (
    <Container>
      <div dir="rtl" style={{ marginBottom: "20px" }}>
        <Title title="پیروان" />
      </div>
      <SearchInput
        placeholder="جستجو کنید..."
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
