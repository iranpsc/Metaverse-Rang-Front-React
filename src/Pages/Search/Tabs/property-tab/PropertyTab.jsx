import ResultCard from "./ResultCard";

import styled from "styled-components";
import { useState } from "react";
import SearchInput from "../../Components/SearchInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
`;
const Container = styled.div`
  direction: ltr;
  padding: 20px 15px 20px 0;
  height: 245px;
  overflow-y: auto;
  @media (min-width: 720px) {
    height: 405px;
  }
  @media (min-width: 740px) {
    height: 230px;
  }
  @media (min-width: 840px) {
    height: 255px;
  }
  @media (min-width: 882px) {
    height: 207px;
  }
  @media (min-width: 890px) {
    height: 285px;
  }
  @media (min-width: 930px) {
    height: 300px;
  }
  @media (min-width: 1024px) {
    height: 580px;
  }
  @media (min-width: 1180px) {
    height: 640px;
  }
  @media (min-width: 1280px) {
    height: 665px;
  }
  @media (min-width: 1366px) {
    height: 835px;
  }
  @media (min-width: 1400px) {
    height: 590px;
  }
  @media (min-width: 1920px) {
    height: 725px;
  }
`;
const PropertyTab = () => {
  const [searched, setSearched] = useState("");

  return (
    <Container>
      <SearchInput
        onchange={(e) => setSearched(e.target.value)}
        value={searched}
        placeholder="شناسه ملک یا آدرس را جستجو کنید"
      />
      {searched === "" ? (
        <p
          style={{
            color: "#DEDEE9",
            fontWeight: "500",
            textAlign: "center",
            marginTop: "20px",
            fontSize: "18px",
          }}
        >
          اطلاعات موجود نمی باشد جستجو کنید
        </p>
      ) : (
        <Wrapper>
          {[...Array(4)].map((result, i) => (
            <ResultCard key={i} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default PropertyTab;
