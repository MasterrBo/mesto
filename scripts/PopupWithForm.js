import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popup, callback) {
        this._popup = popup;
        this._form = popup.querySelector('.popup__container');
        this._inputs = popup.querySelectorAll('.popup__field');
        this._submit = callback;
    }

    _getInputValues = () => {
        this._values = {};
        this._inputs.forEach(input => {
            this._values[input.name] = input.value;
        });
    }

    setEventListeners = () => {
        super.setEventListeners();
        //  Метод _setEventListeners класса PopupWithForm  но и добавлять обработчик сабмита формы.

        this._form.addEventListener('submit', event => {
            event.preventDefault();
            this._submit();
            // добавлять обработчик сабмита форм - что передать?
        })
    }

    close = () => {
        super.close();
        // Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
        this._form.reset();
    }
}

