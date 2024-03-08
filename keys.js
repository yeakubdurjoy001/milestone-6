const glass = {
  name: "glass",
  color: "golden",
  price: 200,
  weight: 1,
  height: 100,
  density: 400,
};
const keys = Object.keys(glass);
const values = Object.values(glass);
const pair = Object.entries(glass);
const { name, ...shortGlass } = glass;
delete glass.name;
// console.log(keys);
// console.log(values);
console.log(shortGlass);
// console.log(glass);
// console.log(pair);
