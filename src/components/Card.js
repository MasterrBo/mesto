export default class Card {
  constructor(elementCard, templateCard, functionCardClick) {
    this._elementCardName = elementCard.name;
    this._elementCardLink = elementCard.link;
    this._templateCard = templateCard.querySelector('.element');
    this._functionCardClick = functionCardClick;
  }

  _createView = () => {
    this._templateView = this._templateCard.cloneNode(true);
  }

  _removeItem = () => {
    this._templateView.remove();
  }

  _isLike = (event) => {
    this._cardLikedActive = 'element__button_active';

    event.target.classList.toggle(this._cardLikedActive);
  }

  _addEventListeners = () => {
    this._cardRemove = this._templateView.querySelector('.element__delete-button');
    this._cardLiked = this._templateView.querySelector('.element__button');
    
    this._cardRemove.addEventListener('click', () => this._removeItem());
    this._cardLiked.addEventListener('click', (event) => this._isLike(event));

    this._cardImg.addEventListener('click', () => this._functionCardClick(this._elementCardName, this._elementCardLink));
  }

  createCard = () => {
    this._createView()

    this._cardTitle = this._templateView.querySelector('.element__title');
    this._cardImg = this._templateView.querySelector('.element__photo');

    this._cardTitle.textContent = this._elementCardName;
    this._cardImg.src = this._elementCardLink;
    this._cardImg.alt = this._elementCardName;

    this._addEventListeners();
    
    return this._templateView;
  }
}