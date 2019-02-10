
import axios from 'axios';

export function createNewOrder(userId, cart) {

    return function (dispatch) {
        let keys = Object.keys(cart);
        let items = [];
        let totalAmount = 0.0;
        keys.forEach(key => {
            let itemLine = cart[key];
            let item = itemLine.item;
            items.push(item);
            totalAmount += (item.price * itemLine.qty)
        })
        let order = { id: Math.floor(Math.random() * 1000), userId, items: [...items], totalAmount }

        axios
            .post('http://localhost:5000/api/orders/nag', {})
            .then(response => {
                console.log(response)
                dispatch({ type: 'NEW_ORDER', order })
            })

    }


}