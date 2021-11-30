function add3DCoordinate(coordinateOne, coordinateTwo) {
    return [
        coordinateOne[0] + coordinateTwo[0],
        coordinateOne[1] + coordinateTwo[1],
        coordinateOne[2] + coordinateTwo[2],
    ];
}
console.log(add3DCoordinate([1, 4, 5], [7, 8, 9]));
/**
 * React useState String uses tuples
 */
function simpleStringState(initial) {
    var stringState = initial;
    return [
        function () { return stringState; },
        function (value) {
            stringState = value;
        },
    ];
}
var _a = simpleStringState("Andrés"), firstName = _a[0], setFirstName = _a[1];
var _b = simpleStringState("David"), secondName = _b[0], setSecondName = _b[1];
console.log(secondName());
console.log(firstName());
setFirstName("Andrés David");
console.log(firstName());
console.log(secondName());
