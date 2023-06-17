import React, { useContext } from "react";
import styled from "styled-components";
import SuccessTransaction from "./successTransaction";
import FailedTransaction from "./failedTransaction";
import { TransactionContext } from "../../../../Layouts/Map";

const Container = styled.div`
  top: 0;
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: #7777779e;
`;
const ContainerModal = styled.div`
  background-color: #fff;
  padding: 16px;
  padding-bottom: 6px;
  border-radius: 32px;
  min-height: 400px;
  position: relative;
  width: 1024px;
`;
const Title = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const PdfTransaction = () => {
  const  selectedTransaction  = useContext(TransactionContext);
  console.log(selectedTransaction)
  // return (
  //   <Container >
  //     <ContainerModal>
  //       {selectedTransaction.status === 1 ? (
  //         <SuccessTransaction data={selectedTransaction} />
  //       ) : selectedTransaction.status === -1 ? (
  //         <FailedTransaction data={selectedTransaction} />
  //       ) : (
  //         ""
  //       )}
  //     </ContainerModal>
  //   </Container>
  // );
};

export default PdfTransaction;
