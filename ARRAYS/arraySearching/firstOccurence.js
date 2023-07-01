function firstOccur(arr,x){
    if(arr.length<=1){
        return arr
    }

    let low = 0
    let high = arr.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===x){
            if(mid ==0 || arr[mid-1]!==x){
                return mid
            }else{
                high = mid-1
            }
        }else if(arr[mid]<x){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
}

let arr = [1,2,3,4,4,4,5,6,7,8]
let element = 4

console.log(firstOccur(arr,element));