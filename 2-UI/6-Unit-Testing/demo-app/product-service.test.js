

let searchProducts = require('./product-service');

expect.addSnapshotSerializer({
    test: (val) => val.id && val.name && val.price,
    print: (val) => `${val.name} ${val.price}`
});

describe('product-service tests', () => {


    // it('return the products that match query', () => {
    //     expect(searchProducts('M')).toEqual(
    //         [{ id: 2, name: 'Mobile', price: 2000, description: 'New ...' },
    //         { id: 3, name: 'Mobile 2.0', price: 3000 },
    //         { id: 4, name: 'Mobile 3.0', price: 4000 },
    //         ]
    //     )
    // })


    it('return the products that match query', () => {
        ['M', 'Mo', 'Lap', 'Cam'].forEach(query => {
            expect(searchProducts(query)).toMatchSnapshot()
        })
    })

    it('return the products that match query v2', () => {
        expect(searchProducts('Lap')).toMatchSnapshot()
    })

    it('return the products that match query v2', () => {
        expect(searchProducts('Lap')).toMatchSnapshot()
    })




})