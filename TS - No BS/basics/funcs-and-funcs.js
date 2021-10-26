"use strict";
//Function Parameters
//Callback has implicity of any type if not defined
// : () => [return value] type of callback
exports.__esModule = true;
exports.createAdder = exports.multiplyBy10 = exports.arrayMutate = exports.printCallbackText = exports.printToFile = void 0;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
exports.printToFile = printToFile;
var printCallbackText = function () { return console.log("This text also will be printed"); };
exports.printCallbackText = printCallbackText;
console.log("This text will be printed", exports.printCallbackText);
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
exports.arrayMutate = arrayMutate;
var multiplyBy10 = function (n) { return n * 10; };
exports.multiplyBy10 = multiplyBy10;
console.log(arrayMutate([1, 20, 305, 45], exports.multiplyBy10));
function createAdder(num) {
    //Closure = num
    return function (val) { return num + val; };
}
exports.createAdder = createAdder;
var FIRST_VALUE = 100;
var addOne = createAdder(FIRST_VALUE);
console.log(addOne(55));
//Closures Review
function creaFunc() {
    var nombre = "Mozilla";
    function muestraNombre() {
        console.log(nombre);
    }
    return muestraNombre;
}
var miFunc = creaFunc();
miFunc();
