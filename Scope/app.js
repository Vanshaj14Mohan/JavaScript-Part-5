let sum = 20; //Global Scope -> Can be used anywhere in the code.

function calSum(a,b){
    let sum = a+b;
    console.log(sum); //Function Scope and if we did'nt use sum variable it will print 20 too.
}
// console.log(sum); we can't use sum outside of the function:
calSum(2,6);
console.log(sum); //will print 20