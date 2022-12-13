const sub = require('../public/javascripts/sub');

test('Properly substacts two numbers', () => {
    expect(sub(10,5)).toBe(5);
});

test('Properly expects not a NaN', () => {
    expect(sub(10,undefined)).toBe(NaN);
});