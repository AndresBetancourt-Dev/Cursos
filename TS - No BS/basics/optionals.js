/**
 * Optional Parameters
 */
function printIngredients(quantity, ingredient, extraIngredient) {
    console.log(quantity + " " + ingredient + " " + (extraIngredient ? extraIngredient : ""));
}
printIngredients("1C", "Flour");
printIngredients("1C", "Sugar", "something more");
function getEmail(user) {
    if (user.information) {
        return user.information.email;
    }
    return "";
}
/**
 *
 * Optional Chaining
 * Nullish coalescing operator
 */
function getEmailEasy(user) {
    var _a, _b;
    return (_b = (_a = user === null || user === void 0 ? void 0 : user.information) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
}
function addWithCallback(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
addWithCallback(1, 5);
