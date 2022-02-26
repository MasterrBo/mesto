const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup__profile"); 
const popupCloseButton = document.querySelector(".popup__close-button");
const profileForm = popupProfile.querySelector('form'); 
const editProfileFormInputs = popupProfile.querySelectorAll('form .popup__field');
const profileBox = document.querySelector('.profile');
const profileTitle = document.querySelector(".profile__title");
const profilePost = document.querySelector(".profile__post");
const CardContainer = document.querySelector('.elements');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector(".popup2");
const closeAddCardPopupButton = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('form');
const addCardFormInputs = popupAddCard.querySelectorAll('form .popup__field');
const fullscreenPicPopup = document.querySelector('.popup_pic');
const closeFullscreenPicPopup = fullscreenPicPopup.querySelector('.popup__close-button');
const popupCardPic = fullscreenPicPopup.querySelector('.popup__pic-style');
const popupCardTitle = fullscreenPicPopup.querySelector('.popup__pic-heading');

// Делаем вывод карточек через JS

const initialCards = [
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

initialCards.forEach(el => {
  addCard(renderItem(el.link, el.name));
});
// console.log(initialCards);

function renderItem(link, name) {
  const addCardFormInputs = popupAddCard.querySelectorAll('form .popup__field');
  const template = document.querySelector('#card-template').content;
  const newItem = template.querySelector('.element').cloneNode(true);
  const cardsPic = newItem.querySelector('.element__photo');

  cardsPic.src = link;
  cardsPic.alt = name;
  newItem.querySelector('.element__title').textContent = name;

  const likeElement = document.querySelector('.element__button');

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
  CardContainer.prepend(newItem);
  }

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function handleProfileForm(evt) {
  evt.preventDefault();

  profileTitle.textContent = editProfileFormInputs[0].value;
  profilePost.textContent = editProfileFormInputs[1].value;

  closePopup(popupProfile);
}

function handleAddCardForm(evt) {
  evt.preventDefault();

  addCard(renderItem(addCardFormInputs[1].value, addCardFormInputs[0].value));

  addCardFormInputs[1].value = '';
  addCardFormInputs[0].value = '';

  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', function () {
  openPopup(popupProfile)
  editProfileFormInputs[0].value = profileTitle.textContent;
  editProfileFormInputs[1].value = profilePost.textContent;
});

popupCloseButton.addEventListener('click', function () {
  closePopup(popupProfile)
});

profileAddButton.addEventListener('click', function () {
  openPopup(popupAddCard)
});

closeFullscreenPicPopup.addEventListener('click', function () {
  closePopup(fullscreenPicPopup)
});

profileForm.addEventListener('submit', handleProfileForm);
addCardForm.addEventListener('submit', handleAddCardForm);