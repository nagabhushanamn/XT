
let hotel = require('./hotel')

// test('sync food test', () => {
//     let food = hotel.getFoodSync();
//     expect(food).toBe('biryani')
// })


// // test('async food test', (done) => {
// //     let promise = hotel.getFoodAsync();
// //     promise.then(result => {
// //         expect(result).toBe('biryani')
// //         done();
// //     })
// // })


// // test('async food test', () => {
// //     let promise = hotel.getFoodAsync();
// //     return promise.then(result => {
// //         expect(result).toBe('biryani')
// //     })
// // })

// beforeEach(() => {
//     console.log("before each");
// });
// afterEach(() => {
//     console.log("before each");
// });

// beforeAll(() => {
//     console.log("before all");
// });

// afterAll(() => {
//     console.log("before all");
// });


// test('async food test', async () => {
//     let result = await hotel.getFoodAsync();
//     expect(result).toBe('biryani')
// })




// describe('suite-1', () => {

//     beforeEach(() => {
//         console.log("before each");
//     });
//     afterEach(() => {
//         console.log("before each");
//     });

//     beforeAll(() => {
//         console.log("before all");
//     });

//     afterAll(() => {
//         console.log("before all");
//     });

//     it('be true', () => {
//         expect(1).toBeTruthy()
//     })
//     it('be false', () => {
//         expect(0).toBeFalsy()
//     })
// })


function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
        callback(items[index]);
    }
}


describe('mocks', () => {

    it('call function on each item', () => {
        const mockCallback = jest.fn(x => 42 + x);
        forEach([11, 22], mockCallback)
        expect(mockCallback.mock.calls.length).toBe(2);
        expect(mockCallback.mock.calls[0][0]).toBe(11);
        expect(mockCallback.mock.results[0].value).toBe(53);
        expect(mockCallback.mock.results[1].value).toBe(64);
    })

})

