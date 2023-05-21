import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import { autorize } from "../utils/Auth";

function Login({handleLogin}) {
  const navigate = useNavigate();

  function onLogin(values) {
    autorize(values["email-input"], values["password-input"])
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          return data;
        }
        return Promise.reject(`Ошибка: данные без токена!`);
      })
      .then(() => {
        handleLogin(values["email-input"]);
        navigate("/");
      })
      .catch((err) => {
        console.log("Ошибка авторизации " + err);
      });
  }

  return (
    <AuthForm
      caption="Вход"
      textButton="Войти"
      textLink=""
      handleSubmit={onLogin}
    />
  );
}

export default Login;
