/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Sorting the array in place
  intervals.sort((a, b) => a[0] - b[0]);
  const output = [];
  let i = 0;
  let item = intervals[0];
  while (i < intervals.length - 1) {
    if (item[1] >= intervals[i + 1][0]) {
      item = [item[0], intervals[i + 1][1]];
      i++;
    } else {
      output.push(item);
      item = intervals[i + 1];
      i++;
    }
  }
  output.push(item);
  return output;
};

const intervals_1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals_1));

const intervals_2 = [
  [1, 4],
  [4, 5],
];
console.log(merge(intervals_2));
