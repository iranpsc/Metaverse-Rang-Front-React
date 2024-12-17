
import PropertyCard from "./PropertyCard";
import Title from "../../../../../Components/Title";

import styled from "styled-components";
import SearchInput from "../../../../../Components/SearchInput";

const Container = styled.div``;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const PropertySelect = ({ setMode }) => {
  return (
    <Container>
      <Top>
        <Title title="انتخاب ملک" />
        <SearchInput
          placeholder="جستجو شناسه..."
          onchange={() => {}}
          value=""
        />
      </Top>
      <Div>
        {[...Array(10)].map((item) => (
          <PropertyCard onClick={() => setMode(2)} label="انتخاب" key={item} />
        ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
