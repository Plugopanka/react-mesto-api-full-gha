import React from "react";
import successlogo from "../images/popup-success.svg";
import dismisslogo from "../images/popup-dismiss.svg";

function InfoTooltip({ onClose, isOpen, isSucceed }) {
  return (
    <section
      className={`popup ${isOpen && "popup_opened"}`}
    >
      <div className="popup__container popup__container_type_center">
        <img className="popup__image" src={isSucceed ? successlogo : dismisslogo} />
        <p className="popup__title popup__title_type_center">{isSucceed ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз." }</p>
        <button
          className="popup__exit-button"
          type="button"
          aria-label="Выйти."
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default InfoTooltip;