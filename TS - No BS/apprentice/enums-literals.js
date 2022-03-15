// const beforeLoad = "beforeLoad";
// const afterLoad = "afterLoad";
// const loading = "loading";
// const loaded = "loaded";
var _a;
var LoadingState;
(function (LoadingState) {
    LoadingState["beforeLoad"] = "beforeLoad";
    LoadingState["afterLoad"] = "afterLoad";
    LoadingState["loading"] = "loading";
    LoadingState["loaded"] = "loaded";
})(LoadingState || (LoadingState = {}));
var englishLoadingStates = (_a = {},
    _a[LoadingState.beforeLoad] = "Before Load",
    _a[LoadingState.afterLoad] = "After Load",
    _a);
var isLoading = function (state) {
    return state === LoadingState.loading;
};
//Without Enums
//console.log(isLoading("dog"));
/*
Argument of type '"dog"' is not assignable to parameter of type 'LoadingState'. */
/**
 * Literal Types
 */
//Number Literal
function rollDice(dice) {
    var pip = 0;
    for (var i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;
    }
    return pip;
}
//Bad Literal
//console.log(rollDice(4));
//Good Literal
console.log(rollDice(1));
function ecommerce(name, data) {
    console.log("".concat(name, "  : ").concat(JSON.stringify(data)));
}
ecommerce("checkout", { cartCount: 1 });
ecommerce("addToCart", { productId: 5 });
