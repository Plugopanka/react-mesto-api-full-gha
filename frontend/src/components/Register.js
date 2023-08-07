import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";
import AuthForm from "./AuthForm.js";

const Register = ({ handleSucceed, handleSuccessPopup, isLoading, handleLoading }) => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLoading(true);
    auth
      .register(formValue.email, formValue.password)
      .then(() => {
        handleSuccessPopup(true);
        handleSucceed(true);
        navigate("/sign-in", { replace: true });
      })
      .catch((err) => {
        handleSuccessPopup(true);
        handleSucceed(false);
        console.log(`Ошибка загрузки ${err}`);
      })
      .finally(() => handleLoading(false));
  };

  return (
    <AuthForm
      isLoading={isLoading}
      buttonText={"Зарегистрироваться"}
      onSubmit={handleSubmit}
      onChange={handleChange}
      formValue={formValue}
      title={"Регистрация"}
>
      <Link to="sign-in" className="sign__link">
        Уже зарегистрированы? Войти
      </Link>
      </AuthForm>
  );
};

export default Register;
