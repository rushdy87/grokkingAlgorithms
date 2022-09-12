// You’re given an array of numbers.
// You have to add up all the numbers and return the total.
// how would you do this with a recursive function?

const sum = (arr) => {
  if (!arr.length) {
    return 0;
  }
  let element = arr.pop();
  return element + sum(arr);
};

console.log(sum([1, 2, 3]));
console.log(sum([1, 2, 3, 4]));
