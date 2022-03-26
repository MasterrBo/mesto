
// выделяем код валидации в отдельный файл

//Объект для запуска валидации формы (с несколькими ключами)

const obj = {
  formSelector: '.popup__container',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__save',
  errorClass: '.error-message'

  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error'
}

enableValidation(obj);

function enableValidation({formSelector, inputSelector, submitButtonSelector, errorClass}) {
//Наша логика (запуск процесса наложения валидации)
// 1. Запускаем enableValidation, получаем в него объект.
// 2. На основе этого объекта накладываем валидацию на все инпуты внутри всех форм.
// 3, Следовательно сначала надо найти все формы.

    // Ищем все формы
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach(form => {
    // Прописать обработчик для каждой формы, чтобы она не сабмитилась
    form.addEventListener('submit', evt =>  evt.preventDefault());

    // Находим все инпуты
    // Действие наложения обработчиков на поля форм
    const inputs = form.querySelectorAll(inputSelector);
    inputs.forEach(input => {
     input.addEventListener('input', evt => {
    // Проверка валидности введенных данных

    console.log(input.validity); 
    // console.log(input.validitationMessage);  не работает!

    if (input.validity.valid) {
      //** Скрыть ошибки под полем
 
  } else {
     //** Показать ошибки под полем
     const inputName = input.getAttribute('name');
     const errorMessage = document.getElementById(`${inputName}-error`);
     console.log(errorMessage);
       }
     })
    }) 

 })
}
 