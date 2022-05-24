import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
    constructor({selectorPopup}) {
      super({selectorPopup});
      this._imgUrl = this._popup.querySelector('.popup__pic-style');
      this._imgName = this._popup.querySelector('.popup__pic-heading');
    }

    open(name, link) {
      this._imgUrl.src = link;
      this._imgUrl.alt = name;
      this._imgName.textContent = name;

      super.open();
    }
}