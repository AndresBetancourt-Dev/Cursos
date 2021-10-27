"use strict";
/**
 * Function Overloading
 * Depending on the parameter i will do a different action
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.coordinateRegex = exports.parseCoordinateFromNumbers = exports.parseCoordinateFromObject = void 0;
;
function parseCoordinateFromObject(obj) {
    return __assign({}, obj);
}
exports.parseCoordinateFromObject = parseCoordinateFromObject;
function parseCoordinateFromNumbers(x, y) {
    return {
        x: x,
        y: y
    };
}
exports.parseCoordinateFromNumbers = parseCoordinateFromNumbers;
exports.coordinateRegex = /(x|y):(\d{1,10}),(y|x):(\d{1,10})/;
/** If i specify both paramethers first Overload Signature will cause an issue */
/** ? Operator in paramether indicates that the argument is optional so the overload signature it's compatible */
function parseCoordinate(arg1, arg2) {
    var coordinate = {
        x: 0,
        y: 0
    };
    //As is the way to cast into the specified type i want
    //Since paramether if of type unknow i need to cast it to the expected interface definition in Coordinate
    if (typeof arg1 === "string") {
        if (!exports.coordinateRegex.test(arg1)) {
            return coordinate;
        }
        arg1.split(",").forEach(function (str) {
            var _a = str.split(":"), key = _a[0], value = _a[1];
            coordinate[key] = parseInt(value, 10);
        });
    }
    else if (typeof arg1 === "object") {
        coordinate = __assign({}, arg1);
    }
    else {
        coordinate = {
            x: arg1,
            y: arg2
        };
    }
    return coordinate;
}
;
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
console.log(parseCoordinate("x:10,y:20"));
console.log(parseCoordinate("x:1787450,y:20544884"));
//Do not match the regex pattern
console.log(parseCoordinate("no match"));
console.log(parseCoordinate("b:10,s:474854"));
