const sum = require('../public/javascripts/sum');

test('Properly adds two numbers', () => {
    expect(sum(5,5)).toBe(10);
});

test('Properly expects not a NaN', () => {
    expect(sum(5,undefined)).toBe(NaN);
});

test('Properly expects to concat strings', () => {
    expect(sum("Hello","World")).toBe("HelloWorld");
});