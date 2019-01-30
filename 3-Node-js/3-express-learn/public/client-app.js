

console.log('-client-app.js-')


let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    fetch('todos')
        .then(response => response.json())
        .then(todos => {
            console.log(todos);
        })
})

let todoForm = document.getElementById('todo-form');
todoForm.addEventListener('submit', e => {
    e.preventDefault();
    let title = document.getElementById('new-todo').value;

    fetch('todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
    })
        .then(response => response.json())
        .then(todo => {
            console.log(todo);
        })

})