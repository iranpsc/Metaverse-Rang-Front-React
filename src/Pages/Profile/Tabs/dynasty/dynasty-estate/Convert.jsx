import Modal from "./Modal";
import PropertyCard from "../dynasty-establish/PropertyCard";
import SearchInput from "../../../../../Components/SearchInput";
import Title from "../../../../../Components/Title";
import styled from "styled-components";
import { useState, useCallback, useMemo } from "react";
import useRequest from "../../../../../services/Hooks/useRequest";
import { useNavigate } from "react-router-dom";
import { getFieldTranslationByNames, ToastError } from "../../../../../services/Utility";

// Combine styled components
const StyledComponents = {
  Container: styled.div``,
  Wrapper: styled.div`
    display: grid;
    gap: 20px;
    margin-top: 20px;
    
    grid-template-columns: 1fr;
    @media (min-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  Header: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
};

const Convert = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);
  const { Request, HTTP_METHOD } = useRequest();
  const navigate = useNavigate();

  // Memoize filtered features
  const filteredFeatures = useMemo(() => {
    if (!data?.features) return [];
    return Object.values(data.features).filter((feature) =>
      feature.properties_id?.toString().includes(searchTerm)
    );
  }, [data?.features, searchTerm]);

  // Use useCallback for event handlers
  const updateDynasty = useCallback((id) => {
    setSelectedPropertyId(id);
    setModal(true);
  }, []);

  const handleSearch = useCallback((value) => {
    setSearchTerm(value);
  }, []);

  const handleConfirm = useCallback(async () => {
    try {
      const response = await Request(
        `dynasty/${data.id}/update/${selectedPropertyId}`,
        HTTP_METHOD.POST
      );
      setDynasty({ ...response.data.data });
      ToastSuccess("VOD جدید با موفقیت بروز گردید.");
      setModal(false);
    } catch (error) {
    
      ToastError(error.response?.data?.message);
      setModal(false);
    }
  }, [data.id, selectedPropertyId, navigate]);

  return (
    <StyledComponents.Container>
      <StyledComponents.Header>
        <Title title={getFieldTranslationByNames(809)} />
        <SearchInput
          placeholder={getFieldTranslationByNames(849)}
          onchange={(e) => handleSearch(e.target.value)}
          value={searchTerm}
        />
      </StyledComponents.Header>
      <StyledComponents.Wrapper>
        {filteredFeatures.map((feature) => (
          <PropertyCard
            key={feature.id}
            id={feature.id}
            propertyId={feature.properties_id}
            stability={feature.stability}
            label={getFieldTranslationByNames(818)}
            onClick={updateDynasty}
          />
        ))}
      </StyledComponents.Wrapper>
      {modal && (
        <Modal
          setModal={setModal}
          onConfirm={handleConfirm}
          date={data["dynasty-feature"]["last-updated"]}
        />
      )}
    </StyledComponents.Container>
  );
};

export default Convert;
