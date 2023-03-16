import React, { useState } from "react";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import Input from "../../../../../Components/Inputs/Input";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { EmailValidator, ToastError, ToastSuccess } from "../../../../../Services/Utility";
import {
  ContainerOperation,
  CounterChange,
  PermissionToChange,
  SpanPermission,
  TitleOperation,
} from "../../../Styles";

export default function ChangeEmail({ settings }) {
  const { Request, HTTP_METHOD } = useRequest();
  const [sentEmail, setSentEmail] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    code: "",
  });

  const onSubmitHandler = () => {
    if(!sentEmail) {
      if(EmailValidator(formData.email)) {
        Request('reset/email', HTTP_METHOD.POST, {email: formData.email}).then(response => {
          setSentEmail(true);
          ToastSuccess("کد تایید به ایمیل شما ارسال شد.");
        }).catch(error => {
          ToastError(error.response.data.message);
        })
      } else {
        ToastError("ایمیل شما معتبر نمی باشد لطفا ایمیل دیگری را امتحان کنید.");
      }
    } else {
      if(formData.code.length === 6) {
        Request('reset/email/verify', HTTP_METHOD.POST, {code: formData.code}).then(response => {
          setSentEmail(false);
          setFormData({
            email: "",
            code: "",
          });
          ToastSuccess("ایمیل با موفقیت بروزرسانی شد.");
        }).catch(error => {
          ToastError(error.response.data.message);
        })
      } else {
        ToastError("کد تایید باید 6 کاراکتر داشته باشد.");
      }
    }
  }

  return (
    <ContainerOperation style={{ borderBottom: "1px dashed #666" }}>
      <PermissionToChange>
        <CounterChange>{settings?.email_reset_count}</CounterChange>
        <SpanPermission>مجوز تغییر </SpanPermission>
      </PermissionToChange>

      <TitleOperation>تغییر ایمیل ورود به متاورس</TitleOperation>

      <Form options={{ style: {gap: 16} }} onSubmit={onSubmitHandler}>
        <Input
          type="email"
          placeholder="ایمیل جدید"
          name="email"
          dispatch={setFormData}
          className="rtl-placeholder mb-0"
          value={formData.email}
          style={{ padding: "2px 8px" }}
          options={{ disabled: sentEmail }}
        />

        <Input
          type="number"
          placeholder="کد تایید"
          name="code"
          dispatch={setFormData}
          className="rtl-placeholder mb-0"
          value={formData.code}
          style={{ padding: "2px 8px" }}
          maxLength={11}
          options={{ disabled: !sentEmail }}
        />

        <Submit
          text="تایید"
          type="primary"
          options={{
            style: {
              width: 130,
            },
          }}
        />
      </Form>
    </ContainerOperation>
  );
}
