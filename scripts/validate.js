const formData = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: ".popup__save_action",
  errorClass: '.popup__error-message',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input-error'
};

const showError = (form, input, errorMessage, formData) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(formData.inputErrorClass);
  errorElement.textContent = errorMessage;
}

const hideError = (form, input, formData) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(formData.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (form, input, formData) => {
  const isInputNotValid  = !input.validity.valid;

  if(isInputNotValid) {
    const errorMessage = input.validationMessage;

    showError(form, input, errorMessage, formData);
  } else {
    hideError(form, input, formData);
  }
};

// Дизеблим кнопку если форма невалидна
const toggleButtonState = (inputList, submitButtonElement, formData) => {
    //если хотя бы один инпут невадиный - кнопке добавлялем класс с серым цветом и устанавливаем атрибут disabled
    const inputElements = Array.from(inputList);
    const hasInvalidInput = inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });

  if (hasInvalidInput) {
    submitButtonElement.classList.add(formData.inactiveButtonClass);

    submitButtonElement.setAttribute('disabled', true);

  // А иначе убираем класс серой кноки и убираем атрибут disabled
  } else {
    submitButtonElement.classList.remove(formData.inactiveButtonClass);
    submitButtonElement.removeAttribute('disabled');
  }
};

const setEventListeners = (form, formData) => {
  const inputList = form.querySelectorAll(formData.inputSelector);
  const submitButtonElement = form.querySelector(formData.submitButtonSelector);

  const inputListIterator = (input) => {
    const handleInput = () => {
      // Проверяем на валидность форму и переключаем ее активность
      checkInputValidity(form, input, formData);
      toggleButtonState(inputList, submitButtonElement, formData);
    };

    input.addEventListener('input', handleInput);
  };

  // Проверяем при загрузке формы валидны ли наши поля
  // toggleButtonState(inputList, submitButtonElement);  - не работает!

  inputList.forEach(inputListIterator);
};

const enableValidation = (formData) => {
  const forms = document.querySelectorAll(formData.formSelector);

  const formListIterator = (form) => {
    setEventListeners(form, formData);
  };

  forms.forEach(formListIterator);
};

enableValidation(formData);