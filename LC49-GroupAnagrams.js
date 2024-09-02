/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    const countArr = countArray(strs[i]);
    if (!map[countArr]) {
      map[countArr] = [strs[i]];
    } else {
      map[countArr].push(strs[i]);
    }
  }
  return Object.values(map);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function countArray(word) {
  const output = new Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
    output[word[i].charCodeAt(0) - aCharCode]++;
  }
  return output;
}

console.log(groupAnagrams(strs));
