

const template = document.createElement('template');
template.innerHTML = `
<style>

section#card{
    background: #fff;
    padding: 20px;
    margin: 1em auto;
    border-radius: $borders;
    box-shadow: 0 10px 30px rgba(0, 0, 0, .2);
    width:60%;
}

</style>

<main>
    <section id="card">
     <h3> Login </h3>
    </section>
</main>
    
`

// Web compoennnt
class XLogin extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'closed' })
        this.root.appendChild(template.content.cloneNode(true))
    }

}

customElements.define('x-login', XLogin)

