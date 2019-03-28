

var request = require('supertest');
var app = require('../app');
var mongoose=require('mongoose')

describe('GET /', function () {
    it('should be true',()=>{
        expect(true).toBe(true)
    });
    afterAll(() => mongoose.disconnect());
});