const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupProfileOverlay = document.querySelector(".popup__overlay");
const popupCloseButton = document.querySelector(".popup__close-button");

const profileBox = document.querySelector('.profile');

const cardContainer = document.querySelector('.elements');
const profileAddButton = document.querySelector('.profile__add-button');

const popupAddCardOverlay = popupAddCard.querySelector('.popup__overlay');
const cardPopupButtonClose = popupAddCard.querySelector('.popup__close-button');

const fullscreenPicPopup = document.querySelector('.popup_pic');
const fullscreenPicPopupClose = fullscreenPicPopup.querySelector('.popup__close-button');
const fullscreenOverlay = fullscreenPicPopup.querySelector('.popup__overlay');
const popupCardPic = fullscreenPicPopup.querySelector('.popup__pic-style');
const popupCardTitle = fullscreenPicPopup.querySelector('.popup__pic-heading');
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");

const photoInput = document.getElementById("photo");
const linkInput = document.getElementById("link");
const popupAddCardSubmit = popupAddCard.querySelector('.popup__save');

import Card from "./components/Card";
import FormValidator from "./components/FormValidator";
import "./pages/index.css"; // добавьте импорт главного файла стилей

// импортируем изображения
// import close_icon from './images/close-icon.svg';
// import logo from './images/logo.svg';
// import dombay from './images/dombay.png';
// import elbrus from './images/elbrus.png';
// import karachaevo_ch from './images/karachaevo-ch.png';
// import karachaevsk from './images/karachaevsk.png';
// import kusto from './images/kusto.png';
// import add_button from './image/add-button.svg';
// import Edit_Button from './image/Edit_Button.svg';
// import trash2 from './image/trash2.svg';

// const images = [
//   // меняем исходные пути на переменные
//   { name: 'close-icon', image: close_icon },
//   { name: 'logo', link: logo },
//   { name: 'dombay', link: dombay },
//   { name: 'elbrus', link: elbrus },
//   { name: 'karachaevo-ch', link: karachaevo_ch },
//   { name: 'karachaevsk', link: karachaevsk },
//   { name: 'kusto', link: kusto },
//   { name: 'add-button', link: add_button },
//   { name: 'Edit_Button', link: Edit_Button },
//   { name: 'trash2', link: trash2 },
// ];

// Массив карточек

const cardsInitial = [
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

function addCard(newItem) {
    cardContainer.prepend(newItem);
}

// Функции для попапов
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', pressESC);
}

function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', pressESC);
}

function handleProfileForm(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profilePost.textContent = jobInput.value;
    closePopup(popupProfile);
}

function handlecardFormAdd(evt) {
    evt.preventDefault();

    addCard(createCard(photoInput.value, linkInput.value, template));

    closePopup(popupAddCard);
    cardFormAdd.reset();

    formValidatorCard.disabledButton();
}

function createCard(photoInput, linkInput, template) {
    const card = new Card(photoInput, linkInput, template);
    return card.readyCard();
}

profileEditButton.addEventListener('click', function () {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profilePost.textContent;
    openPopup(popupProfile)
});

popupCloseButton.addEventListener('click', function () {
    closePopup(popupProfile)
});

profileAddButton.addEventListener('click', function () {
    openPopup(popupAddCard)
});

cardPopupButtonClose.addEventListener('click', function () {
    closePopup(popupAddCard)
});

popupProfileOverlay.addEventListener('click', function() {
    closePopup(popupProfile);
});

popupAddCardOverlay.addEventListener('click', function() {
    closePopup(popupAddCard);
});

fullscreenPicPopupClose.addEventListener('click', function() {
    closePicPopup(fullscreenPicPopup);
});

fullscreenOverlay.addEventListener('click', function() {
    closePicPopup(fullscreenPicPopup);
});

export const openPicPopup = (popup) => {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', pressESC);
}

export const closePicPopup = (popup) => {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', pressESC);
}

function pressESC(event) {
    const isESC = event.code === 'Escape';

    if (isESC) {
        const popupActive = document.querySelector('.popup_opened');
        closePopup(popupActive);
    }
}

profileForm.addEventListener('submit', handleProfileForm);
cardFormAdd.addEventListener('submit', handlecardFormAdd);

cardsInitial.forEach(el => {
    addCard(createCard(el.name, el.link, template));
});

// Валидация

const formData = {
    formSelector: '.popup__container',
    inputSelector: '.popup__field',
    submitButtonSelector: ".popup__save_action",
    errorClass: '.popup__error-message',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input-error'
};

const formValidatorProfile = new FormValidator(formData, profileForm);
formValidatorProfile.enableValidation();

const formValidatorCard = new FormValidator(formData, cardFormAdd);
formValidatorCard.enableValidation();