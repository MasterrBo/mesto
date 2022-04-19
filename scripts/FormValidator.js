
// Создайте класс FormValidator, который настраивает валидацию полей формы

export default class FormValidator {
  constructor(formData, form) {
    this._formData = formData;
    this._form = form;
    this._inputs = form.querySelectorAll(formData.inputSelector);
    this._submitButton = form.querySelector(formData.submitButtonSelector);
  }

  _setEventListeners = () => {
    // Проверяем при загрузке формы валидны ли наши поля
    this._inputs.forEach(this._inputListIterator);
  };

  _inputListIterator = (input) => {
    input.addEventListener('input', () => this._handleInput(input));
  };

  _handleInput = (input) => {
    // Проверяем на валидность форму и переключаем ее активность
    this._checkInputValidity(input);
    // выключаем и включаем кнопку отправки
    this._toggleButtonState();
  };

  _checkInputValidity = (input) => {
    const isInputNotValid  = !input.validity.valid;
  
    // если невалиден берем из инпута сообщение и выводим
    if(isInputNotValid) {
      const errorMessage = input.validationMessage;
  
      this._showError(input, errorMessage);
    } else {
      this._hideError(input);
    }
  };

  _showError = (input, errorMessage) => { 
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.add(this._formData.inputErrorClass);
    // добавляем текст ошибки
    errorElement.textContent = errorMessage;
  }
  
  // убираем ошибку
  _hideError = (input) => {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._formData.inputErrorClass);
    errorElement.textContent = '';
  };

  _toggleButtonState = () => {
    //если хотя бы один инпут невадиный - кнопке добавлялем класс с серым цветом и устанавливаем атрибут disabled
    const inputElements = Array.from(this._inputs);
    const hasInvalidInput = inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });

    if (hasInvalidInput) {
      this._submitButton.classList.add(this._formData.inactiveButtonClass);
      this._submitButton.setAttribute('disabled', true);

    // А иначе убираем класс серой кноки и убираем атрибут disabled
    } else {
      this._submitButton.classList.remove(this._formData.inactiveButtonClass);
      this._submitButton.removeAttribute('disabled');
    }
  };

  enableValidation = () => {
    this._setEventListeners();
  }
}
