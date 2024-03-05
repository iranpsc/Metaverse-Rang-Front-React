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
import styled, { useTheme } from "styled-components";
import { useRecaptcha } from "../../Services/Hooks/useRecapcha";
import { getFieldTranslationByNames } from "../../Services/Utility";

const Errors = styled.p`
  color: #f00;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  width: 100%;
`;
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
    if (!formData.email || !formData.password) {
      return;
    }
    if (!recaptchaValue) {
      setIsRecaptcha(true);
      return;
    }
  };
  useEffect(() => {
    if (recaptchaValue) {
      console.log(isRecaptcha);
      setMessage("");
      Request("login", HTTP_METHOD.POST, formData)
        .then((res) => {
          setUser(res.data);
          navigation("/metaverse");
        })
        .catch((error) => {
          setMessage(
            getFieldTranslationByNames(
              "login",
              "email or password is not valid."
            )
          );
        });
    }
  }, [recaptchaValue]);
  return (
    <Modal type="modal-section-xs">
      <LoginSwitch />
      <Form onSubmit={onSubmitHandler}>
        <Input
          name="email"
          type="email"
          placeholder={getFieldTranslationByNames("login", "enter-your-email")}
          value={formData.email}
          dispatch={setFormData}
          validation={message ? true : false}
        />

        <Input
          name="password"
          type="password"
          placeholder={getFieldTranslationByNames("login", "password")}
          value={formData.password}
          dispatch={setFormData}
          validation={message ? true : false}
        />

        {message && <Errors>{message}</Errors>}

        <Submit
          text={getFieldTranslationByNames("login", "login")}
          type="secondary"
        />

        <CheckBox
          value={remember}
          onClickHandler={setRemember}
          text={getFieldTranslationByNames("login", "remember me")}
        />

        <Link to="/metaverse/reset-password" className="link">
          {getFieldTranslationByNames("login", "forget password")}
        </Link>
        <p
          className="text-information mt-1"
          style={{ color: `${theme.checkBoxLabel} ` }}
        >
          {getFieldTranslationByNames(
            "login",
            "If you click on the login button"
          )}
          <a
            href="https://rgb.irpsc.com/overview"
            target={"_blank"}
            rel="noreferrer"
            className="link text-1 "
          >
            {getFieldTranslationByNames("login", "terms of service contract")}
          </a>
          {getFieldTranslationByNames("login", "you agree")}
        </p>

        {isRecaptcha && !recaptchaValue ? renderRecaptcha() : null}
      </Form>
    </Modal>
  );
}
