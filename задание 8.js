const myMap = new Map();
myMap.set(123456, 7890);
myMap.set("hard", "study");
myMap.set("time", "420");

for (const [key, value] of myMap) {
  console.log(`Ключ - ${key}, значение - ${value}`);
}
