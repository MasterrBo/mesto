// Форма 1

let profileAddButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileAddButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

let formElement = document.querySelector(".popup__container");

let nameInput = document.getElementById("name"); 
let jobInput = document.getElementById("job"); 
let profileTitle = document.querySelector(".profile__title");
let profilePost = document.querySelector(".profile__post");

function openPopup() {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profilePost.textContent;
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profilePost.textContent = jobInput.value;
  console.log(nameInput.value);
  console.log(jobInput.value);
  closePopup();
}

formElement.addEventListener("submit", formSubmitHandler);

// Форма 2

let profileAddcardButton = document.querySelector(".profile__add-button");
let popupCloseButton2 = document.querySelector(".popup__close-button2");

profileAddcardButton.addEventListener('click', openPopup2);
let popup2 = document.querySelector(".popup2");

function closePopup2() {
  popup2.classList.remove("popup_opened");
}

profileAddcardButton.addEventListener('click', openPopup2);
popupCloseButton2.addEventListener('click', closePopup2);

let formElement2 = document.querySelector(".popup__container_addcard");

let nameInput2 = document.getElementById("photo-name"); 
let linkInput = document.getElementById("link"); 
let profileTitle2 = document.querySelector("photo-name");
let profileLink = document.querySelector("link");

function openPopup2() {
  popup2.classList.add("popup_opened");
  nameInput2.value = profileTitle2.textContent;
  linkInput.value = profileLink.textContent;
}

function formSubmitHandler2(evt) {
  evt.preventDefault();
  profileTitle2.textContent = nameInput2.value;
  profileLink.textContent = linkInput.value;
  console.log(nameInput2.value);
  console.log(linkInput.value);
  closePopup2();
}

formElement2.addEventListener("submit", formSubmitHandler2);

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

//Вытаскиваем template
const template = document.querySelector('#card-template');

//Вытаскиваем элементы которые нам нужны из верстки в переменные
const emptyContainer = document.querySelector('.elements');

// Делаю переменную для пустого артикл
const cardsContainer = document.querySelector('.element');
const elementContent = document.querySelector('.element__content');


// function render() {
//   initialCards.forEach((x) => {
//     renderItem1(x.name, x.link);
//   });
  //initialCards.forEach((x) => {cardsContainer(x.name, x.link)});
// }

//Перебираем массив
initialCards.forEach(function(x) {
  renderItem1(x.name, x.link);
});

// Передаем данные в шаблон и выводим

function renderItem1(name, link) {
  const newItem = template.content.querySelector('.element').cloneNode(true);

  newItem.querySelector('.element__title').innerText = name;
  const cardsPic = newItem.querySelector('.element__photo');
  cardsPic.alt = name;
  cardsPic.src = link;
  emptyContainer.appendChild(newItem);
}

// Новый Код

function addItem(event) {
  renderItem1(input.value);
}

button.addEventListener('click', addItem);

// Добавление карточки фото ссылка

function addNewcard(nameValue, linkValue) {
  const userContainer = document.createElement('article');
  userContainer.classList.add('element');

  const nameElement = document.createElement('h4');
  nameElement.classList.add('card__name');
  nameElement.textContent = nameValue; 

  const linkElement = document.createElement('h4');
  linkElement.classList.add('card__link');
  linkElement.textContent = linkValue; 

  const likeButtonElement = document.querySelector('button');
  likeButtonElement.classList.add('element__button'); 

  userContainer.append(nameElement, linkElement, likeButtonElement);
  emptyContainer.append(userContainer); 
}