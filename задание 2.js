var x;
x = null;
if (typeof x === "number") {
  console.log("x - число");
} else if (typeof x === "string") {
  console.log("x - строка");
} else if (typeof x === "boolean") {
  console.log("x - логический тип");
} else console.log("тип x не определен");
