
// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const object = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: ".popup__save_action",
  errorClass: '.error-message',
  inactiveButtonClass: 'popup__save_disabled',
 // inputErrorClass: тут не знаю что за класс
};


const showError = (formElement, inputElement, errorMessage ) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = errorMessage;

  errorElement.classList.remove('form__input_is_valid'); //класс с зеленым цветом для валидности
  // errorElement.classlist.add('form__input-error_active');- класс с опасити
}

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  errorElement.textContent = '';
  errorElement.classList.remove('form__input-error_active');
  // inputElement.classlist.add('form__input_is_valid'); 
};

const checkInputValidity = (formElement, inputElement) => {

  const isInputNotValid  = !inputElement.validity.valid;

  if(isInputNotValid) {
    const errorMessage = inputElement.validationMessage;

    showError(formElement, inputElement, errorMessage);
  
  } else {
    hideError(formElement, inputElement);
  } 
};

// Дизеблим кнопку если форма невалидна

const toggleButtonState = (inputList, submitButtonElement) => {
    //если хотя бы один инпут невадиный - кнопке добавлялем класс с серым цветом и устанавливаем атрибут disabled
    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
  
  if (hasInvalidInput) { 
    submitButtonElement.classList.add('popup__save_disabled');

    submitButtonElement.setAttribute('disabled', true);

 // А иначе убираем класс серой кноки и убираем атрибут disabled
  } else {
    submitButtonElement.classList.remove('popup__save_disabled');
    submitButtonElement.removeAttribute('disabled');
  }  
  }; 

const setEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.popup__field');
  const submitButtonElement = formElement.querySelector('.popup__save_action');
  const inputListIterator = (inputElement) => {
    const handleInput = (event) => {
// Проверяем на валидность форму и переключаем ее активность
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButtonElement); 
    };
      inputElement.addEventListener('input', handleInput);
    };

  // Проверяем при загрузке формы валидны ли наши поля
  // toggleButtonState(inputList, submitButtonElement);  - не работает!

    inputList.forEach(inputListIterator);
  };

const enableValidation = () => { 
  const formlist = document.querySelectorAll('.popup__container');
  const formlistIterator = (formElement) => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
    formElement.addEventListener('submit', handleFormSubmit);

    setEventListeners(formElement); 
  };
   
  formlist.forEach(formlistIterator);
};

enableValidation(object);