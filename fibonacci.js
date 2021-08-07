


function fibonacci(num){
    if(typeof num != "number" ){
        return "input a number"
    }
    if(num < 2){
        return "input greater than 1"
    }
    const fibo = [0,1]
    for(let i = 2; i<=num; i++){
        // nth = (n-1) + (n-2);
    
        fibo[i] = fibo[i-1] + fibo[i-2]
    
    
    }
    return fibo;
}


console.log(fibonacci(-32));