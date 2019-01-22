




const products = [
    { id: 1, name: 'Laptop', price: 1000.00, description: 'New Item' },
    { id: 2, name: 'Mobile', price: 2000.00, description: 'New ...' },
    { id: 3, name: 'Mobile 2.0', price: 3000.00 },
    { id: 4, name: 'Mobile 3.0', price: 4000.00 },
    { id: 5, name: 'Mobile 4.0', price: 4000.00 },
]

function searchProducts(query) {
    return products.filter(product => {
        return product.name.includes(query)
    })
}

module.exports = searchProducts;
