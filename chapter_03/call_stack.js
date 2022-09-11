// factorial(5) = 5 * 4 * 3 * 2 * 1

const factorial = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(5));
