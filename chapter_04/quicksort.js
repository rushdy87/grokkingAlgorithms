/*
Quicksort is a sorting algorithm. It’s much faster than selection sort 
and is frequently used in real life. For example, the C standard library 
has a function called qsort, which is its implementation of quicksort.
 Quicksort also uses D&C.
*/
const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  const less = arr.slice(1).filter((element) => element <= pivot);
  const greater = arr.slice(1).filter((element) => element > pivot);

  return [...quicksort(less), pivot, ...quicksort(greater)];
};

console.log(quicksort([10, 5, 2, 3]));
console.log(quicksort([10, -5, 2, 13, 7]));

//1- First, pick an element from the array. This element is called the pivot.
//2- Now find the elements smaller than the pivot and the elements larger
// than the pivot.
// This is called partitioning.
// The two sub-arrays -less and greater- aren’t sorted. They’re just partitioned. But if they
// were sorted, then sorting the whole array would be pretty easy.
// if the sub-arrays are sorted, then you can combine the whole thing like this:
// [left array + pivot + right array] and you get a sorted array.
// How do you sort the sub-arrays? Well, the quicksort base case already knows how to sort arrays
// of two elements (the left sub-array) and empty arrays (the right sub-array). So if you call
// quicksort on the two sub-arrays and then combine the results, you get a sorted array!
