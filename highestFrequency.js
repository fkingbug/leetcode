function highestFrequency(array) {
  return Array.from(
    array
      .reduce(
        (acc, current) =>
          acc.set(current, (acc.has(current) ? acc.get(current) : 0) + 1),
        new Map()
      )
      .entries()
  ).sort(([, a], [, b]) => b - a)[0][0];
}

console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
console.log(highestFrequency(["abc", "def"])); // -> abc
console.log(
  highestFrequency([
    "abc",
    "abc",
    "def",
    "def",
    "def",
    "ghi",
    "ghi",
    "ghi",
    "ghi",
  ])
); // -> ghi
