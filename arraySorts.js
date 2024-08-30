// sort number array
const numArrays = [5, 7, 3, 9, 2, 6, 2];
numArrays.sort();
console.log("Sorted Array asc:", numArrays);
numArrays.sort((a, b) => b - a);
console.log("Sorted Array desc:", numArrays);

// sort objects array
const objArr = [{ age: 23 }, { age: 12 }, { age: 87 }];
objArr.sort((a, b) => a.age - b.age);
console.log("Sorted Array asc :", objArr);

// sort 2D array
let array = [
  [3, "a"],
  [1, "o"],
  [2, "b"],
];
// sort based on first element
array.sort((a, b) => a[0] - b[0]);
console.log("Sorted Array asc :", array);

// sort 3D array
let array3d = [[[3, "a"]], [[1, "o"]], [[2, "b"]]];
array3d.sort((a,b) => a[0][0] - b[0][0]);
console.log("Sorted Array asc :", array3d);
