/*
Object Creation syntax

var/let objectName = { } //Inside the curly brackets goes it's attributes, if attributes has with quotation marks they are implementing
JSON propeties.
JSON stands for Javascript Object Notation

*/

var andres = {
    name : 'Andrés',
    age : 19,
    height : 1.80
}

var mary = {
    name : 'Mary',
    age : 55,
    height : 1.50
}

var david = {
    name : 'David',
    age : 37,
    height : 1.78
}

var amanda = {
    name : 'Amanda',
    age : 74,
    height : 1.58
}

//We create an array
var array = [] //Empty array
array.push('Content'); //Add item into the array, JS arrays work as linked lists
console.log(array)
array.pop() //Removes the last element on the array


//Create an array to save the previous objects declared
var familia = [andres,mary,david,amanda]


//Old for, could simply use a forEach in this case.
for (var i = 0; i<familia.length;i++){
    var person = familia[i]
    var save = console.log(`${person.name} mide un total de ${familia[i]['height']} y tiene ${person.age} años`)
}

//Function that acumulates the ages and heights to get the average later on
var sumAge = 0
var sumHeight = 0
for(var i = 0; i < familia.length; i++){
    var person = familia[i]
    sumAge+=person.age
    sumHeight+=person.height
}


console.log(`La edad promedio en la familia es de ${(sumAge/familia.length)}`)
console.log(`La altura promedio en la familia es de ${(sumHeight/familia.length)}`)
