import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm.js";

function DeletePlacePopup({
  isLoading,
  card,
  isOpen,
  onClose,
  onDeletePlace,
  onDeletedCard,
}) {
  useEffect(() => {
    onDeletedCard(card);
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onDeletePlace(card);
  }

  return (
    <PopupWithForm
      isLoading={isLoading}
      name="submit"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default DeletePlacePopup;
