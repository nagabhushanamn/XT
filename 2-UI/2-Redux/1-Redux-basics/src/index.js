console.log("-index.js-");
import 'bootstrap/dist/css/bootstrap.css'



import store from './store'
import { loadProducts } from './actions/products'
import { buy } from './actions/cart'


setInterval(() => {
    let action = loadProducts('elec', 2)
    store.dispatch(action)
}, 2000)



setInterval(() => {
    let action = buy({}, 1)
    store.dispatch(action)
}, 3000)



// UI
//------------------------------------------------------


// App UI
store.subscribe(() => {
    console.log("------------------------------------");
    console.log("-App View-");
    const state = store.getState();
    console.log(state.cart);
    console.log("------------------------------------");
})


// ProductList UI
store.subscribe(() => {
    console.log("------------------------------------");
    console.log("-ProductList View-");
    const state = store.getState();
    console.log(state.products);
    console.log("------------------------------------");
})



//------------------------------------------------------