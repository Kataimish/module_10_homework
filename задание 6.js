var mass;
var result;
mass = [7, 7, 7, "при", 7];
for (let i = 0; i < mass.length - 1; i = i + 1) {
  console.log(i);
  if (mass[0] === mass[i + 1]) {
    result = true;
  } else {
    result = false;
    break;
  }
}
console.log(result);
