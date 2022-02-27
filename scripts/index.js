const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile"); 
const popupCloseButton = document.querySelector(".popup__close-button");
const profileForm = popupProfile.querySelector('.popup__container');
const editProfileFormInputs = popupProfile.querySelectorAll('form .popup__field');
const profileBox = document.querySelector('.profile');
const profileTitle = document.querySelector(".profile__title");
const profilePost = document.querySelector(".profile__post");
const CardContainer = document.querySelector('.elements');
const profileAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_card');
const closeAddCardPopupButton = popupAddCard.querySelector('.popup__close-button');
const addCardForm = popupAddCard.querySelector('form');
const fullscreenPicPopup = document.querySelector('.popup_pic');
const closeFullscreenPicPopup = fullscreenPicPopup.querySelector('.popup__close-button');
const popupCardPic = fullscreenPicPopup.querySelector('.popup__pic-style');
const popupCardTitle = fullscreenPicPopup.querySelector('.popup__pic-heading');
const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const addCardFormInputs = popupAddCard.querySelectorAll('form .popup__field');
const template = document.querySelector('#card-template').content;

// Делаем вывод карточек через JS

const CardsInitial = [
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

CardsInitial.forEach(el => {
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
  CardContainer.prepend(newItem);
  }

function openPopup(popup) {
  popup.classList.add('popup_opened');
  nameInput.value = profileTitle.textContent;
  jobInput.value = profilePost.textContent;
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

function handleAddCardForm(evt) {
  evt.preventDefault();

  const photoInput = document.getElementById("photo-name");
  const LinkInput = document.getElementById("link");


  addCard(renderItem(LinkInput.value, photoInput.value));
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', function () {
  openPopup(popupProfile)

  const profileTitleItem = document.querySelector(".profile__title_item");
  editProfileFormInputs.value = profileTitleItem.textContent;
});

popupCloseButton.addEventListener('click', function () {
  closePopup(popupProfile)
});

profileAddButton.addEventListener('click', function () {
  openPopup(popupAddCard)
});

closeAddCardPopupButton.addEventListener('click', function () {
  closePopup(popupAddCard)
});

closeFullscreenPicPopup.addEventListener('click', function () {
  closePopup(fullscreenPicPopup)
});

profileForm.addEventListener('submit', handleProfileForm);
addCardForm.addEventListener('submit', handleAddCardForm);