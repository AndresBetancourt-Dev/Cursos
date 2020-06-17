/*
Default paramethers
*/
//Old Javascript
//name age country are the paramether recieved by this function
function newPerson(name,age,country){
    //Set variables that recieves by paramether or has a default value assigned
    var name = name || 'Andres';
    var age = age || 20;
    var country = country || 'Colombia';
    //Object creation of a Person
    var person = {
        name : name, //Attributes values are determined by the variables
        age : age,
        country : country
    }
    console.log(person) //Showing the person
    return person; //Return of the created person
} 
//Function Call
newPerson();
newPerson('Maria',17,'México')
//ES6
//This version of the function has the option to set the default params inside
//the parenthesis of the paramethers instead of defined variables with logical operators
function newPersonECS(name = 'NoName', age = 0, country = 'Colombia'){
    console.log(name,age,country)
}
//Function Call
newPersonECS();
newPersonECS('Roberto',41,'España')

/*----------------------------------------------------------------------*/
/*  
Template concatenation/literals
*/

let hello = 'Hello'
let world = 'World'

//Old Javascript
//In the old Javascript you were used to concatenate strings using + operator and a white space
let epicPhrase = hello+' '+world
console.log(epicPhrase)

//ES6 - This is the concatenation of the phrase using Template Literals
let legendaryPhrase = `${hello} ${world}`
//Alt+96 to create de `` inside the ${} goes javascript code (variables, functions,etc)
console.warn(legendaryPhrase)


/*----------------------------------------------------------------------*/
/*
Difference between var - let - const
*/
//The var purpose it's for global scope variables and can be modified, can be created multiple times
{
    var globalScope = `It's accesible from anywhere`;
}

console.log(globalScope)
//Created another variable with the same name, still works
var globalScope = 'it can be whatever i want it to be'
console.log(globalScope)
globalScope = 20 //Even numbers
console.log(`Even numbers ${globalScope}`)
globalScope = true // or booleans
console.log(`The type of globalScope it's now ${typeof(globalScope)} and it's value it's ${globalScope}`)

//The let purpose it's for specified scope variables and can be modified inside the scope, cannot be created multiple times
{
    let usingLet = `"Soy el contenido del let muajajaja"`
    console.log(`${usingLet} solo puedo imprimirme acá`)
    usingLet = `"Y ahora yo soy el contenido de let"`
    console.log(`${usingLet} solo puedo imprimirme acá`)
}

try{
    console.log(usingLet)
}catch(error){
    console.log('No se puede acceder a esta variable por que es un let')
}

//const it's a Constant Variable, cannot be modified, it's only accesible on it's scope
{
    const theConstant = `Esta es mi constante`
    console.log(theConstant)
}

try{
    console.log(theConstant)
}catch(error){
 console.error('No se puede acceder a esta constante')
}



//Multiple Lines using template literals
let phrase = 'Skyrim is the best game ever released to date\n'+
             'The story it\'s not really catching but it\'s really extendable with mods ';

console.log(phrase)

let ECSphrase = `
Skyrim is the best game ever released to date
The story it's not really catching but it's really extendable with mods 
`;

console.log(ECSphrase)

let person = {
    'name' : 'Andrés',
    'age' : 20,
    'country': 'CO'
}

console.log(`${person.name} is ${person.age} years old`)

//De-construct objects into variables.
let {name,country} = person;
console.log(`${name} it's from ${country}`)

//Propagation operator
let team = ['Andrés','Luis','Kevin','Jose Luis']
let teamTwo = ['Wendy','Daniela','Juliana','Mariana']

let fullTeam = ['Coach',...team,'Middle',...teamTwo,'Last']

console.log(fullTeam)

/*----------------------------------------------------------------------*/
//Creation of objects attributes with the same variables names
{
    let name = 'Andrés'
    let age = 20;

    //Old JS
    person = {
        name : name,
        age: age
    }
    //Person has two attributes name and age
    console.log(person)

    //ES6
    //Now the object attributes with adquired, the name and the variable content in one line
    ECSperson = {
        name,
        age
    }

    console.log(ECSperson)
}

/*----------------------------------------------------------------------*/
/*
Arrow Functions
*/

//Old Javascript
{
    const names = [
        {name : 'Andrés', age: 20},
        {name : 'Jessica', age: 27}
    ]
    //An anonymous function was declared as a callback 
    //and it returned in the case of map an array
    let listOfNames = names.map(function(arrayItem){
        return arrayItem.name
    })

    console.log(listOfNames)
}

//ES6
{
    const names = [
        {name : 'Andrés', age: 20},
        {name : 'Jessica', age: 27}
    ]
    //Here we use an arrow function ()=>{} it works the same, in the parenthesis
    //goes the paramether and the {} brackets it's the function scope, the => it's where
    //parameter it's heading
    let listOfNames = names.map( arrayItem => arrayItem.name)

    //Two examples one called in the same scope of the map function an other
    //calling a stand alone arrow function
    const getAge = (item) => item.age;
    let listOfAges = names.map(item => getAge(item))

    //Console log the result of both arrays mapping
    console.log(listOfAges)
    console.log(listOfNames)

    //Arrow function that returns the square of a number
    const square = number => number*number;

    //Arrow function that returns an array of square numbers from one to n

    const getSquares = (limit) =>{
        let numberArray = []
        for(let i = 1; i<=limit;i++){
            console.log(`The square of ${i} is = ${square(i)}`)
            numberArray.push(square(i))
        }
        return numberArray
    }

    let number = 17 //Change the number here for a different output
    console.log(getSquares(number))
}

/*-----*/
/*----------------------------------------------------------------------*/

/*
Promises to work on Async
*/
//Promise something will happen
{
    const helloPromise = () =>{
        return new Promise((resolve,reject) => {
            if(1){
                resolve(`Hey... that's pretty good`)
            }else{
                reject('Fuck you!!!')
            }
        })
    }

    helloPromise()
    .then(response => console.log(response)) //if true or resolved
    .catch(error => console.log(error)) //if false or rejected

}

/*----------------------------------------------------------------------*/
//Clases o Objetos
{
    class Calculator{
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }

        getValueA(){
            return this.valueA
        }

        getValueB(){
            return this.valueB
        }

        getValueAandValueB(){
            return [this.valueA,this.valueB]
        }

        setValueA(value){
            this.valueA = value
        }

        setValueB(value){
            this.valueB = value
        }

        sum(){
            return this.valueA+this.valueB
        }

        res(){
            return this.valueA-this.valueB
        }

        mult(){
            return this.valueA*this.valueB
        }

        div(){
                return this.valueA/this.valueB
        }
        
    }

    let calculator = new Calculator();
    calculator.setValueA(5)
    calculator.setValueB(4)
    console.log(calculator.getValueA())
    console.log(calculator.getValueB())
    console.log(calculator.getValueAandValueB())
    console.log(calculator.sum())
    console.log(calculator.res())
    console.log(calculator.mult())
    console.log(calculator.div());


}

/*----------------------------------------------------------------------*/
//Generators

{
    function* helloWorld(){
        if(true){
            yield 'Hello , ';
        }
    
        if(true){
            yield 'World';
        }
    }

    const generatorHello = helloWorld();

    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)

}


