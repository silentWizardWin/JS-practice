const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

var rotate = function (matrix) {
  const size = matrix.length;

  // traspose matrix
  for (let i = 0; i < size; i++) {
    // transpose only upper diagonal
    for (let j = i + 1; j < size; j++) {
      temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // reverse matrix
  for (let k = 0; k < size; k++) {
    matrix[k] = matrix[k].reverse();
  }
  console.log(matrix);
};

rotate(input);
