
// function selectionSort(arr) {
//     const length = arr.length;
    
//     for (let i = 0; i < length - 1; i++) {
//       let minIndex = i;
      
//       // Find the index of the minimum element in the unsorted part of the array
//       for (let j = i + 1; j < length; j++) {
//         if (arr[j] < arr[minIndex]) {
//           minIndex = j;
//         }
//       }
      
//       // Swap the minimum element with the first element in the unsorted part
//       if (minIndex !== i) {
//         const temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//       }
//     }
    
//     return arr;
//   }
  

//   const array = [5, 2, 8, 1, 4];
//   console.log("Original array:", array);
//   console.log("Sorted array:", selectionSort(array));
  
// const arr = [2, 4, 3, 5, 52, 65, 1, 9];
// const sorted = selectionSort(arr);

// console.log(sorted);





function selectionSort(arr){
    let length = arr.length;
    let temp;

    for(i=0; i<length-1; i++){
         let minIndex = i

         for(j=i+1 ; j<length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex =j
            }
         }

         if(minIndex !== i){
            temp = arr[i]
            arr[i]=arr[minIndex]
            arr[minIndex] = temp
         }
    }
    return arr
}

const arr = [1,122,4,23,4,24,52,2,32]
const sorted = selectionSort(arr)
console.log(sorted);