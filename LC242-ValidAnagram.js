/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Best solution - Beats 99%
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const count = new Array(26).fill(0);
  const aCharCode = "a".charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - aCharCode]++;
    count[t.charCodeAt(i) - aCharCode]--;
  }

  return count.every((num) => num === 0);
};

var isAnagram = function (s, t) {
  //   console.log(Array.from(s).sort());
  //   console.log(Array.from(t).sort());
  return Array.from(s).sort().join() === Array.from(t).sort().join();
};

const w1 = "anagram";
const w2 = "nagaram";

console.log(isAnagram(w1, w2));

var isAnagram2 = function (s, t) {
  if (s.length != t.length) {
    return false;
  }
  const count = {};
  for (let i = 0; i < s.length; i++) {
    if (!count[s[i]]) {
      count[s[i]] = 0;
    }
    count[s[i]]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (!count[t[i]]) {
      return false;
    }
    count[t[i]]--;
  }
  return Object.values(count).every((x) => x === 0);
};

console.log(isAnagram2(w1, w2));
