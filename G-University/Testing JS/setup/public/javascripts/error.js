function calculateSquare(number) {

    if(number === undefined || typeof number !== 'number'){
        throw new Error('Argument of type number is expected')
    }

  return number * number;
}

module.exports = calculateSquare;
