export class Api {
  _baseUrl;
  _token;

  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl,
      this._token = token
  }

  _checkResponse(rez) {
    if (rez.ok) {
      return rez.json()
    } else {
      return Promise.reject(`Ошибка: ${rez.status}`)
    }
  }

  getAddingPictures() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: `${this._token}` // свой ключ
      }
    })
      .then(rez => this._checkResponse(rez))
  }

  addItem({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`,
        link: `${link}`
      })
    })
      .then(rez => this._checkResponse(rez))
  }

  removeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },

    })
      .then(rez => this._checkResponse(rez))
  }

  likeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: `${this._token}`
      }
    })
      .then(res => this._checkResponse(res));
  }

  dislikeItem(itemId) {
    return fetch(`${this._baseUrl}/cards/${itemId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: `${this._token}`
      }
    })
      .then(res => this._checkResponse(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: `${this._token}`
      }
    })
      .then(rez => this._checkResponse(rez))
  }

  updateUserInfo({ username, about }) {
      return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${username}`,
        about: `${about}`
      })
    })
      .then(rez => this._checkResponse(rez))
  }

  updateUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: `${this._token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${avatar}`
      })

    })
      .then(rez => this._checkResponse(rez))
  }
}

