import Modal from "./Modal";
import PropertyCard from "../dynasty-establish/PropertyCard";
import SearchInput from "../../../../../Components/SearchInput";
import Title from "../../../../../Components/Title";
import styled from "styled-components";
import { useState } from "react";

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

const Convert = () => {
  const [modal, setModal] = useState(false);
  return (
    <Container>
      <Div>
        <Title title="انتقال ملک" />
        <SearchInput placeholder="جستجوی شناسه..." />
      </Div>
      <Wrapper>
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
        <PropertyCard label="انتقال" onClick={() => setModal(true)} />
      </Wrapper>
      {modal && <Modal setModal={setModal} />}
    </Container>
  );
};

export default Convert;
