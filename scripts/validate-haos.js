// Sprint 6

document.forms.form1; // первая форма
document.forms.form2; // вторая форма 
//достанем элементы формы по их именам
const yourname = form1.elements.yourname;
const yourjob = form1.elements.yourjob;

//Отменить стандартное поведение, которое возникает при наступлении события submit
profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  yourname.value = '';
  yourjob.value = '';
  console.log('profileForm submitted');
});

profileForm.addEventListener('input', function (evt) {
    let isValid = false;
    if (yourname.value.length > 1 && yourname.value.length < 40 && yourjob.value.length > 1 && yourjob.value.length < 200) {
      isValid = true;
  }

 setSubmitButtonState(isValid);
}
);

 const formSubmit = event => {
  event.preventDefault();
  console.log('profileForm submitted, is valid?', profileForm.checkValidity());
 }

//Проверить валидность инпута и показать это пользователю
const checkInputValidity = (profileForm, input) => {

    const errorMessage = profileForm.querySelector(`#error-${input.id}`);
    console.log(errorMessage);

    if (input.validity.valid) {
        errorMessage.textContent = '';
        input.classList.remove('input__text_type_error');
    } else {
        errorMessage.textContent = input.validationMessage;
        input.classList.add('input__text_type_error');
    }
  }

//объявляем функцию setSubmitButtonState для событий change и input
function setSubmitButtonState(isFormValid) {

const saveButton = document.querySelector('.popup__save_action');

  if (isFormValid) {
    saveButton.removeAttribute('disabled');
    saveButton.classList.remove('popup__save_disabled'); 
  } else {
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__save_disabled'); 
  }
}

  //Контсанта для проверки - заполнены ли поля формы
 
// const checkButtonValidity = (profileForm, button) => {
//   if (profileForm.checkValidity()) {
//       saveButton.removeAttribute('disabled');
//       saveButton.classList.remove('popup__save_disabled');
//   } else {
//       saveButton.setAttribute('disabled', '');
//       saveButton.classList.add('popup__save_disabled');
//   }
// }

function enableValidation() {
  profileForm.addEventListener('submit', formSubmit);

  const inputs = document.querySelectorAll('.popup__field');

  inputs.forEach(input => {
     input.addEventListener ('input',(event) => checkInputValidity(profileForm, input));
    })
  }

// включение валидации вызовом enableValidation
// все настройки передаются при вызове//

enableValidation();
// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });