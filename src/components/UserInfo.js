export class UserInfo {

  _name;
  _work;
  _avatar;
  _id;

  constructor({ username, about, avatar }) {
    this._name = document.querySelector(username);
    this._work = document.querySelector(about);
    this._avatar = document.querySelector(avatar)
  }

  getUserInfo() {
    return {
      username: this._name.textContent,
      about: this._work.textContent,
    };
  }

  setUserInfo(userInfo) {
    this._name.textContent = userInfo.username;
    this._work.textContent = userInfo.about;
    this._avatar.src = userInfo.avatar;
    this._id = userInfo._id
  }

  updateUserInfo(userInfo) {
    this._name.textContent = userInfo.name;
    this._work.textContent = userInfo.about
  }

  updateUserAvatar(userInfo) {
    this._avatar.src = userInfo.avatar
  }

  getUserId() {
    return this._id
  }
}
