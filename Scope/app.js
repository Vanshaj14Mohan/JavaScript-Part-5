let sum = 20; //Global Scope -> Can be used anywhere in the code.

function calSum(a,b){
    let sum = a+b;
    console.log(sum); //Function Scope and if we did'nt use sum variable it will print 20 too.
}
// console.log(sum); we can't use sum outside of the function:
calSum(2,6);
console.log(sum); //will print 20

//Using Block Scope
{
    let a = 10;
    const b = 20;
    console.log("Using let keyword:", a); 
    console.log("Using const keyword:",b); 
}
//will give error coz variable is defined under a block scope
// console.log(a); 
// console.log(b); 

//but if we use var, block scope does'nt apply on var keyword
{
    var a = 15;
}

console.log("Using var keyword:", a);

console.log("Using Lexical Scope");
function outerFunc(){ //function scope
    let x = 5;
    let y = 6;
    function innerFunc(){ //function scope
        console.log("Value of x after lexical scope", x);
        console.log("Value of y after lexical scope", y);
    }
    innerFunc();
}

outerFunc();