function makeCat(name, breed) {
    return {
        name: name,
        breed: breed
    };
}
var usul = makeCat("usul", "Tabby");
//  Cannot assign to 'name' because it is a read-only property.
// usul.name = "a";
var michi = {
    name: "x",
    breed: "Pelao"
};
function makeCoordinate(x, y, z) {
    return [x, y, z];
}
//Readonly tuple
var c1 = makeCoordinate(10, 20, 30);
//c1[0] = 60;
//Array inmutability
var reallyConst = [1, 2, 3];
//reallyConst[0] = 50;
