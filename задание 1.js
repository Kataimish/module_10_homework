var x = prompt("ведите значение");
let y;
y = +x;
console.log(y);
if (isNaN(y)) {
  console.log("Упс, кажется, вы ошиблись");
} else if (typeof y === "number") {
  if (y % 2 === 0) {
    console.log("чётное число");
  } else console.log("нечётное число");
} else console.log("Упс, кажется, вы ошиблись");
