import React from "react";
import { useSearchParams } from "react-router-dom";
import Modal from "../../Components/Modal";
import NewPassword from "./Tabs/NewPassword";
import SendEmail from "./Tabs/SendEmail";




export default function ForgetPassword() {
  const [searchParams, ] = useSearchParams();

  return (
    <Modal title="فراموشی کلمه عبور">

      {!(searchParams.get('token') && searchParams.get('email')) ? 
        <SendEmail/> : <NewPassword />
      }
    </Modal>
  );
}
