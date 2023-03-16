import { phoneNumberNormalizer, phoneNumberValidator } from "@persian-tools/persian-tools";
import React, { useState } from "react";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import Input from "../../../../../Components/Inputs/Input";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../../../../Services/Utility";
import {
  ContainerOperation,
  CounterChange,
  PermissionToChange,
  SpanPermission,
  TitleOperation,
} from "../../../Styles";

export default function ChangePhone({ settings }) {
  const [formData, setFormData] = useState({
    phone: "",
    code: ""
  });
  const { Request, HTTP_METHOD } = useRequest('')
  const [sentPhone, setSentPhone] = useState(false);

  const onSubmitHandler = () => {
    try {
      phoneNumberValidator(phoneNumberNormalizer(formData.phone, "0"))
    } catch {
      return ToastError("شماره تلفن معتبر نمی باشد.")
    }
    if(!sentPhone) {
      Request('reset/phone', HTTP_METHOD.POST, { phone: phoneNumberNormalizer(formData.phone, "0") }).then(() => {
        setSentPhone(true);
        ToastSuccess('کد تایید باموفقیت به شماره تلفن شما ارسال شد.');
      }).catch(error => {
        ToastError(error.response.data.message)
      });
    } else {
      if(formData.code.length === 6) {
        Request('reset/phone/verify', HTTP_METHOD.POST, { code: formData.code }).then(() => {
          setSentPhone(false);
          setFormData({
            phone: "",
            code: ""
          });
          ToastSuccess('شماره تلفن با موفقیت بروزرسانی شد.');
        }).catch(() => {
          ToastError('مشکلی در بروزرسانی شماره تلفن به وجود امد.')
        });
      } else {
        ToastError('کد تایید باید 6 کاراکتر داشته باشد.')
      }
    }
  };

  return (
    <ContainerOperation>
      <PermissionToChange>
        <CounterChange>{settings?.phone_reset_count}</CounterChange>
        <SpanPermission>مجوز تغییر </SpanPermission>
      </PermissionToChange>

      <TitleOperation>تغییر شماره موبایل در سراسر متاورس</TitleOperation>

      <Form onSubmit={onSubmitHandler} options={{ style: { gap: 16 } }}>
        <Input
          type="number"
          placeholder="شماره تلفن جدید"
          name="phone"
          dispatch={setFormData}
          className="rtl-placeholder mb-0"
          value={formData.phone}
          style={{ padding: "2px 8px" }}
          maxLength={11}
          options={{ disabled: sentPhone }}
        />

        <Input
          type="number"
          placeholder="کد تایید"
          name="code"
          dispatch={setFormData}
          className="rtl-placeholder mb-0"
          value={formData.code}
          style={{ padding: "2px 8px" }}
          maxLength={6}
          options={{ disabled: !sentPhone }}
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
