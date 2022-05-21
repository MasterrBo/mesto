export default class UserInfo {
  constructor({ name: nameUser, info: infoUser }) {
    this._nameUser = document.querySelector(nameUser)
    this._infoUser = document.querySelector(infoUser)
  }

  getUserInfo() {
    return{
      name: this._nameUser.textContent,
      info: this._infoUser.textContent,
    }
  }

  setUserInfo({ name, info }) {
    this._nameUser.textContent = name
    this._infoUser.textContent = info
  }
}