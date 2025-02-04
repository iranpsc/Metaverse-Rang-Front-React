import Modal from "./Modal";
import PropertyCard from "../dynasty-establish/PropertyCard";
import SearchInput from "../../../../../Components/SearchInput";
import Title from "../../../../../Components/Title";
import styled from "styled-components";
import { useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Convert = ({ data }) => {
  const [modal, setModal] = useState(false);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();

  const updateDynasty = (id) => {
    Request(`dynasty/${data.id}/update/${id}`, HTTP_METHOD.POST)
      .then((response) => {
        setDynasty({ ...response.data.data });
        ToastSuccess("VOD جدید با موفقیت بروز گردید.");
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
      <Div>
        <Title title="انتقال ملک" />
        <SearchInput placeholder="جستجوی شناسه..." />
      </Div>
      <Wrapper>
        {data?.features &&
          Object.values(data.features).map((feature) => (
            <PropertyCard
              key={feature.id}
              propertyId={feature.properties_id}
              stability={feature.stability}
              label="انتقال"
              onClick={(id) => updateDynasty(id)}
            />
          ))}
      </Wrapper>
      {modal && <Modal setModal={setModal} />}
    </Container>
  );
};

export default Convert;
