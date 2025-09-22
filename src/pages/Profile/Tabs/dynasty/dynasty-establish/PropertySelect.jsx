import PropertyCard from "./PropertyCard";
import Title from "../../../../../Components/Title";

import styled from "styled-components";
import SearchInput from "../../../../../Components/SearchInput";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../../services/Utility";

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

const PropertySelect = ({ setMode, data, setData }) => {
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();
  const selectDynasty = (id) => {
    Request(`dynasty/create/${id}`, HTTP_METHOD.POST)
      .then((response) => {
        setData({ ...response.data.data });
        ToastSuccess("سلسله با موفقیت تاسیس شد.");
      })
      .catch((error) => {
      
        ToastError(error.response.data.message);
      });
  };
  return (
    <Container>
      <Top>
        <Title title={getFieldTranslationByNames(809)} />
        <SearchInput
          placeholder={getFieldTranslationByNames(849)}
          onchange={() => {}}
          value=""
        />
      </Top>
      <Div>
        {data?.features &&
          Object.values(data.features).map((feature) => (
            <PropertyCard
              key={feature.id}
              propertyId={feature.properties_id}
              stability={feature.stability}
              label={getFieldTranslationByNames(818)}
              onClick={(id) => selectDynasty(feature.id)}
            />
          ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
