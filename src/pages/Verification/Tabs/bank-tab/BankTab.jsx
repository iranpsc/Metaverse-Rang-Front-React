import BankCardsUpload from "./BankCardsUpload";

import styled from "styled-components";
import { useEffect, useState } from "react";
import Title from "../../../../components/Title";
import Alert from "../../../../components/Alert/Alert";
import ErrorModal from "../ErrorModal";
import useRequest from "../../../../services/Hooks/useRequest";
import { getFieldTranslationByNames } from "../../../../services/Utility";
import Container from "../../../../components/Common/Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const BankTab = () => {
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState([]);
  const [cards, setCards] = useState([]);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { openErrorModal, setOpenErrorModal } = useState();

  const { Request } = useRequest();
  useEffect(() => {
    Request("bank-accounts").then((response) => {
      setCards(response.data.data);
    });
  }, []);
  return (
    <Container>
      <Wrapper>
        <Title title={getFieldTranslationByNames("888")} />
        {isError && (
          <Alert
            onclick={() => setOpenErrorModal(true)}
            buttonText={getFieldTranslationByNames("882")}
            text={getFieldTranslationByNames("892")}
            info={getFieldTranslationByNames("891")}
            type="error"
          />
        )}
        <BankCardsUpload
          setOpenAddModal={setOpenAddModal}
          openAddModal={openAddModal}
          openDeleteModal={openDeleteModal}
          setOpenDeleteModal={setOpenDeleteModal}
          cards={cards}
          setCards={setCards}
          setIsError={setIsError}
        />
      </Wrapper>
      {openErrorModal && (
        <ErrorModal setOpenErrorModal={setOpenErrorModal} errors={errors} />
      )}
    </Container>
  );
};

export default BankTab;
