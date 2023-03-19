import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../../../../Services/Utility";
import {
  ContainerOperation,
  ContainerVariable,
  InputVariable,
  TitleOperation,
  TitleVariable,
} from "../../../Styles";

export default function Variable({ settings }) {
  const { Request, HTTP_METHOD } = useRequest();

  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    automatic_logout: settings?.automatic_logout,
    checkout_days_count: settings?.checkout_days_count
  });

  useEffect(() => {
    setFormData({
      automatic_logout: settings?.automatic_logout,
      checkout_days_count: settings?.checkout_days_count
    })
  }, [settings])

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const onSubmit = () => {
    if(formData.automatic_logout < 1) {
      return ToastError("خروج اتوماتیک باید بیشتر از 1 دقیقه باشد.");
    }

    if(formData.checkout_days_count < 3) {
      return ToastError("واریز اتوماتیک باید بیشتر از 3 روز باشد.");
    }

    if(formData.checkout_days_count > 1000) {
      return ToastError("واریز اتوماتیک باید کمتر از 1000 روز باشد.");
    }

    if(formData.automatic_logout > 55) {
      return ToastError("خروج اتوماتیک باید کمتر از 55 دقیقه باشد.");
    }

    Request('settings', HTTP_METHOD.POST, formData).then(response => {
      ToastSuccess("متغییر های الزامی با موفقیت بروزرسانی شد.");
    }).catch(error => {
      if (error.response.status === 410) {
        ToastError("جهت ادامه امنیت حساب کاربری خود را غیر فعال کنید!")
        return Navigate("/metaverse/confirmation");
      } else {
        ToastError(error.response.data.message)
      }
    })
  }

  return (
    <ContainerOperation>
      <TitleOperation>متغییر های الزامی</TitleOperation>

      <Form onSubmit={onSubmit} options={{ style: {gap: 16} }}>
        <ContainerVariable>
          <InputVariable
            name="checkout_days_count"
            type="number"
            placeholder="3"
            value={formData.checkout_days_count}
            onChange={onChangeHandler}
          />
          <TitleVariable>زمان تسویه حساب بازه زمانی | روزانه</TitleVariable>
        </ContainerVariable>

        <ContainerVariable>
          <InputVariable
            name="automatic_logout"
            type="number"
            placeholder="3"
            value={formData.automatic_logout}
            onChange={onChangeHandler}
          />
          <TitleVariable>خروج اتوماتیک از حساب کاربری | دقیقه</TitleVariable>
        </ContainerVariable>

        <Submit
          text="ذخیره شود"
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
