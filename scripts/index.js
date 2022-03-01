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