import { useState } from "react";

import Input from "../../Components/Inputs/Input";
import Modal from "../../Components/Modal";
import { Link, useNavigate } from "react-router-dom";
import useRequest from "../../Services/Hooks/useRequest";
import CheckBox from "../../Components/Inputs/CheckBox";
import useAuth from "../../Services/Hooks/useAuth";
import Form from "../../Components/Form";
import Submit from "../../Components/Buttons/Submit";
import { useEffect } from "react";
import LoginSwitch from "../../Components/Buttons/LoginSwitch";

export default function Login() {
  const { Request, HTTP_METHOD } = useRequest();
  const navigation = useNavigate();
  const { setUser } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("IpAccess")) {
      return navigation("/metaverse/access-ip"); // Navigate to a different location
    }
  }, []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [remember, setRemember] = useState(false);

  const [message, setMessage] = useState("");

  const onSubmitHandler = () => {
    setMessage("");
    Request("login", HTTP_METHOD.POST, formData)
      .then((res) => {
        setUser(res.data);
        navigation("/metaverse");
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };

  return (
    <Modal type="modal-section-xs">
      <Form onSubmit={onSubmitHandler}>
        <LoginSwitch />
        <Input
          name="email"
          type="email"
          placeholder="ایمیل خود را وارد کنید"
          value={formData.email}
          dispatch={setFormData}
        />

        <Input
          name="password"
          type="password"
          placeholder="رمز ورود "
          value={formData.password}
          dispatch={setFormData}
        />

        {message && (
          <p className="w-100 text-right mb-3 text-danger">{message}</p>
        )}

        <Submit text={"ورود"} type="secondary" />

        <CheckBox value={remember} onClickHandler={setRemember} />

        <Link to="/metaverse/reset-password" className="link text-1 mt-3 mb-3">
          فراموشی رمز عبور
        </Link>

        <Link to="/metaverse/signup" className="link text-2 mt-auto">
          ثبت نام و عضویت در سامانه
        </Link>

        <p className="text-information mt-4">
          با کلیک بر روی دکمه ورود به سامانه موافقت میکنید
        </p>

        <a
          href="https://rgb.irpsc.com/overview"
          target={"_blank"}
          rel="noreferrer"
          className="link text-1 mt-2 pb-3"
        >
          شرایط قرارداد خدمات
        </a>
      </Form>
    </Modal>
  );
}
