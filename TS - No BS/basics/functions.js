"use strict";
exports.__esModule = true;
exports.getName = exports.introduce = exports.printFormat = exports.format = exports.addStrings = void 0;
function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
exports["default"] = addNumbers;
var addStrings = function (stringOne, stringTwo) {
    if (stringTwo === void 0) { stringTwo = ""; }
    return stringOne + " " + stringTwo;
};
exports.addStrings = addStrings;
//Union type in typescript | not || or
//Any of the types that qualify are ok for enter into these particular parameter
var format = function (title, parameter) { return title + " " + parameter; };
exports.format = format;
var printFormat = function (title, parameter) { return console.log((0, exports.format)(title, parameter)); };
exports.printFormat = printFormat;
//export const fetchData = (url : string) : Promise<string> =>  Promise.resolve(`Data from ${url}`);
var introduce = function (salutation) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return salutation + " " + names.join(" ");
};
exports.introduce = introduce;
function getName(user) {
    var _a, _b;
    return ((_a = user === null || user === void 0 ? void 0 : user.first) !== null && _a !== void 0 ? _a : "First") + " " + ((_b = user === null || user === void 0 ? void 0 : user.last) !== null && _b !== void 0 ? _b : "Last");
}
exports.getName = getName;
