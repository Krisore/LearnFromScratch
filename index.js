var todoList = document.getElementById('todo-list')


var toggleCheck = function () {
    let parent = this.parentNode;
    parent.classList.toggle('checked');
}

var deleteTodo = function () { 
    let todoLi = this.parentNode;
    todoLi.remove();
};
var addTodo = function (todo) {
    var todoItem = document.createElement('li');
    var todoLabel = document.createElement('label');
    var todoCheckbox = document.createElement('input');

    todoLabel.innerHTML = todo;
    todoCheckbox.setAttribute('type', 'checkbox');
    todoCheckbox.onclick = toggleCheck;

    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'del';
    deleteButton.className = 'delete';
    deleteButton.onclick = deleteTodo;

    todoList.appendChild(todoItem);
    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(deleteButton);
};

document.getElementById('add').onclick = function () {
    var parent = this.parentNode;
    var addTextInput = parent.children[0];
    if (addTextInput.value === '') {
        alert('Please enter a todo');
    } else {
        addTodo(addTextInput.value);
        addTextInput.value = '';
    }
};
