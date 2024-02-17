const a = {
  ")": "(",
  "]": "[",
  "}": "{",
};
const isValid = (str) => {
  let buff = [];
  str
    .replace(/[^\[\]\{\}()]/g, "")
    .split("")
    .forEach((e) => {
      if ([")", "}", "]"].includes(e)) {
        if (a[e] === buff.pop()) return false;
      } else {
        buff.push(e);
      }
    });
  return buff.length === 0;
};

console.log(isValid("(foo)")); // true
console.log(isValid("(f[o]{o})")); // true
console.log(isValid("[(){}()[]]")); // true
console.log(isValid("(foo")); // false
console.log(isValid("{f[o]o]")); // false
