
//Создайте класс Section, который отвечает за отрисовку элементов на странице

// Первым параметром конструктора принимает объект с двумя свойствами: items и renderer.
// Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса.
// Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.

// Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы.
// Содержит публичный метод, который отвечает за отрисовку всех элементов. Отрисовка каждого отдельного элемента должна
// осуществляться функцией renderer.

// Содержит публичный метод addItem, который принимает DOM-элемент и добавляет его в контейнер.


export default class Section {
    constructor({items, renderer}, container) {
        this._items = items; 
        this._renderer = renderer;
        this._container = document.querySelector(container);
    }

    renderItems = () => {
        this._items.forEach(element => {
            this._renderer(element);
        });
    }

    addItem = (element) => {     
        this._container.append(element);
    }
}