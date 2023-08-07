import React from "react";

function PopupWithForm({
  isLoading,
  name,
  title,
  buttonText,
  isOpen,
  onClose,
  onSubmit,
  children,
}) {
  const renderedButtonText = () => {
    if (isLoading) {
      return "Сохранение";
    } else {
      return buttonText;
    }
  };
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <form
          className="popup__border"
          name={`${name}-form`}
          onSubmit={onSubmit}
          noValidate
        >
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="popup__save-button"
            aria-label="Сохранить изменения."
          >
            {renderedButtonText() || "Сохранить"}
          </button>
        </form>
        <button
          className="popup__exit-button"
          type="button"
          aria-label="Выйти без изменений."
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
