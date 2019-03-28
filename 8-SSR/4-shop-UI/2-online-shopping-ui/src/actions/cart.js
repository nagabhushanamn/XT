




export function buy(item, qty) {
    return { type: 'BUY_ASYNC', item, qty }
}

export function loadCart(user) {
    return { type: { type: 'LOAD_CART', cart: {} } }
}
