/*----------------------------------------------------------------------*/
/*
ES7
*/
//includes in array, check if a number it's on an array
{
    let numbers = [1,2,3,7,8]
    let number = 7
    if(numbers.includes(number)){
        console.log(`El número ${number} se encuentra en el array`)
        console.log(`El número esta en la posición : ${numbers.indexOf(number)}`)
    }else{
        console.log(false)
    }
}
/*----------------------------------------------------------------------*/
//Exponent operator
let base = 4;
let exponent = 3;
let result = base**exponent
console.log(result)
