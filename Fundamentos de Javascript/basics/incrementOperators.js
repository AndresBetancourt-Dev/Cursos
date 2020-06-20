//Incremental operators
var age = 19

//age = age + 1
age += 1 //Incremental in this case works as asigning a variable it's same variable plus other modification

var weight = 89
//weight = weight - 2 //Decremental works the same as incremental only that it decrements
weight -= 2

var sandwich = 1

//Tests
weight += sandwich
var goToGym = 3
weight -= goToGym


//Increments by 1 if integer/number
weight++ //Increments after the call of the variable
++weight //Increments before the call of the variable

var whinePrice = 200.3
var total = whinePrice*3
//Round function from Math Object to round a decimal value to integer value
var totalRounded = Math.round(total*100)/100

//Converts a number to string just for viewing or showcasing
var totalString = totalRounded.toFixed(19)

//Converts a string into a number in this case Float
var entero = parseFloat(totalString)
var pizza = 8
var people = 2
var fractionOfPizza = pizza/people
