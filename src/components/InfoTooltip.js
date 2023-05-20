import usePopupClose from "../hooks/usePopupClose";

function InfoTooltip({ isOpen, onClose, image }) {
  usePopupClose(isOpen, onClose);
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
        <img className="" src={image} alt={"ku-ku"} />
        <h2>ku-ku</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
