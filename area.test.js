const request = require('supertest');
const area = require('./area');

test('getArea([3,3]) should return 9', () => {
    var prova = [3,3]
    const response = area.getArea(prova);
    expect(response).toBe(9)
});

test('getArea([-3,3]) should return -1', () => {
    var prova = [-3,3]
    const response = area.getArea(prova);
    expect(response).toBe(-1)
});

test('getArea([3.1,3]) should return -1', () => {
    var prova = [3.1,3]
    const response = area.getArea(prova);
    expect(response).toBe(-1)
});

test('getArea([not_int,int]) should return -1', () => {
    var prova = ['a',1]
    const response = area.getArea(prova);
    expect(response).toBe(-1)
});

test('getArea(int,not_int]) should return -1', () => {
    var prova = [1,'a']
    const response = area.getArea(prova);
    expect(response).toBe(-1)
});

test('getArea([not_int,not_int]) should return -1', () => {
    var prova = ['a','a']
    const response = area.getArea(prova);
    expect(response).toBe(-1)
});