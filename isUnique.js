function isUnique(string) {
  return string.split("").every((e, i) => !string.slice(0, i).includes(e));
}

// function isUnique(string) {
//   return new Set(string.split("")).size === string.length;
// }

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
