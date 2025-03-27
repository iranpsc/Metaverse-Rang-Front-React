import Modal from "./Modal";
import PropertyCard from "../dynasty-establish/PropertyCard";
import SearchInput from "../../../../../Components/SearchInput";
import Title from "../../../../../Components/Title";
import styled from "styled-components";
import { useState } from "react";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { getFieldTranslationByNames } from "../../../../../Services/Utility";

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
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const { Request, HTTP_METHOD } = useRequest();
  const Navigate = useNavigate();
  console.log(data);
  const updateDynasty = (id) => {
    setSelectedPropertyId(id);
    setModal(true);
  };

  const handleConfirm = () => {
    Request(`dynasty/${data.id}/update/${selectedPropertyId}`, HTTP_METHOD.POST)
      .then((response) => {
        setDynasty({ ...response.data.data });
        ToastSuccess("VOD جدید با موفقیت بروز گردید.");
        setModal(false);
      })
      .catch((error) => {
        if (error.response.status === 410) {
          ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!");
          return Navigate("/metaverse/confirmation");
        }
        ToastError(error.response.data.message);
        setModal(false);
      });
  };

  return (
    <Container>
      <Div>
        <Title title={getFieldTranslationByNames(809)} />
        <SearchInput placeholder={getFieldTranslationByNames(849)} />
      </Div>
      <Wrapper>
        {data?.features &&
          Object.values(data.features).map((feature) => (
            <PropertyCard
              key={feature.id}
              propertyId={feature.properties_id}
              stability={feature.stability}
              label={getFieldTranslationByNames(818)}
              onClick={(id) => updateDynasty(id)}
            />
          ))}
      </Wrapper>
      {modal && (
        <Modal
          setModal={setModal}
          onConfirm={handleConfirm}
          date={data["dynasty-feature"]["last-updated"]}
        />
      )}
    </Container>
  );
};

export default Convert;
