import usePopupClose from "../hooks/usePopupClose";
import imageCheck from "../images/auth-check.svg";
import imageError from "../images/auth-err.svg";

function InfoTooltip({ isError, isOpen, onClose }) {
  usePopupClose(isOpen, onClose);
  const msgError = "Что-то пошло не так! Попробуйте ещё раз.";
  const msgCheck = "Вы успешно зарегистрировались!";
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_purpose_message">
        <button
          name="close-button"
          className="popup__button-close button-hover"
          aria-label="Закрыть"
          type="button"
          onClick={onClose}
        />
        <img className="" src={isError ? imageError : imageCheck} />
        <p>{isError ? msgError : msgCheck}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;
