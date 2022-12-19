function calculateSquare(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected"));
      return;
    }

    const result = number * number;
    callback(null, result);
  }, 200);
}

module.exports = calculateSquare;
