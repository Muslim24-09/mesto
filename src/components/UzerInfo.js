// Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
// Этот класс:
// Принимает в конструктор объект с селекторами двух элементов:
// элемента имени пользователя и элемента информации о себе.
// Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
// Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
// Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.


export class UserInfo {

  _name;
  _work;

  constructor({ title, description }) {
      this._name = document.querySelector(title);
      this._work = document.querySelector(description);
  }

  getUserInfo() {
      return {
          title: this._name.textContent,
          description: this._work.textContent,
      };
  }

  setUserInfo({ title, description }) {
      this._name.textContent = title;
      this._work.textContent = description;
  }
}
