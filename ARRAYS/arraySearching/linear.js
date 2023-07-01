function linear(arr,element){
    if(arr.length<=1){
        return arr
    }

    for(let i =0; i<arr.length; i++){
        if(arr[i]===element){
            return i
        }
        }
    }



let arr = [2,3,4,5,6,7]
let element = 4
console.log(linear(arr,element));