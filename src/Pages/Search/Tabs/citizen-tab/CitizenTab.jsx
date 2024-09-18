import ResultCard from "./ResultCard";

import styled from "styled-components";
import { useState, useCallback } from "react";

import SearchInput from "../../Components/SearchInput";
import useRequest from "../../../../Services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../Services/Utility";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
  @media (min-width: 1920px) {
    margin-bottom: -10px;
  }
`;

const Container = styled.div`
  padding: 20px 15px 20px 0;
  height: 90%;
  overflow-y: auto;
`;
const P = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades[30]};
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;
const CitizenTab = () => {
  const [searched, setSearched] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();

  const searchHandler = useCallback(() => {
    if (searched.trim() === "") return;
    setIsLoading(true);
    searchAPI(Request, HTTP_METHOD, searched).then((response) => {
      setData(response.data.data);
      setIsLoading(false);
    });
  }, [searched, Request, HTTP_METHOD]);

  const handleInputChange = (e) => {
    setSearched(e.target.value);
    searchHandler(); // Trigger search on every keystroke
  };

  return (
    <Container>
      <SearchInput
        onchange={handleInputChange} // Call search on every input change
        value={searched}
        placeholder={getFieldTranslationByNames(
          "search-in-metarang",
          "search for citizen name or id"
        )}
        onSearch={searchHandler} // You can still keep this for the icon click event
      />
      {isLoading ? (
        <P>درحال دریافت اطلاعات</P>
      ) : data.length === 0 ? (
        <P>
          {getFieldTranslationByNames(
            "search-in-metarang",
            "there is no information, search"
          )}
        </P>
      ) : (
        <Wrapper>
          {data.map((item, i) => (
            <ResultCard key={i} user={item} />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

function searchAPI(request, method, query) {
  const url = "search/users";
  const body = { searchTerm: query };
  return request(url, method.POST, body);
}

export default CitizenTab;
