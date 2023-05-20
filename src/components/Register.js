import { useState } from "react";
import AuthForm from "./AuthForm";
import InfoTooltip from "./InfoTooltip";
import imageCheck from "../images/auth-check.svg";
import imageError from "../images/auth-err.svg";

function Register() {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  function handleSubmit() {
    setIsMessageOpen(true);
  }

  function onMessageClose() {
    setIsMessageOpen(false);
  }

  return (
    <>
      <AuthForm
        caption="Регистрация"
        textButton="Зарегистрироваться"
        textLink="Уже зарегистрированы? Войти"
        handleSubmit={handleSubmit}
      />

      <InfoTooltip
        image={true ? imageCheck : imageError}
        isOpen={isMessageOpen}
        onClose={onMessageClose}
      />
    </>
  );
}

export default Register;
