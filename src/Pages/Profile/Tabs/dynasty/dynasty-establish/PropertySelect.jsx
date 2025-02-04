import PropertyCard from "./PropertyCard";
import Title from "../../../../../Components/Title";

import styled from "styled-components";
import SearchInput from "../../../../../Components/SearchInput";
import { useNavigate } from "react-router-dom";
import useRequest from "../../../../../Services/Hooks/useRequest";

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

const PropertySelect = ({ setMode, data }) => {
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();
  const selectDynasty = (id) => {
    Request(`dynasty/create/${id}`, HTTP_METHOD.POST)
      .then((response) => {
        setDynasty({ ...response.data.data });
        ToastSuccess("سلسله با موفقیت تاسیس شد.");
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return Navigate("/metaverse/confirmation");
        }
        ToastError(error.response.data.message);
      });
  };
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
        {data?.features &&
          Object.values(data.features).map((feature) => (
            <PropertyCard
              key={feature.id}
              propertyId={feature.properties_id}
              stability={feature.stability}
              label="انتقال"
              onClick={(id) => selectDynasty(feature.id)}
            />
          ))}
      </Div>
    </Container>
  );
};

export default PropertySelect;
