function mergeSort(arr) {
    // Base case: if the array is empty or has only one element, it is already sorted
    if (arr.length <= 1) {
      return arr;
    }
  
    // Splitting the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);
  
    // Recursively sort the two halves
    const sortedLeftHalf = mergeSort(leftHalf);
    const sortedRightHalf = mergeSort(rightHalf);
  
    // Merge the sorted halves
    return merge(sortedLeftHalf, sortedRightHalf);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // Compare elements from the left and right arrays and merge them in sorted order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Concatenate the remaining elements from the left and right arrays
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
  
  // Example usage
  const array = [8, 3, 9, 6, 1, 2, 5, 4, 7];
  const sortedArray = mergeSort(array);
  console.log(sortedArray);
  






// function mergeSort(){
// if(arr.length<=1){
//     return
// }

// const middle = Math.floor(arr.length/2)
// const leftArray = arr.slice(0 ,middle)
// const rightArray = arr.slice(middle)

// const sortedLeft = mergeSort(leftArray)
// const sortedRight = mergeSort(rightArray)


// return merge(leftArray,rightArray)
// }

// function merge(left , right){
//     const sortedArray = []
//     const leftIndex = 0;
//     const righIndex = 0;


//     while(leftIndex < left.length && righIndex < righ.length){
//         if(left[leftIndex] < right[righIndex]){
//             sortedArray.push(left[leftIndex])
//             leftIndex++
//         }else{
//             sortedArray.push(right[righIndex])
//             righIndex++
//         }
//     }

//     return sortedArray.concat(left.slice(leftIndex)).concat(right.slice(righIndex))

// }

// const arr = [2,3,5,3,6,7,4,6,8]
// mergeSort(arr)








