
function largestNumber(numbers){
    let largest = numbers[0];
    for(let i = 0; i<numbers.length; i++){
        const element = numbers[i];
        if( element < largest ){
            largest = element;
        }
    }
    return largest;
}

const numbers = [2, 32, 52, 53, 63];

console.log( largestNumber(numbers))
