import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as auth from "../utils/auth.js";
import AuthForm from "./AuthForm.js";

const Login = ({
  handleLogin,
  checkToken,
  handleUserEmail,
  isLoading,
  handleLoading
}) => {
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
    if (!formValue.email || !formValue.password) {
      return;
    }
    handleLoading(true);
    auth
      .authorize(formValue.email, formValue.password)
      .then((data) => localStorage.setItem("jwt", data.token))
      .then((data) => {
        setFormValue({ email: "", password: "" });
        handleLogin();
        navigate("/", { replace: true });
        handleUserEmail(formValue.email);
        checkToken();
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      })
      .finally(() => handleLoading(false));
  };

  return (
    <AuthForm
      isLoading={isLoading}
      buttonText={"Войти"}
      onSubmit={handleSubmit}
      onChange={handleChange}
      formValue={formValue}
      title={"Вход"}
    />
  );
};

export default Login;
