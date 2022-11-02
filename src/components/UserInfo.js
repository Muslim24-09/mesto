export class UserInfo {

  _name;
  _work;
  _avatar;
  _id;

  constructor({ name, about, avatar }) {
    this._name = document.querySelector(name);
    this._work = document.querySelector(about);
    this._avatar = document.querySelector(avatar)
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._work.textContent,
    };
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._work.textContent = userInfo.about;
    this._avatar.src = userInfo.avatar;
    this._id = userInfo._id
  }

  getUserId() {
    return this._id
  }
}
