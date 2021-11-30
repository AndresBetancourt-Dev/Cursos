"use strict";
/**
 * House interface
 */
/**
 * House with Id Interface
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
var defaultFilter = function (_a) {
    var name = _a.name;
    return name === "Atreides";
};
function findHouses(input, filter) {
    var houses = typeof input === "string" ? JSON.parse(input) : input;
    return (filter ? houses.filter(filter) : houses).map(function (house) { return (__assign({ id: houses.indexOf(house) }, house)); });
}
