const business = 450;
const minister = 350;
const army = 600;

const arr = [];

arr.push(business, minister, army);
console.log(...arr);

const max = Math.max(...arr)
console.log(max);