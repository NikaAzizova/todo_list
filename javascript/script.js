"use strict";
//Получаем переменные из html страницы
const input = document.querySelector('#input');
const btnDelete = document.querySelector('#button-delete');
const btnAdd = document.querySelector('#btn-add');
const todoList = document.getElementById('todo-list');
const noTask = document.querySelector('.no-task');
function makeTasks() {
    const inputValue = input.value;
    //Добавляем задачу в локальное хранилище
    window.localStorage.setItem('task', JSON.stringify(inputValue));
    //прописываем условие 'если есть задача'
    if (inputValue !== '') {
        //Убираем атрибут disabled
        btnDelete.removeAttribute('disabled');
        btnDelete.style.backgroundColor = 'rgb(237, 182, 87)';
        //получаем задачу из локального хранилища
        let taskCard = window.localStorage.getItem('task');
        const parseObj = JSON.parse(taskCard);
        //создаем html код для вставки в блок задач вместе с самой задачей
        const template = `
        <div class="block-task">
        <p class="task">${parseObj}</p>
        <input type="checkbox" name="checkbox" id="checkbox" class="checkbox">
        </div>`;
        //используем insertAdjacentHTM для вставки задачи
        todoList.insertAdjacentHTML("beforeend", template);
        //Удаляем слова 'нет задач' из блока
        noTask.style.display = 'none';
    }
    input.value = '';
}
//делаем кнопку неактивной
function makeTaskDisabled() {
    const inputValue = input.value;
    if (!inputValue) {
        btnDelete.setAttribute('disabled', String(true));
        btnDelete.style.backgroundColor = 'grey';
    }
}
//очищаем список задач и локальное хрпнилище при клике на кнопку
function clearTasks() {
    todoList.remove();
    btnDelete.setAttribute('disabled', String(true));
    btnDelete.style.backgroundColor = 'grey';
    const elem = document.querySelector('.second-header');
    const template = `<div class="todo-list" id="todo-list">
    <div class="no-task">Нет задач</div>
    </div> `;
    elem.insertAdjacentHTML('afterend', template);
    window.localStorage.clear();
}
btnAdd.addEventListener('click', makeTasks);
makeTaskDisabled();
btnDelete.addEventListener('click', clearTasks);
//# sourceMappingURL=script.js.map