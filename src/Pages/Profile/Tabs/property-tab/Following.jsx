import FollowingCard from "./FollowingCard";
import SearchInput from "../../SearchInput";
import Title from "../../Title";
import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  direction: ltr;
  padding-right: 15px;
  padding-top: 20px;
  gap: 20px;
  overflow-y: auto;
  height: 255px;
  @media (min-width: 720px) {
    height: 280px;
  }
  @media (min-width: 740px) {
    height: 242px;
  }
  @media (min-width: 840px) {
    height: 272px;
  }
  @media (min-width: 880px) {
    height: 225px;
  }
  @media (min-width: 890px) {
    height: 295px;
  }
  @media (min-width: 915px) {
    height: 295px;
  }
  @media (min-width: 930px) {
    height: 312px;
  }
  @media (min-width: 1024px) {
    height: 397px;
  }
  @media (min-width: 1180px) {
    height: 454px;
  }
  @media (min-width: 1280px) {
    height: 577px;
  }
  @media (min-width: 1366px) {
    height: 640px;
  }
  @media (min-width: 1400px) {
    height: 560px;
  }
  @media (min-width: 1920px) {
    height: 640px;
  }
`;
const List = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const following_items = [
  { id: 1, code: "HM-230120", name: "Ali Madani Far" },
  { id: 2, code: "HM-208020", name: "Amir Madani Far" },
  { id: 3, code: "HM-220420", name: "nader Madani Far" },
  { id: 4, code: "HM-200020", name: "mohammad Madani Far" },
  { id: 5, code: "HM-220620", name: "yusef Madani Far" },
  { id: 6, code: "HM-204020", name: "shahin Madani Far" },
];
const Following = () => {
  const [followings, setFollowings] = useState(following_items);
  const [searched, setSearched] = useState("");

  const filteredItems = followings.filter((item) => {
    const query = searched.toLowerCase().trim();
    const codeMatch = item.code.toLowerCase().includes(query);
    const nameMatch = item.name.toLowerCase().includes(query);

    return codeMatch || nameMatch; 
  });

  return (
    <Container>
      <div dir="rtl" style={{ marginBottom: "20px" }}>
        <Title title="دنبال شوندگان" />
      </div>
      <SearchInput
        placeholder="جستجو کنید..."
        value={searched}
        onchange={(e) => setSearched(e.target.value)}
      />
      <List>
        {filteredItems.map((item) => (
          <FollowingCard key={item.id} {...item} />
        ))}
      </List>
    </Container>
  );
};

export default Following;
