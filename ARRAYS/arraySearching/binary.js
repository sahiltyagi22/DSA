/**
 * BY ITERATIVE METHOD
 */

// function binary(arr,element){
//     low = 0
//     high = arr.length-1

//     while(low<=high){
//         mid = Math.floor((low+high)/2)

//         if(arr[mid]== element){
//             return mid
//         }else if(arr[mid]<element){
//             low = mid +1
//         }else{
//             high = mid-1
//         }
//     }
//     return -1
// }

// console.log(binary([1,2,3,4,5,6],9));


/**
 * BY RECURSIVE METHOD
 */


function binary(arr,element,low,high){
    if(low>high){
        return -1
    }

    let mid = Math.floor((low+high)/2)

    if(arr[mid]== element){
        return mid
    }else if(arr[mid]< element){
        return binary(arr,element,mid+1,high)
    }else{
        return binary(arr,element,low,mid-1)
    }
}

let arr = [1,2,3,4,5,6,7,8]

let element = 6

console.log(binary(arr,element,0,arr.length-1));