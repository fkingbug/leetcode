function flatten(array) {
  let buff = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      buff.push(array[i]);
      continue;
    }
    buff = buff.concat(flatten(array[i]));
  }
  return buff;
}

// function flatten(array) {
//   return array.flat(Infinity);
// }

console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]
console.log(flatten([0, [1, 2, 3], [4, [5, ["6", [null, {}]]]]])); // -> [0, 1, 2, 3, 4, 5, "6", null, Object]

[1];
