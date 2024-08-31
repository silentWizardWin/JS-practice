/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Best solution - Beats 88%
// Using a Map to check item availability is the fastest
var containsDuplicate = function (nums) {
  const count = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (count.has(nums[i])) {
      return true;
    } else {
      count.set(nums[i], 1);
    }
  }

  return false;
};

// converting to a set is slower - Beats 35%
var containsDuplicate2 = function (nums) {
  return nums.length != new Set(nums).size;
};

// Using an object to check item availability is slower - Beats 35%
var containsDuplicate3 = function (nums) {
  const count = {};
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]]) {
      return true;
    } else {
      count[nums[i]] = 1;
    }
  }

  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate2([1, 2, 3, 1]));
console.log(containsDuplicate3([1, 2, 3, 1]));
