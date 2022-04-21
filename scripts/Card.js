// ПР-7 ИНКАПСУЛЯЦИЯ
//Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение

// 1. Принимает в конструктор её данные и селектор её template-элемента;
import {openPicPopup, closePicPopup} from './index.js';

export default class Card {
  constructor(name, link, template) {
    this._name = name;
    this._link = link;
    this._template = template;

    // Попап 
   this._initPopup();
  }

  _initPopup = () => {
    this._fullscreenPicPopup = document.querySelector('.popup_pic');
    this._popupCardPic = this._fullscreenPicPopup.querySelector('.popup__pic-style');
    this._popupCardTitle = this._fullscreenPicPopup.querySelector('.popup__pic-heading');
  }

  _createCard = () => {
    this._card = this._template.querySelector('.element').cloneNode(true);
    this._card.querySelector('.element__title').textContent = this._name;
    this._likeButton = this._card.querySelector('.element__button');
    this._removeButton = this._card.querySelector('.element__delete-button');
    this._cardPic = this._card.querySelector('.element__photo');
    this._cardPic.src = this._link;
    this._cardPic.alt = this._name;

    this._listeners();
    
    return this._card;
  }

  _listeners = () => {    
    this._likeButton.addEventListener('click', this._handleLike);
    this._removeButton.addEventListener('click', this._removeCard);
    this._cardPic.addEventListener('click', this._fullscreenImage);
  }

  _fullscreenImage = () => {
    this._popupCardPic.src = this._link;
    this._popupCardPic.alt = this._name;
    this._popupCardTitle.textContent = this._name;
    openPicPopup(this._fullscreenPicPopup);
  }

  _handleLike = (event) => {
    event.target.classList.toggle("element__button_active");
  }

  _destroy = () => {
    this._likeButton.removeEventListener('click', this._handleLike);
    this._removeButton.removeEventListener('click', this._removeCard);
  }

  _removeCard = () => {
    this._destroy();
    this._card.remove();
  }

  // здесь выполним все необходимые операции, чтобы вернуть разметку

  readyCard = () => {
    return this._createCard();
  }
}
