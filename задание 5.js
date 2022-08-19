let massiv = ["4", "true", "item3", "mototsipl"];
console.log("в массиве " + massiv.length + " элементов");
var a = massiv.map(function (item, index, array) {
  console.log(item);
});
