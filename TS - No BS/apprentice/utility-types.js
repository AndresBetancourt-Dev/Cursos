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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var merge = function (user, overrides) {
    return __assign(__assign({}, user), overrides);
};
console.log(merge({
    name: "Jack",
    id: "foo",
    email: "something@gmail.com"
}, { email: "jack-email@gmail.com", phone: " 778888" }));
var mapById = function (users) {
    return users.reduce(function (a, v) {
        var _a;
        var id = v.id, user = __rest(v, ["id"]);
        return __assign(__assign({}, a), (_a = {}, _a[v.id] = user, _a));
    }, {});
};
console.log(mapById([
    {
        name: "Jack",
        id: "foo",
        email: "something@gmail.com"
    },
    { name: "Papito", id: "pap", email: "papito@gmail.com", phone: " 778855" },
]));
