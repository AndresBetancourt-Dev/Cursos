/**
 * Assertion Examples
 */

const element = {
    textContent: 'hello'
};

const elementsArray = [1,2,3,4,5,6,7];

expect(element.textContent).toBe('hello');
expect(elementsArray).toHaveLength(7);

//Jest Dom
// Comes with create react app

//src/setupTests.js imports it before each test, makes matchers available
//DOM-based matchers
//toBeVisible() - toBeChecked()
//More to come!
