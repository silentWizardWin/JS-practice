// reduceRight() - Similar to reduce(), but it processes the array from right to left
const numbers = [1, 2, 3, 4];
const result = numbers.reduceRight((accumulator, currentValue) => accumulator - currentValue, 0);
// Output: -2

// flatMap() - It first maps each element using a mapping function, then flattens the result into a new array.
const arr = [1, 2, 3];
const result1 = arr.flatMap(x => [x, x * 2]);
// Output: [1, 2, 2, 4, 3, 6]

// --------------------------------------------------------------------------------------------------------------------

// some() - It tests whether at least one element in the array passes the test implemented by the provided function.
const numbers2 = [1, 2, 3, 4];
const hasEvenNumber = numbers2.some(num => num % 2 === 0);
// Output: true

// every() -  It tests whether all elements in the array pass the test implemented by the provided function.
const numbers3 = [2, 4, 6];
const allEven = numbers3.every(num => num % 2 === 0);
// Output: true

// --------------------------------------------------------------------------------------------------------------------

// find() - returns the first element that satisfies the provided testing function. 
// findIndex() - returns the index of the first element that satisfies the testing function.
// filter() - return multiple matches
const numbers4 = [1, 2, 3, 4];
const firstEven = numbers4.find(num => num % 2 === 0); // Output: 2
const firstEvenIndex = numbers4.findIndex(num => num % 2 === 0); // Output: 1

// fill() - It fills all the elements of an array from a start index to an end index with a static value.
const array = [1, 2, 3, 4];
array.fill(0, 1, 3);
// Output: [1, 0, 0, 4]

// splice() - It changes the contents of an array by removing or replacing existing elements and/or adding new elements.
const array2 = [1, 2, 3, 4];
array2.splice(1, 2, 'a', 'b');
// Output: [1, 'a', 'b', 4]

// from() - It creates a new, shallow-copied array instance from an array-like or iterable object.
const str = 'hello';
const array3 = Array.from(str);
// Output: ['h', 'e', 'l', 'l', 'o']

// copyWithin() - It shallow copies part of an array to another location in the same array without modifying its length.
const array4 = [1, 2, 3, 4, 5];
array4.copyWithin(0, 3);
// Output: [4, 5, 3, 4, 5]

// includes - It determines whether an array includes a certain value among its entries, returning true or false.
const array5 = [1, 2, 3];
const result3 = array5.includes(2); // Output: true
