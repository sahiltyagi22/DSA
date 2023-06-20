const data =  [9,12,4,32,56,43,6,3,0,35]
let temp;
for (i=0; i<data.length; i++){
    for(j=0; j<data.length; j++){
        if(data[j]>data[j+1]){
            temp = data[j]
            data[j] = data[j+1]
            data[j+1] = temp
        }
    }
}
console.log(data);