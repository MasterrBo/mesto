
let profileAddButton = document.querySelector(".button_edit");
let popupCloseButton = document.querySelector(".popup__close-button");
let popup = document.querySelector(".popup");
let popupSaveButton = document.querySelector(".popup__save");

function openPopup() {
  document.getElementById("ID_popup").classList.add("popup_activ");
}

function closePopup() {
  document.getElementById("ID_popup").classList.remove("popup_activ");
}

profileAddButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");

// Находим поля формы в DOM
let nameInput = document.getElementById("name");
let profileTitle = document.querySelector(".profile__title");
let profilePost = document.querySelector(".profile__post");
let jobInput = document.getElementById("job");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profilePost.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener("submit", formSubmitHandler);
popupSaveButton.addEventListener("click", closePopup);




