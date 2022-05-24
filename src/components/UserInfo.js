export default class UserInfo {
  constructor({ name: selectorNameUser, info: selectorInfoUser }) {
    this._nameUser = document.querySelector(selectorNameUser);
    this._infoUser = document.querySelector(selectorInfoUser);
  }

  getUserInfo() {
    return{
      name: this._nameUser.textContent,
      info: this._infoUser.textContent,
    }
  }

  setUserInfo({ name, info }) {
    this._nameUser.textContent = name;
    this._infoUser.textContent = info;
  }
}