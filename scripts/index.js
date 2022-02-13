
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