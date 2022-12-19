function calculateSquare(number) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof number !== "number") {
        reject(new Error("Argument of type number is expected"));
      }

      const result = number * number;
      resolve(result);
    }, 100);
  });

  return promise;
};

module.exports = calculateSquare;