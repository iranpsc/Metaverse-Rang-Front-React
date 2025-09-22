import Modal from "../../../components/Modal";
import { TransactionContext } from "../../../layouts/map";
import { useContext } from "react";
import SuccessTransaction from "./components/successTransaction";
import FailedTransaction from "./components/failedTransaction";
export default function TransactionPayments() {
  const { selectedTransaction } = useContext(TransactionContext);
  return (
    <Modal title="جزئیات تراکنش " disabled>
      {selectedTransaction.status === 1 ? (
        <SuccessTransaction data={selectedTransaction} />
      ) : selectedTransaction.status === -1 ? (
        <FailedTransaction data={selectedTransaction} />
      ) : (
        ""    
      )}
    </Modal>
  );
}
