//First of all a string it's a group of characters that could have any number, symbol or letter
//Same line variable declaration.
var name = 'Andrés', surname = ' Betancourt'

//String methods to set text Uppercase or Lowercase
var upperName = name.toUpperCase()
var lowerName = name.toLowerCase()
var index = 0
//Acceed to an specific character of a string
var firstLetterOfName = name.charAt(index)
//Get the number of chars
var quantityOfLetters = name.length

var fullName = `${name} ${surname}` //Variable Interpolation ECMAScript 6

//Get a substring from a starting position and how many characters
var partOfName = name.substr(1,2)
//Get last letter of a string
var lastLetterOfName = name.charAt(length-1)