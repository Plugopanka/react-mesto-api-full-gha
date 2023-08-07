import { useEffect, useState, useContext } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isLoading, isOpen, onClose, onUpdateUser }) {
  const [userData, setUserData] = useState({ name: "", about: "" });
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setUserData({ name: currentUser.name, about: currentUser.about });
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: userData.name,
      about: userData.about,
    });
  }

  function handleInput(e, data) {
    setUserData({...userData, [data]: e.target.value})
  }

  return (
    <PopupWithForm
    isLoading={isLoading}
      name="edit"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        onChange={e => handleInput(e, "name")}
        value={userData.name || ""}
        type="text"
        name="name"
        className="popup__input"
        id="input-name"
        placeholder="Имя"
        required
        minLength="2"
        maxLength="40"
      />
      <span className=" popup__input-error name-error"></span>
      <input
        onChange={e => handleInput(e, "about")}
        value={userData.about || ""}
        type="text"
        name="about"
        className="popup__input"
        id="input-description"
        placeholder="О себе"
        required
        minLength="2"
        maxLength="200"
      />
      <span className=" popup__input-error about-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
