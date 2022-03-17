var Doggy = /** @class */ (function () {
    /***
     * Members in Constructor
     */
    function Doggy(name, age) {
        this.name = name;
        this.age = age;
    }
    return Doggy;
}());
var lgg = new Doggy("LG", 13);
//lg.name = '' is readonly
/**
 * Singleton in Typescript using private constructor
 */
var DogList = /** @class */ (function () {
    function DogList() {
        this.doggies = [];
    }
    DogList.prototype.addDog = function (dog) {
        this.doggies.push(dog);
    };
    DogList.addDogStatic = function (dog) {
        DogList.instance.doggies.push(dog);
    };
    DogList.prototype.getDogs = function () {
        return this.doggies;
    };
    DogList.instance = new DogList();
    return DogList;
}());
DogList.instance.addDog(new Doggy("Andres", 20));
DogList.addDogStatic(new Doggy("Mateo", 20));
console.log(DogList.instance.getDogs());
