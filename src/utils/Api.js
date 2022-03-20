class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  // приватный метод проверки ответа
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  // получить данные пользователей
  getUsers = () =>  {
    return fetch(`${this._baseUrl}/users`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(this._checkResponse)
    .then((users) => users)
  }
}

const api = new Api({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api
