function quickSort(arr){
    if(arr.length <=1){
        return arr;
    }
    

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i =0; i<arr.length-1; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

    // return [...quickSort(left), pivot, ...quickSort(right)]
console.log(right, pivot, left);
}

let arr = [12,34,2,4,65,13]
 quickSort(arr)
// console.log(sortedArray);


// function quickSort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];
  
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quickSort(left), pivot, ...quickSort(right)];
//   }
  
//   // Example usage:
//   const array = [5, 2, 9, 1, 7, 6, 3];
//   const sortedArray1 = quickSort(array);
//   console.log(sortedArray); // Output: [1, 2, 3, 5, 6, 7, 9]
  