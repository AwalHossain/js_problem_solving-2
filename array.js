function arraySum(number){
let sum = 0;
for(let i = 0; i<number.length; i++){
    const element = number[i];
    sum = sum + element;
}
return sum;
}

console.log(arraySum([22,34,43,12]))