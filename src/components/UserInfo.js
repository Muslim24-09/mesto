export class UserInfo {

  _name;
  _work;

  constructor({ userName, about }) {
    this._name = document.querySelector(userName);
    this._work = document.querySelector(about);
  }

  getUserInfo() {
    return {
      userName: this._name.textContent,
      about: this._work.textContent,
    };
  }

  setUserInfo({ userName, about }) {
    console.log(2222, { userName, about });
    this._name.textContent = userName;
    this._work.textContent = about;
  }
}
