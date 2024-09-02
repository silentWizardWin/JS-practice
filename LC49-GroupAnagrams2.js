// Best solution - Beats 73%
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split("").sort().join();
    if (!map.has(sortedWord)) {
      map.set(sortedWord, [strs[i]]);
    } else {
      // get value and push into map value
      map.get(sortedWord).push(strs[i]);
    }
  }
  return [...map.values()];
  // map.values() is an iterator - therefore spread is mandatory
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
