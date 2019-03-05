



let loadBtn = document.getElementById('load-btn')
let saveBtn = document.getElementById('save-btn')

let keyField = document.getElementById('key-field')
let valueField = document.getElementById('value-field')


loadBtn.addEventListener('click', e => {
    let key = keyField.value;
    if (key) {
        fetch(`load/${key}`)
            .then(response => response.json())
            .then(record => {
                valueField.value = record.value;
            })
    }
})
saveBtn.addEventListener('click', e => {
    let key = keyField.value;
    let value = valueField.value;
    if (key && value) {
        fetch(`save/${key}`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ value })
            })
            .then(response => response.json())
            .then(record => {
                valueField.value = record.value;
            })
    }
})

