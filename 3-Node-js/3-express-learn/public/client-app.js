

console.log('-client-app.js-')


let todosBtn = document.getElementById('todos-btn');
todosBtn.addEventListener('click', e => {
    fetch('todos')
        .then(response => response.json())
        .then(todos => {
            console.log(todos);
        })
})
