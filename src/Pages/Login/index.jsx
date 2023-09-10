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
import LoginSwitch from "./LoginSwitch";
import { useTheme } from "styled-components";
import { useRecaptcha } from "../../Services/Hooks/useRecapcha";

export default function Login() {
  const { Request, HTTP_METHOD } = useRequest();
  const navigation = useNavigate();
  const theme = useTheme();
  const { setUser } = useAuth();
  const { recaptchaValue, renderRecaptcha } = useRecaptcha();
  const [isRecaptcha, setIsRecaptcha] = useState(false);
  const [remember, setRemember] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("IpAccess")) {
      return navigation("/metaverse/access-ip"); // Navigate to a different location
    }
  }, []);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = () => {
    if (!recaptchaValue) {
      setIsRecaptcha(true);
      return;
    }
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
      <LoginSwitch />
      <Form onSubmit={onSubmitHandler}>
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

        <Link to="/metaverse/reset-password" className="link text-1 ">
          فراموشی رمز عبور
        </Link>
        <p
          className="text-information mt-1"
          style={{ color: `${theme.checkBoxLabel} ` }}
        >
          با کلیک بر روی دکمه ورود
          <br />
          <a
            href="https://rgb.irpsc.com/overview"
            target={"_blank"}
            rel="noreferrer"
            className="link text-1 "
          >
            شرایط قرارداد خدمات{" "}
          </a>
          موافقت میکنید
        </p>

        {isRecaptcha && !recaptchaValue ? renderRecaptcha() : null}
      </Form>
    </Modal>
  );
}
