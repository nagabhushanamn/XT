

export function createNewOrder(userId, cart) {
    //..
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
    return { type: 'NEW_ORDER', order }
}