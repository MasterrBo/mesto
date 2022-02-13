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
profileAddcardButton.addEventListener('click', openPopup2);
let popup2 = document.querySelector(".popup2");

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileAddcardButton.addEventListener('click', openPopup2);
popupCloseButton.addEventListener('click', closePopup);

let formElement2 = document.querySelector(".popup__container_addcard");

let nameInput2 = document.getElementById("photo-name"); 
let linkInput = document.getElementById("link"); 
let profileTitle2 = document.querySelector("photo-name");
let profileLink = document.querySelector("link");

function openPopup2() {
  popup.classList.add("popup_opened");
  nameInput2.value = profileTitle2.textContent;
  linkInput.value = profileLink.textContent;
}

function formSubmitHandler2(evt) {
  evt.preventDefault();
  profileTitle2.textContent = nameInput2.value;
  profileLink.textContent = linkInput.value;
  console.log(nameInput2.value);
  console.log(linkInput.value);
  closePopup();
}

formElement2.addEventListener("submit", formSubmitHandler2);