import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

import ResetPasswordImage from "../../../Assets/images/reset-password.png";
import Submit from "../../../Components/Buttons/Submit";
import ErrorMessage from "../../../Components/ErrorMessage";
import Form from "../../../Components/Form";
import Input from "../../../Components/Inputs/Input";
import useRequest from "../../../Services/Hooks/useRequest";

const ResetPasswordContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 10px;
`;

const ResetPasswordHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & h2 {
    color: #555;
  }
`;

const ResetPasswordBody = styled.div`
  height: 66%;
  padding: 32px;
`;

export default function NewPassword() {
  const [searchParams, ] = useSearchParams();
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    password_confirmation: "",
    email: searchParams.get('email'),
    token: searchParams.get('token')
  });
  
  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    Request('forgot-password/reset/password', HTTP_METHOD.POST, formData).then((response) => {
      navigate('/metaverse/login');
    }).catch(error => {
      setErrors([error.response.data.message]);
    })
  }

  return (
    <ResetPasswordContainer>
      <ResetPasswordHeader>
        <img src={ResetPasswordImage} alt="" />
        <h2>پسورد جدید وارد کنید</h2>
      </ResetPasswordHeader>

      <ResetPasswordBody className="white-box-shadow">
        <Form onSubmit={onSubmit}>
          <Input
            style={{ direction: "rtl" }}
            placeholder="رمز عبور جدید"
            name="password"
            type="password"
            dispatch={setFormData}
            value={formData.password}
          />

          <Input
            style={{ direction: "rtl", margin: 0 }}
            placeholder="تکرار رمز عبور جدید"
            name="password_confirmation"
            type="password"
            dispatch={setFormData}
            value={formData.password_confirmation}
          />

          <ErrorMessage errors={errors} maxList={1}/>

          <Submit text="تایید" type="secondary" options={{ style: {marginTop: 20} }}/>
        </Form>
      </ResetPasswordBody>
    </ResetPasswordContainer>
  );
}
