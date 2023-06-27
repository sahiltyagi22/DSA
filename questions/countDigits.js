let result = 0;

function count(x){
    while(x>0){
        x = Math.floor(x/10)
        result++
    }
    return result
}

count(123455)
console.log(result);