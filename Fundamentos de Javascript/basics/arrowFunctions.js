var sacha = {
    name : 'Sacha',
    surname : 'Betancourt',
    age : 19,
    engineer : false,
    chef : false,
    singer : false,
    guitarist : true,
    drone : true
}

var other = {
    ...sacha,
    name : 'Julio',
    surname : 'Santana',
    age : 16
}


function printProfession(person){
    var {name} = person
    console.log(`${name} ${person.surname} is a : `)
    if(!person.engineer){
        console.log('Es un ingeniero')
    }
    if(!person.chef){
        console.log('Es un Cocinero')
    }
    if(!person.singer){
        console.log('Es un Cantante')
    }
    if(person.guitarist){
        console.log('Es un Guitarrista')
    }
    if(person.drone){
        console.log('Es un Drone')
    }
}

function checkIfStringsAreEqual(string){
    if(string === "Cadena"){
        console.log("Las cadenas son iguales")
    }
}

const MAYORIA_DE_EDAD = 18

function adult(person){
    if(!(person.age >= 18)){
        console.log("Eres mayor de edad")
    } else {
        console.log("Eres menor de edad")
    }
}
/*
function mayorDeEdad(person){
    return (person.age >= MAYORIA_DE_EDAD)
}
*/

//const esMayorDeEdad = person => (person.age >= MAYORIA_DE_EDAD)

const esMayorDeEdad = ({age}) => (age >= MAYORIA_DE_EDAD)
const esMenorDeEdad = person => (!esMayorDeEdad(person))

function ifAnAdult(person){
    if(esMayorDeEdad(person)){
        console.log(`${person.name} es mayor de edad`)
    } else {
        console.log(`${person.name} es menor de edad`)
    }
    return person
}

function denyAccess(person){
    if(esMenorDeEdad(person)){
        console.log('Access Denied')
    }
}