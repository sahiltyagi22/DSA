// function factorial(n){
//     let result = 1

//     for(i=2 ; i<=n; i++ ){
//         result = result * i 
//     }

//     console.log(result);
// }

// factorial(6)


//  RECURSIVE METHOD


let n =6
function recr(n){
    if(n ===0){
        return 1
    }

   return n * recr(n-1)
}
