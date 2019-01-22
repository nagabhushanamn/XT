
import 'bootstrap/dist/css/bootstrap.css';

console.log("-index.js-");




// Template 
const template = document.createElement('template');
template.innerHTML = `
    <style>
        .alert{
            padding:20px;
            margin:5px;
        }
        .alert-info{
            background-color:#DEF;
        }
    </style>
    <div class="alert alert-info">
        <button class="btn btn-success">+</button>
        <span class="badge badge-dark">0</span>
        <button class="btn btn-danger">-</button>
    </div>
`

// Web compoennnt
class XCounter extends HTMLElement {

    static get observedAttributes() {
        return ['value']
    }

    constructor() {
        super()

        this._value = 0;

        this.root = this.attachShadow({ mode: 'closed' })

        this.root.appendChild(template.content.cloneNode(true))

        this.valueElement = this.root.querySelector('span');
        this.incrementBtn = this.root.querySelectorAll('button')[0];
        this.decrementBtn = this.root.querySelectorAll('button')[1];

        this.incrementBtn.addEventListener('click', e => {
            this._value++
            this.value = this._value;
        })
        this.decrementBtn.addEventListener('click', e => {
            this._value--
            this.value = this._value;
        })
    }

    set value(value) {
        this.valueElement.innerText = value;
        this.dispatchEvent(new CustomEvent('valueChange', { detail: this._value }))
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'value') {
            this._value = Number.parseInt(newValue, 10)
            this.valueElement.innerText = this._value;
        }
    }
}

customElements.define('x-counter', XCounter)


var xCounter = document.querySelector('x-counter');
xCounter.addEventListener('valueChange', e => {
    console.log(e.detail);
})