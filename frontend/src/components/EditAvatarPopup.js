import { useEffect, useState, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isLoading, isOpen, onClose, onUpdateAvatar }) {
  const [userAvatar, setUserAvatar] = useState("");

  const avatarRef = useRef();

  useEffect(() => {
    setUserAvatar("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      name="change"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        ref={avatarRef}
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

export default EditAvatarPopup;
