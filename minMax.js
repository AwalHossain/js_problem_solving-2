function Max(first, second, third){
    if(first> second && first > third){
        return "First one is bigger"
    }
    else if(second> first && second >third){
        return "Second one is bigger";
    }
    else{
        return "Third one is bigger"
    }
}

console.log(Max(43,53,21));