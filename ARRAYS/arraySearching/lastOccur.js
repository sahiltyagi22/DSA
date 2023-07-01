function lastOccur(arr,x){
    if(arr.length<=1){
        return arr
    }

    let low = 0
    let high = arr.length-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(arr[mid]===x){
            if(mid ===arr.length-1 || arr[mid+1]!==x){
                return mid
            }else{
                low = mid+1
            }
        }else if(arr[mid]<x){
            low = mid+1
        }else{
            high = mid-1
        }
    }
    return -1
}

let arr = [1,2,3,4,4,4,5,5,6,6,6,6,6]
let element = 6

console.log(lastOccur(arr,element));