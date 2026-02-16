import ResultCard from "./ResultCard";

import styled from "styled-components";
import { useCallback, useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import { useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
`;
const Container = styled.div`
  padding: 15px;
  overflow-y: auto;
  height: 90%;
`;
const P = styled.p`
  color: ${(props) => props.theme.colors.newColors.shades[30]};
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
`;
const SearchPropertyTab = () => {
  const debounceRef = useRef(null);

  const [searched, setSearched] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();

  const searchHandler = useCallback(
    (query) => {
      if (!query || query.trim() === "") {
        setData([]);
        setIsLoading(false);
        return;
      }

      setIsLoading(true);
      searchAPI(Request, HTTP_METHOD, query)
        .then((response) => {
          setData(response.data.data);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [Request, HTTP_METHOD],
  );
  useEffect(() => {
    if (!searched.trim()) {
      setData([]);
      setIsLoading(false);
      return;
    }

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchHandler(searched);
    }, 500);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [searched]);

  const handleInputChange = (e) => {
    setSearched(e.target.value);
  };
  return (
    <Container>
      <SearchInput
        onchange={handleInputChange}
        value={searched}
        placeholder={getFieldTranslationByNames("40")}
        onSearch={searchHandler}
      />
      {isLoading ? (
        <P>درحال دریافت اطلاعات</P> //انجام نشده تا بعدا لودینگ جای این قرار بگیرد
      ) : data.length === 0 ? (
        <P>{getFieldTranslationByNames("37")}</P>
      ) : (
        <Wrapper>
          {data.map((item, i) => {
            const system = item.owner_code == "HM-2000000" ? true : false;
            return <ResultCard key={i} item={item} system={system} />;
          })}
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

export default SearchPropertyTab;
