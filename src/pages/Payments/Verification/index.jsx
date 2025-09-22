import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import psc from "../../../assets/gif/psc.gif";
import useRequest from "../../../services/Hooks/useRequest";
import PrintModal from "../../Profile/Tabs/transactions-tab/PrintModal";

export default function Verification() {
  const [payment, setPayment] = useState({});
  const [openPrint, setOpenPrint] = useState(true);
  const { Request } = useRequest();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    Request("user/payments/latest").then((response) => {
      setPayment(response.data.data);
    });
  }, []);

  return (
    <PrintModal
      code={payment?.id}
      date={payment?.created_at?.split(" ")[0]} // assuming date format is "YYYY-MM-DD HH:mm:ss"
      time={payment?.created_at?.split(" ")[1]}
      status={payment?.status?.toString()}
      count={payment?.count}
      gif={psc} // you need to provide correct path
      setOpenPrint={(value) => {
        setOpenPrint(value);
        if (!value) {
          navigate("/metaverse");
        }
      }}
    />
  );
}
