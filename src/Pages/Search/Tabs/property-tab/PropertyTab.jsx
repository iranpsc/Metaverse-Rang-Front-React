import ResultCard from "./ResultCard";

import styled from "styled-components";
import { useCallback, useState } from "react";
import SearchInput from "../../Components/SearchInput";
import useRequest from "../../../../Services/Hooks/useRequest";

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
    height: 755px;
  }
`;
const P = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades[30]};
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;
const PropertyTab = () => {
  const [searched, setSearched] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();

  const searchHandler = useCallback(() => {
    if (searched.trim() === "") return;
    setIsLoading(true);
    searchAPI(Request, HTTP_METHOD, searched, true).then((response) => {
      setData(response.data.data);
      setIsLoading(false);
    });
  }, [searched, Request, HTTP_METHOD]);

  return (
    <Container>
      <SearchInput
        onchange={(e) => setSearched(e.target.value)}
        value={searched}
        placeholder="شناسه ملک یا آدرس را جستجو کنید"
        onSearch={searchHandler} // New prop to handle the search trigger
      />
      {isLoading ? (
        <P>درحال دریافت اطلاعات</P>
      ) : data.length === 0 ? (
        <P>اطلاعات موجود نمی باشد جستجو کنید</P>
      ) : (
        <Wrapper>
          {data.map((item, i) => (
            <ResultCard key={i} item={item} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

function searchAPI(request, method, query) {
  const url = "search/features";
  const body = { searchTerm: query };
  return request(url, method.POST, body);
}
export default PropertyTab;
