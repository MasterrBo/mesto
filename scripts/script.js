// const profileOpenPopupButton = document.querySelector('.edit-button')
// const popup = document.querySelector('.popup')
// const popupCloseButton = document.querySelector('.popup__close')
// console.log(profileOpenPopupButton)

function openPopup() {
  document.getElementById('ID_popup').classList.add('popup_activ');
}

function closePopup() {
  document.getElementById('ID_popup').classList.remove('popup_activ');
}

profileButtonEdit.addEventListener('click', openPopup);
profileButtonClose.addEventListener('click', closePopup);

// function closePopup() {
//   popap.classList.remove('popup__opened);
// }

// Находим форму в DOM
let formElement = document.querySelector('.popup__container')  // Воспользуйтесь методом querySelector()

// Находим поля формы в DOM
let nameInput = document.getElementById('popup__name-field');  
let jobInput = document.getElementById('popup__job-field'); 
let profileName = document.querySelector('.popup__name-field');  // Воспользуйтесь инструментом .querySelector()
let profileJob = document.querySelector('.popup__job-field'); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

    // Получите значение полей jobInput и nameInput из свойства value
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

let popupSave = document.querySelector('.popup__submit-button');
popupSave.addEventListener("click", closePopup);