/*--------------------------------------- */
//Create matrix

let array = [1,2,3, [1,2,3,[1,2,3]]]

//Get the profundity of sub arrays inside the main array
console.log(array.flat(2))

{
    let array = [1,2,3,4,5]
    console.log(array.flatMap(value=>[value, value*2]))
}

//trim start
//Delete whitespaces of a string

//Deletes white space on the string at the beginning
{
    let hello = '                        hello word'
    console.log(hello)
    console.log(hello.trimStart())
}

//Deletes the white space after the text of the sting
{
    let hello = 'hello world                         '
    console.log(hello)
    console.log(hello.trimEnd())
}



{
    //Old Javascript
    try{
    console.log(variableUnexistent)
    }catch(error){
        console.log('No existe esa variable')
    }

     //ES10 - Now it does not require specifically that the
     // variable error in the catch, it's not necesary to put it as a paramether
    try{
        //let variableUnexistent = 5
        console.log(variableUnexistent)
    }catch{
            console.log('No existe esa variable')
    }finally{
        console.log('I have ended')
    }

}

//Entries - fromEntries() transforms an array into an Object
//It's a function/method from the Object Class
{
 let entries = [["name","oscar"],["age",20]]
 console.log(Object.fromEntries(entries))
}


//Object type Symbol has a description of the Symbol Object that in this case it's the value
let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)