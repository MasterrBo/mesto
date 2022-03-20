const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile"); 
const popupCloseButton = document.querySelector(".popup__close-button");
const profileForm = popupProfile.querySelector('.popup__container');
const profileBox = document.querySelector('.profile');
const profileTitle = document.querySelector(".profile__title");
const profilePost = document.querySelector(".profile__post");
const cardContainer = document.querySelector('.elements');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_card');
const cardPopupButtonClose = popupAddCard.querySelector('.popup__close-button');
const cardFormAdd = popupAddCard.querySelector('form');
const fullscreenPicPopup = document.querySelector('.popup_pic');
const fullscreenPicPopupClose = fullscreenPicPopup.querySelector('.popup__close-button');
const popupCardPic = fullscreenPicPopup.querySelector('.popup__pic-style');
const popupCardTitle = fullscreenPicPopup.querySelector('.popup__pic-heading');
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const template = document.querySelector('#card-template').content;
const photoInput = document.getElementById("photo-name");
const linkInput = document.getElementById("link");

// Делаем вывод карточек через JS

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

cardsInitial.forEach(el => {
  addCard(renderItem(el.link, el.name));
});

function renderItem(link, name) {
  const newItem = template.querySelector('.element').cloneNode(true);
  const cardsPic = newItem.querySelector('.element__photo');

  cardsPic.src = link;
  cardsPic.alt = name;
  newItem.querySelector('.element__title').textContent = name;

  function handleLike(event) {
    event.target.classList.toggle("element__button_active");
}

  newItem.querySelector('.element__button').addEventListener('click', handleLike);

  newItem.querySelector('.element__delete-button').addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  newItem.querySelector('.element__photo').addEventListener('click', (evt) => {
    popupCardPic.src = link;
    popupCardPic.alt = name;
    popupCardTitle.textContent = name;
    openPopup(fullscreenPicPopup);
  })

  return newItem;
}

  // Добавляем карточку

function addCard(newItem) {
  cardContainer.prepend(newItem);
  }

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profilePost.textContent = jobInput.value;
  closePopup(popupProfile);
}

//объявляем функцию setSubmitButtonState для событий change и input

function setSubmitButtonState(isFormValid) {
  //Контсанта для проверки - заполнены ли поля формы
   const saveButton = document.querySelector('.popup__save_action');

  if (isFormValid) {
    saveButton.removeAttribute('disabled');
    saveButton.classList.remove('popup__save_disabled'); 
  } else {
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__save_disabled'); 
}
}

function handlecardFormAdd(evt) {
  evt.preventDefault();

  addCard(renderItem(linkInput.value, photoInput.value));
  closePopup(popupAddCard);
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

fullscreenPicPopupClose.addEventListener('click', function () {
  closePopup(fullscreenPicPopup)
});

profileForm.addEventListener('submit', handleProfileForm);
cardFormAdd.addEventListener('submit', handlecardFormAdd);

// Sprint 6

document.forms.form1; // первая форма
document.forms.form2; // вторая форма 

// включение валидации вызовом enableValidation
// все настройки передаются при вызове//

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });

console.log(document.forms.form1);
console.log(document.forms.form2);

//определить первую форму
const formProfile = document.forms.form1;

//достанем элементы формы по их именам
const yourname = form1.elements.yourname;
const yourjob = form1.elements.yourjob;

//Отменить стандартное поведение, которое возникает при наступлении события submit
formProfile.addEventListener('submit', function (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profilePost.textContent = jobInput.value;
  yourname.value = '';
  yourjob.value = '';
});

//Получение элементов форм
document.forms.form1.elements; // элементы первой формы

//обратимся к элементам формы через точку по имени
form1.elements.yourname;
form1.elements.yourjob;

formProfile.addEventListener('input', function (evt) {
  const isValid = yourname.value.length > 0 && yourjob.value.length > 0;
  // выводим evt в консоль
 console.log(evt);
 setSubmitButtonState(isValid);
}
);