import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { register } from "../utils/Auth";

function Register({ onOpenMsg }) {
  const navigate = useNavigate();

  function handleSubmit(values) {
    register(values["email-input"], values["password-input"])
      .then(() => {
        navigate("/sign-in");
        onOpenMsg(false);
      })
      .catch((err) => {
        console.log("Ошибка регистрации " + err);
        onOpenMsg(true);
      });
  }

  return (
    <AuthForm
      caption="Регистрация"
      textButton="Зарегистрироваться"
      textLink="Уже зарегистрированы? Войти"
      handleSubmit={handleSubmit}
    />
  );
}

export default Register;
