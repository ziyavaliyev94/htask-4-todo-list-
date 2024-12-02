document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const input = document.getElementById('inp');
    const todoText = input.value.trim();

    if (todoText) {

        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');

        todoItem.innerHTML = `
            <input type="text" value="${todoText}" readonly>
            <button class="complete"><i class="fas fa-check"></i></button>
            <button class="edit"><i class="fas fa-pen"></i></button>
            <button class="delete"><i class="fas fa-trash"></i></button>
        `;

        document.querySelector('.container').appendChild(todoItem);

        input.value = '';

        const completeButton = todoItem.querySelector('.complete');
        completeButton.addEventListener('click', () => {
            todoItem.style.textDecoration = 'line-through';
        });

        const deleteButton = todoItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            todoItem.remove();
        });

        const editButton = todoItem.querySelector('.edit');
        editButton.addEventListener('click', () => {
            const inputField = todoItem.querySelector('input[type="text"]');
            if (inputField.readOnly) {
                inputField.readOnly = false;
                inputField.focus();
            } else {
                inputField.readOnly = true;
            }
        });
    }
});
