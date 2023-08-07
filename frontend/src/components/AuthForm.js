import React from "react";

function AuthForm({
  isLoading,
  buttonText,
  onSubmit,
  onChange,
  formValue,
  title,
  children,
}) {
  const renderedButtonText = () => {
    if (isLoading) {
      return "Загрузка";
    } else {
      return buttonText;
    }
  };

  return (
    <section className="sign">
      <form
        className="sign__border"
        name={`login-form`}
        onSubmit={onSubmit}
        noValidate
      >
        <h2 className="sign__title">{title}</h2>
        <input
          required
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className="sign__input"
          value={formValue.email}
          onChange={onChange}
        />
        <span className=" sign__input-error name-error"></span>
        <input
          required
          id="password"
          name="password"
          type="password"
          placeholder="Пароль"
          className="sign__input"
          value={formValue.password}
          onChange={onChange}
        />
        <span className=" sign__input-error name-error"></span>
        <button
          type="submit"
          className="sign__save-button"
          aria-label="Сохранить изменения."
        >
          {renderedButtonText()}
        </button>
      </form>
      {children}
    </section>
  );
}

export default AuthForm;
