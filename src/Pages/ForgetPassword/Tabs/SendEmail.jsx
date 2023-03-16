import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import Submit from "../../../Components/Buttons/Submit";
import Form from "../../../Components/Form";
import Input from "../../../Components/Inputs/Input";
import useRequest from "../../../Services/Hooks/useRequest";


const Container = styled.div`
  width: 100%;
  height: 400px;

  & h3 {
    direction: rtl;
    padding: 16px;
    margin-bottom: 16px;
  }
`;

const Body = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default function SendEmail() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const { Request, HTTP_METHOD } = useRequest();

  const onSubmit = () => {
    Request("forgot-password", HTTP_METHOD.POST, formData).then(() => {
      navigate("/metaverse");
    });
  };

  return (
    <Container>
      <h3>
        رمز عبور خود را فراموش کرده اید؟ برای بازیابی آن، لطفا آدرس ایمیل خود را
        در زیر وارد کنید.
      </h3>

      <Body>
        <Form onSubmit={onSubmit}>
          <Input
            placeholder="example@example.com"
            value={formData.email}
            dispatch={setFormData}
            name="email"
          />

          <Submit type="secondary" text="ارسال" />
        </Form>

        <Link to="/metaverse/login" className="link text-2">
          بازگشت به صفحه ورود
        </Link>
      </Body>
    </Container>
  );
}
