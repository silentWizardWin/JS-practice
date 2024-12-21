const input = "(()))())()()";

function bracketMatcher(str) {
  const queue = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      queue.push(str[i]);
    } else if(str[i] === ")"){
      queue.pop();
    }
  }
  if (queue.length) {
    return false;
  }
  return true;
}

console.log(bracketMatcher('()()()(()('))
console.log(bracketMatcher('()()()(()())'))