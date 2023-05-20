import { Link } from "react-router-dom";

function AuthForm({ caption, textButton, textLink, handleSubmit }) {
  function onSubmit(e) {
    e.preventDefault();
    handleSubmit();
  }
  return (
    <form
      name="register"
      className="auth-form"
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <h2 className="auth-form__caption">{caption}</h2>
      <input
        name="email-input"
        type="email"
        className="auth-form__input"
        placeholder="Email"
        required
        minLength="2"
        maxLength="200"
      />
      <input
        name="password-input"
        type="password"
        className="auth-form__input"
        placeholder="Пароль"
        required
        minLength="3"
        maxLength="40"
      />
      <button
        name="register-button"
        type="submit"
        className="auth-form__button button-hover"
      >
        {textButton}
      </button>
      <Link className="auth-form__link link" to="/sign-in">
        {textLink}
      </Link>
    </form>
  );
}

export default AuthForm;
