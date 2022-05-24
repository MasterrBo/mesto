/* imports */
import Card from '../components/Card';
import FormValidator from '../components/FormValidator'
import Section from '../components/Section'
import PopupWithImage from '../components/PopupWithImage'
import PopupWithForm from '../components/PopupWithForm'
import UserInfo from '../components/UserInfo'

import './index.css'

/* const */
import {
  initialCards,
  formData,
  template,
  addButton,
  inputCardName,
  inputCardUrl,
  addCardForm,
  editProfile,
  nameInput,
  jobInput,
  profileForm,
} from '../utils/constants.js'


const formValidProfile = new FormValidator(formData, profileForm);
const formValidCard = new FormValidator(formData, addCardForm);

const userData = new UserInfo({ name: '.profile__title', info: '.profile__post' });

function createCard(item) {
  const cardItem = new Card(item, template, handleCardClick);
  return cardItem.createCard();
}

// константа класса реализации карточки в DOM
const cardSection = new Section({
      items: initialCards,
      renderer: (item) => {
        cardSection.addItem(createCard(item))
      },
    },
    '.elements');

// константы под классов popup'а
const popupCardImg = new PopupWithImage({ selectorPopup: '.popup_pic' });
const popupCardAdd = new PopupWithForm({
  selectorPopup: '.popup_card',
  functionPopupForm: (data) => {
    cardSection.addItem(createCard({ name: data['yourplace'], link: data['yoururl'] }))
  }
});

const popupProfileEdit = new PopupWithForm({
  selectorPopup: '.popup_profile',
  functionPopupForm: (data) => {
    userData.setUserInfo({ name: data['yourname'], info: data['yourjob'] })
  }});

/* Function */
// открывает popup'а 'создание новой карточки'
function openPopupCard() {
  formValidCard.resetValidation();
  popupCardAdd.open()
}

// открывает popup карточки
function handleCardClick(name, link) {
  popupCardImg.open(name, link);
}

// Профайл
function openPopupProfile() {
  const newUserData = userData.getUserInfo();
  nameInput.value = newUserData.name;
  jobInput.value = newUserData.info;
  formValidProfile.resetValidation();
  popupProfileEdit.open();
}

/* Запуск функций */
// Запуск метода валидации для каждой из форм
formValidProfile.enableValidation();
formValidCard.enableValidation();

// Реализания карточек
cardSection.setItems();

/* EventListeners */
// Popup добавления нового места
addButton.addEventListener('click', () => openPopupCard()); // открывает popup добавления места
popupCardAdd.setEventListeners(); // закрывает popup'a добавления места

// Popup открытой карточки
popupCardImg.setEventListeners(); // закрывает popup'a открытой карточки

// Профайл
editProfile.addEventListener('click', () => openPopupProfile());
popupProfileEdit.setEventListeners(); // закрытие popup'a профиля