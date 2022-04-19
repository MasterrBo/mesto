// ПР-7 ИНКАПСУЛЯЦИЯ
//Класс — это описание того, какие данные и функциональность будут у объекта. 
//Это своего рода чертёж, на основании которого создают объекты — экземпляры данного класса. 
//Класс устанавливает в свои экземпляры свойства (данные) и методы (функциональность).

//Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение

// 1. Принимает в конструктор её данные и селектор её template-элемента;

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
    this._fullscreenPicPopupClose = this._fullscreenPicPopup.querySelector('.popup__close-button');
    this._fullscreenOverlay = this._fullscreenPicPopup.querySelector('.popup__overlay');
    this._popupCardPic = this._fullscreenPicPopup.querySelector('.popup__pic-style');
    this._popupCardTitle = this._fullscreenPicPopup.querySelector('.popup__pic-heading');
    this._overlay = this._fullscreenPicPopup.querySelector('.popup__overlay');
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
    this._fullscreenPicPopupClose.addEventListener('click', this._closePopup);
    this._overlay.addEventListener('click', this._closePopup);
  }

  _fullscreenImage = () => {
    this._popupCardPic.src = this._link;
    this._popupCardPic.alt = this._name;
    this._popupCardTitle.textContent = this._name;
    this._openPopup();
  }

  _openPopup = () => {
    this._fullscreenPicPopup.classList.add('popup_opened');
    document.addEventListener('keydown', this._pressESC);
  }

  _closePopup = () => {
    this._fullscreenPicPopup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._pressESC);
  }

  _pressESC = (event) => {
    const isESC = event.code === 'Escape';
    const popupActive = document.querySelector('.popup_opened');
  
    if (isESC) {
      this._closePopup(popupActive);
    }
  }

  _handleLike = (event) => {
    event.target.classList.toggle("element__button_active");
  }

  _destroy = () => {
    this._likeButton.removeEventListener('click', this._handleLike);
    this._removeButton.removeEventListener('click', this._removeCard);
    this._overlay.removeEventListener('click', this._closePopup);
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



//Свойство this в методе constructor — ссылка на этот возвращаемый объект.

// 3. Cодержит приватные методы для каждого обработчика;

// 4. Cодержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.