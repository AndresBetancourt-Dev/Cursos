var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function simpleState(initial) {
    var currentValue = initial;
    return [
        function () { return currentValue; },
        function (value) {
            currentValue = value;
        },
    ];
}
var _a = simpleState(75), luckyNumber = _a[0], setLuckyNumber = _a[1];
console.log(luckyNumber());
setLuckyNumber(20);
console.log(luckyNumber());
var _b = simpleState(["Halo", "God of War", "PUBG"]), games = _b[0], setGames = _b[1];
console.log(games());
setGames(__spreadArray(__spreadArray([], games(), true), ["The Witcher 3"], false));
console.log(games());
var _c = simpleState(null), luckyWord = _c[0], setLuckyWord = _c[1];
console.log(luckyWord());
setLuckyWord("This is the lucky word");
console.log(luckyWord());
function ranker(items, rank) {
    var ranks = items.map(function (item) { return ({
        item: item,
        rank: rank(item)
    }); });
    ranks.sort(function (a, b) { return a.rank - b.rank; });
    return ranks.map(function (rank) { return rank.item; });
}
var pokemon = [
    {
        name: "Bulbasur",
        hitPoints: 20
    },
    {
        name: "Pikachu",
        hitPoints: 10
    },
];
var people = [
    {
        firstName: "Andrés",
        age: 21
    },
    {
        firstName: "Maria",
        age: 22
    },
    {
        firstName: "Santiago",
        age: 16
    },
];
var ranks = ranker(pokemon, function (_a) {
    var hitPoints = _a.hitPoints;
    return hitPoints;
});
console.log(ranks);
var persons2 = ranker(people, function (_a) {
    var age = _a.age;
    return age;
});
console.log(persons2);
