// find the smallest element in an array:
const findSmallest = (arr) => {
  let smallestNumber = arr[0];
  for (const item of arr) {
    if (item < smallestNumber) {
      smallestNumber = item;
    }
  }
  return smallestNumber;
};

// remove a specific value from an array
const removeItemFromArray = (arr, item) => {
  let index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
};

// Now you can use this function to write selection sort:
const selectionSort = (arr) => {
  const sortedArray = [];
  while (arr.length) {
    const smallestNumber = findSmallest(arr);
    sortedArray.push(smallestNumber);
    arr = removeItemFromArray(arr, smallestNumber);
  }
  return sortedArray;
};

console.log(selectionSort([9, 5, 3, 6, 2, 10]));
