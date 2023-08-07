import React from "react";

function ImagePopup({ card, onClose }) {
  return (
    <section
      className={`popup popup_function_view ${card.link && "popup_opened"}`}
    >
      <div className="popup__container popup__container_background_transparent">
        <img className="popup__image" src={card.link} alt={card.name} />
        <p className="popup__subtitle">{card.name}</p>
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

export default ImagePopup;
