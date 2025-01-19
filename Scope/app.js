function calSum(a,b){
    let sum = a+b;
    console.log(sum); //Function Scope
}
// console.log(sum); we can't use sum outside of the function:
calSum(2,5);