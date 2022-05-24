export default class Popup {
  constructor({ selectorPopup }){
    this._popup = document.querySelector(selectorPopup);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (event) => {
      if (event.target.classList.contains('popup__overlay') || event.target.classList.contains('popup__close-icon')) {
        this.close();
      }
    })
  }
}