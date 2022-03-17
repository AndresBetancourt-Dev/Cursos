/**
 * Pluck
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
function pluck(items, key) {
    return items.map(function (item) { return item[key]; });
}
var dogs = [
    {
        name: "Mimi",
        age: 12
    },
    {
        name: "LG",
        age: 13
    },
];
/**
 * Get Names
 */
console.log(pluck(dogs, "name"));
/**
 * Get ages
 */
console.log(pluck(dogs, "age"));
function sendEvent(name, data) {
    console.log([name, data]);
}
var baseEvent = {
    user: "bar",
    time: 50
};
sendEvent("addToCart", __assign(__assign({}, baseEvent), { productId: "foo", quantity: 1000 }));
sendEvent("checkout", __assign({}, baseEvent));
