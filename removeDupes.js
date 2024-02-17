function removeDupes(str) {
  return str
    .split("")
    .filter((e, i) => !str.slice(0, i).includes(e))
    .join("");
}

// function removeDupes(str) {
//   return Array.from(new Set(str.split(""))).join("");
// }

console.log(removeDupes("abcd")); // -> 'abcd'
console.log(removeDupes("aabbccdd")); // -> 'abcd'
console.log(removeDupes("abcddbca")); // -> 'abcd'
console.log(removeDupes("abababcdcdcd")); // -> 'abcd'
