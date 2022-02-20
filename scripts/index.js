
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

//Перебираем массив
initialCards.forEach(function(x) {
  renderItem(x.name, x.link);
});

// Передаем данные в шаблон и выводим
function renderItem(name, link, adding = false) {
  const newItem = template.content.querySelector('.element').cloneNode(true);
  const firstItem = document.querySelector('.elements').firstChild;

  newItem.querySelector('.element__title').innerText = name;
  const cardsPic = newItem.querySelector('.element__photo');
  cardsPic.alt = name;
  cardsPic.src = link;

  if (adding) {
    emptyContainer.insertBefore(newItem, firstItem);
  } else {
    emptyContainer.appendChild(newItem);
  }
}

// Добавление карточки: название и ссылка
// Форма 2

const profileAddcardButton = document.querySelector(".profile__add-button");
let popupCloseButton2 = document.querySelector(".popup__close-button2");

profileAddcardButton.addEventListener('click', openPopup2);
let popup2 = document.querySelector(".popup2");

profileAddcardButton.addEventListener('click', openPopup2);
popupCloseButton2.addEventListener('click', closePopup2);

let formElement2 = document.querySelector(".popup__container_addcard");

//Определяем переменные для второй формы

let nameInput2 = document.getElementById("photo-name");
let linkInput = document.getElementById("link");

function openPopup2() {
  popup2.classList.add("popup_opened");
}

function closePopup2() {
  popup2.classList.remove("popup_opened");
  nameInput2.value = ""
  linkInput.value = ""
}

formElement2.addEventListener("submit", formSubmitHandler2);

function formSubmitHandler2(evt) {
  evt.preventDefault();

  renderItem(nameInput2.value, linkInput.value, true);

  closePopup2();
}
