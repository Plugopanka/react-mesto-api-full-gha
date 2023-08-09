class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _returnPromiseStatus(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }

  getCards(token) {
    return fetch(`${this._url}/cards`, {
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  getLikes(token) {
    return fetch(`${this._url}/cards/likes`, {
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  putLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      method: "PUT",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  deleteLike(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}/likes `, {
      method: "DELETE",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  postNewCard(name, link, token) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, link }),
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  deleteNewCard(cardId, token) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: "DELETE",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  patchUserInfo(name, about, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, about }),
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }

  patchUserAvatar(avatar, token) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: { ...this._headers, authorization: `Bearer ${token}` },
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      return this._returnPromiseStatus(res);
    });
  }
}

const api = new Api({
  // url: "http://localhost:3000",
  url: "https://api.nomoremesto.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
