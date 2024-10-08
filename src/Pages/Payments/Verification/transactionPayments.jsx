import Modal from "../../../Components/Modal";
import { TransactionContext } from "../../../Layouts/Map";
import { useContext } from "react";
import SuccessTransaction from "./Components/successTransaction";
import FailedTransaction from "./Components/failedTransaction";
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
