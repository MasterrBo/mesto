/* const */
// Массив из объектов стандартных карточек
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Объект конфигураций влидации
export const formData = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: ".popup__save_action",
  errorClass: '.popup__error-message',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-error'
};

export const elements = document.querySelector('.elements'); //+
export const template = document.querySelector('#card-template').content; //+

// Для popup'а добавления карточки
export const addButton = document.querySelector('.profile__add-button');//+

export const popupAddCard = document.querySelector('.popup_card'); //+
export const inputCardName = popupAddCard.querySelector('.popup__field_name'); //+
export const inputCardUrl = popupAddCard.querySelector('.popup__field_link'); //+
export const addCardForm = popupAddCard.querySelector('form'); //+

// Для popup'a открытой карточки
export const popupImage = document.querySelector('.popup_pic'); //+
export const imgUrl = document.querySelector('.popup__pic-style'); //+
export const imgName = document.querySelector('.popup__pic-heading'); //+

// Для popup'a профайла
export const popupProfile = document.querySelector(".popup_profile"); //+
export const editProfile = document.querySelector('.profile__edit-button'); //+
export const nameInput = document.querySelector('.popup__field-name'); //+
export const jobInput = document.querySelector('.popup__field-job'); //+
export const profileForm = popupProfile.querySelector('.popup__container'); //+