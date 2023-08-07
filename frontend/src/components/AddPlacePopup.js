import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ isLoading, isOpen, onClose, onAddPlace }) {
  const [cardData, setCardData] = useState({ name: "", link: "" });

  useEffect(() => {
    setCardData({ name: "", link: "" });
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: cardData.name,
      link: cardData.link,
    });
  }

  function handleInput(e, data) {
    setCardData({ ...cardData, [data]: e.target.value });
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      name="add"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => handleInput(e, "name")}
        value={cardData.name || ""}
        type="text"
        name="name"
        className="popup__input"
        id="input-place"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
      />
      <span className=" popup__input-error name-error"></span>
      <input
        onChange={(e) => handleInput(e, "link")}
        value={cardData.link || ""}
        type="url"
        name="link"
        className="popup__input"
        id="input-avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className=" popup__input-error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
