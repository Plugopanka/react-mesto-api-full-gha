// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "https://api.nomoremesto.nomoreparties.co";

function returnPromiseStatus(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка ${res.status}`);
  }
  return res.json();
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      return returnPromiseStatus(res);
    })
    .then((data) => {
      if (data.user) {
        localStorage.setItem("jwt", data.jwt);
        return data;
      }
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return returnPromiseStatus(res);
  });
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return returnPromiseStatus(res);
  });
};
