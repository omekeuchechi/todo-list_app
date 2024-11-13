const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoList = document.getElementById('todo-list');

        let todos = JSON.parse(localStorage.getItem('todos')) || [];

        function renderTodos() {
            todoList.innerHTML = '';
            todos.forEach((todo, index) => {
                const li = document.createElement('li');
                li.textContent = todo.text;
                li.className = todo.completed ? 'completed' : '';
                
                // Toggle completion on click
                li.onclick = () => {
                    todo.completed = !todo.completed;
                    saveTodos();
                    renderTodos();
                };

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = (event) => {
                    event.stopPropagation(); // Prevent triggering the click on the li
                    todos.splice(index, 1);
                    saveTodos();
                    renderTodos();
                };
                
                li.appendChild(deleteButton);
                todoList.appendChild(li);
            });
        }

        function saveTodos() {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        addTodoButton.onclick = () => {
            const todoText = todoInput.value.trim();
            if (todoText) {
                todos.push({ text: todoText, completed: false });
                saveTodos();
                renderTodos();
                todoInput.value = '';
            }
        };

        renderTodos();