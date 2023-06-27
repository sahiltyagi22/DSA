function isPal(n){
    let rev = 0; temp =n ;

    while(temp !==0){
        let ld = temp %10
        rev = rev*10+ld
        temp = Math.floor(temp/10)
    }

if (rev === n ) {
    console.log("this is a palindrome number");
}else{
    console.log("this is not a palindrome number");
}

}
isPal(993)




  