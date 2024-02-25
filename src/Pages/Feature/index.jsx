import React from "react";
import Modal from "../../Components/Modal";
import FeatureProvider from "./Context/FeatureProvider";
import { useParams } from "react-router-dom";
import ConditionalPage from "./ConditionalPage";

export default function Feature() {
  const { id } = useParams();

  return (
    <FeatureProvider id={id}>
      <Modal type="modal-section-xl" title="اطلاعات VOD">
        <ConditionalPage />
      </Modal>
    </FeatureProvider>
  );
}
