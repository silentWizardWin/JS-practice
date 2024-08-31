// Array reduce method takes two parameters - accumulator(carry-forward) and item(iterator)
// set default accumulator value as the 2nd parameter

// Write a function that uses reduce to sum all the numbers in an array.
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((total, item) => total + item, 0);
console.log(total);

// Find the Maximum Number
const numbers2 = [5, 10, 3, 8, 2, 45];
const max = numbers2.reduce(
  (max, item) => (max > item ? max : item),
  numbers2[0]
);
console.log(max);

// Flatten a 2D Array
const array2D = [[1, 2], [3, 4], [5]];
const flatArray = array2D.reduce((flat, item) => [...flat, ...item], []);
console.log(flatArray);

// Count Occurrences of Items
const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "apple",
];
const countItems = fruits.reduce((result, item) => {
  result[item] = (result[item] || 0) + 1;
  return result;
}, {});
console.log(countItems);

// Group Objects by a Property
const people = [
  { name: "Alice", age: 21 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 20 },
];
const groupedArray = people.reduce((result, item) => {
  if (!result[item.age]) {
    result[item.age] = [];
  }
  result[item.age].push(item);
  return result;
}, {});
console.log(groupedArray);

// Calculate the Product of All Numbers
const numArray = [1, 2, 3, 4];
const multiplier = numArray.reduce((product, item) => product * item, 1);
console.log(multiplier);

// Calculate the Average of Numbers
const numberList = [10, 20, 30, 40, 50];
const avg = numberList.reduce(
  (cumulative, item) => (cumulative += item / numberList.length),
  0
);
console.log(avg);
