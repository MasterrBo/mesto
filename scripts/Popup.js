export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    // Закрываем по ESC
    _handleEscClose = (event) => {
        const isESC = event.code === 'Escape';

        if (isESC) {
            this.close();
        }
    }

    // Открываем
    open = () => {
        this._popup.classList.add('popup_opened');
    }

    // Закрываем
    close = () => {
        this._popup.classList.remove('popup_opened');
    }

    setEventListeners = () => {
        this._closeButton.addEventListerner('click', () => this.close);
    }
}