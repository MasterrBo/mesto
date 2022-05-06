// Создайте класс PopupWithImage, который наследует от Popup. 
// Этот класс должен перезаписывать родительский метод open. 
// В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения.


import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(src) {
        this._image = super.popup.querySelector('.popup__pic-style');
        this._src = src;
    }

    open = () => {
        super.open();
        this._image.src = this._src;
        // В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения.

    }
}