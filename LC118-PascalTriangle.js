/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const output = [[1]];
  if (numRows === 1) {
    return output;
  }
  for (let i = 1; i < numRows; i++) {
    const row = [1];
    for (let j = 1; j < i; j++) {
      row[j] = output[i - 1][j] + output[i - 1][j - 1];
    }
    row.push(1);
    output.push(row);
  }
  return output;
};

const answer = generate(5);
console.log(answer); // 2D array

// -----------------------------------------------
// Solution : space O(n)
// use of nCr = n!/(n-1)! x r!
// n =  row and r= index
// -----------------------------------------------

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// print only the n-th row
var generate_row = function (numRows) {
  const output = [];
  for (let i = 0; i < numRows; i++) {
    output.push(factorial(numRows) / (factorial(numRows - i) * factorial(i)));
  }
  return output;
};

console.log(generate_row(5));
