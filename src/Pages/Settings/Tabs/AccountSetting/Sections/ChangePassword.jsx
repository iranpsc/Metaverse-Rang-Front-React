import React, { useState } from "react";
import Submit from "../../../../../Components/Buttons/Submit";
import Form from "../../../../../Components/Form";
import Input from "../../../../../Components/Inputs/Input";
import useRequest from "../../../../../Services/Hooks/useRequest";
import { ToastError, ToastSuccess } from "../../../../../Services/Utility";
import { ContainerOperation, TitleOperation } from "../../../Styles";

export default function ChangePassword() {
  const [changePassword, setChangePassword] = useState({
    old_password: '',
    password: '',
  });

  const { Request, HTTP_METHOD } = useRequest();

  const onSubmitHandler = () => {
    if(changePassword.old_password.length === 0) {
      ToastError("لطفا پسورد قدیمی را وارد کنید.")
    } else if(!(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/.test(changePassword.password))) {
      ToastError("پسورد شما باید حداقل 8 کاراکتر و حداکثر 16 کاراکتر داشته باشد و داری حروف بزرگ A-Z و حروف کوچک a-z و اعداد 0-9 و دارای سیمبل های !@#$%^&* باشد");
    } else {
      Request('reset/password', HTTP_METHOD.POST, changePassword).then(() => {
        ToastSuccess("کلمه عبور با موفقیت بروزرسانی شد.");
        setChangePassword({
          old_password: '',
          password: ''
        });
      }).catch(error => {
        ToastError(error.response.data.message)
      })
      
    }
  }

  return (
    <ContainerOperation style={{ borderBottom: '1px dashed #666' }}>
      <TitleOperation>تغییر رمز ورود به متاورس</TitleOperation>

      <Form options={{ style: {gap: 16,margin: 0} }} onSubmit={onSubmitHandler}>
        <Input
          type="password"
          placeholder="رمز قدیمی"
          name="old_password"
          dispatch={setChangePassword}
          className="rtl-placeholder mb-0"
          value={changePassword.old_password}
          style={{ padding: '2px 8px' }}
        />

        <Input
          type="password"
          placeholder="رمز جدید"
          name="password"
          dispatch={setChangePassword}
          className="rtl-placeholder mb-0"
          value={changePassword.password}
          style={{ padding: '2px 8px' }}
        />

        <Submit text="ذخیره شود" type="primary" />
      </Form>
    </ContainerOperation>
  );
}
