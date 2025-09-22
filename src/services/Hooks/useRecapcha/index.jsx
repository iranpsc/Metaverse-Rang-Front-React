import { useRef } from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styled, { useTheme } from "styled-components";

const Modal = styled.div`
  position: fixed;
  z-index: 1500;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
`;
const Container = styled.div`
  width: 86%;
  height: 140px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.primary};
  @media (min-width: 768px) {
    width: 310px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 11px;
  gap: 10px;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.975);
    transform-origin: "0 0";
  }
`;
const Text = styled.p`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-family: AzarMehr;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  margin-top: 7px; /* 178.571% */
`;
export function useRecaptcha() {
  const [recaptchaValue, setRecaptchaValue] = useState(false);
  const captchaRef = useRef(null);
  const theme = useTheme();
  const renderRecaptcha = () => (
    <Modal>
      <Container>
        <Text>لطفا بررسی کنید که ربات نیستید</Text>
        <ReCAPTCHA
          sitekey="6LdZAVYoAAAAAFrfDO0ok8FQZm7hJLZ1Y0zXvcna"
          onChange={(value) => {
            setRecaptchaValue(value);
          }}
          ref={captchaRef}
          theme={`${theme.recaptchaText == "#00000073" ? "light" : "dark"}`}
        />
      </Container>
    </Modal>
  );

  return {
    recaptchaValue,
    renderRecaptcha,
  };
}
