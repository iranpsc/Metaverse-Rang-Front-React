import PropertyCard from "./PropertyCard";
import Title from "../../../../../components/Title";

import styled from "styled-components";
import SearchInput from "../../../../../components/SearchInput";
import useRequest from "../../../../../services/Hooks/useRequest";
import {
  getTranslation,
  ToastError,
  ToastSuccess,
} from "../../../../../services/Utility";

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

const PropertySelect = ({ data, setData }) => {
  const { Request, HTTP_METHOD } = useRequest();
  const selectDynasty = (id) => {
    Request(`dynasty/create/${id}`, HTTP_METHOD.POST)
      .then((response) => {
        setData({ ...response.data.data });
        ToastSuccess("سلسله با موفقیت تاسیس شد.");
      })
      .catch((error) => {
        ToastError(error?.response?.data?.message || "خطایی رخ داد.");
      });
  };
  return (
    <Container>
      <Top>
        <Title title={getTranslation(809)} />
        <SearchInput
          placeholder={getTranslation(849)}
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
              label={getTranslation(818)}
              onClick={() => selectDynasty(feature.id)}
            />
          ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
