var andres = {
    name : 'Andrés',
    surname : 'Betancourt',
    age : 19,
    weight : 90
}

const Mariela = "Mariela"

var other = {
    ...andres,
    name : Mariela,
    age : 29
}

console.log(`Al inicio del año ${andres.name} ${andres.surname} pesaba ${andres.weight} kg`)

const NUMBER_OF_DAYS_PER_YEAR = 365
const EXERCISE = .3
const FAT = .3

const addWeight = person => {
    person.weight+=FAT
    return person.weight;
}
const loseWeight = person => person.weight -= EXERCISE




const GOAL = (andres.weight - 3);
const eatsTooMuch = () => (Math.random() < 0.3)
const sports = () => (Math.random() < 0.4)

const x = newFunction()
var i = 0;
while(andres.weight > GOAL){
    if(eatsTooMuch()){
        //Gains weight
        addWeight(andres)
        console.warn(andres.weight.toFixed(3))
    } else if(sports()){
        //Lose weight
        loseWeight(andres)
        console.error(andres.weight.toFixed(2))
    }
   i += 1
}

console.error('Error message')

console.warn('Something')

console.log('Andrés ha salido del bucle')


console.log(`Al final ${andres.name} pesa ${andres.weight.toFixed(2)} y pasaron ${i} días`)

function newFunction() {
    return () => 0
}
