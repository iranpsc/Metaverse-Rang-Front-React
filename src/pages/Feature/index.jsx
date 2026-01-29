import React from "react";
import Modal from "../../components/Modal";
import FeatureProvider from "./Context/FeatureProvider";
import { useParams, Outlet } from "react-router-dom";

export default function Feature() {
  const { id } = useParams();

  return (
    <FeatureProvider id={id}>
      <Modal type="modal-section-xl" title={"345"}>
        <Outlet  />
      </Modal>
    </FeatureProvider>
  );
}
