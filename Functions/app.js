//Syntax how to write a function in JavaScript.
//declaring a function:
// function  funcName(){
//     do something
// }

// Function calling(Using the function);

// funcName();
//_________________________________________________________________

//Creating some functions now 

//Function one
function hello(){
    console.log("Hello");
}


hello();

//Function two
function printName(){
    console.log("JavaScript");
}

printName();

//Function three
function numCheck(){ //printing numbers from 1 to 5.
    for(i = 1; i<=5; i++){
        console.log(i);
    }
}

numCheck();

//Function four, using if-else in a function
function checkAdult(){ //check if entered user is adult or not
    age = prompt("Enter user age");
    if(age >=18){
        console.log("An adult, age is:", age);
    }
    else{
        console.log("Not an adult, age is:", age);
    }
}

checkAdult();

//Now Functions with arguments
function printInfo(name, age){
    console.log(`name is ${name} and age is ${age}`);
}

printInfo("John", 23);

//create a function that returns the sum of two numbers.
function sum(a,b){
    console.log("Sum is", a+b);
}

sum(2,6);
sum(4,8);

//Using return keyword, not console.log()
function checkSum(a,b){
    console.log("Yes");
    return a+b;
    console.log("abc");
}

// console.log(checkSum(checkSum(2,4),4)); to print sum of three numbers using functions-> a trick 

// let s = checkSum(2,5); will print the value only when we store it in a variable & then console.log()
// or console.log(checkSum(2,5));
// console.log(s);

//Using Function Expressions
let add = function(a, b){
    return a + b;
}

add(10,20);

let hello_2 = function(){
    console.log("Hello");
}

hello_2();

//Higher order functions -> Takes one or multiple functions as arguments.
function multipleGreet(func, count){ //higher order function.
    for(let i = 1; i<=count; i++){
        func();
    }
}

let greet = function(){
    console.log("Greet");
}

multipleGreet(greet, 4);

//Even - Odd Function
// let odd = function(n){
//     console.log(!(n%2 == 0))
// }

// let even = function(n){
//     console.log(n%2 == 0);
// }

function oddEvenTest(request){
    if(request == "Odd"){
        return function(n){
            console.log(!(n%2 == 0))
        }
        return odd;
    }
    else if(request == "Even"){
        return function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("Wrong request..");
    }
}

let request = "even";

//Methods -> Actions that can be performed on an object.
const calculator = {
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a- b;
    },
    div: function(a, b){
        return a/b;
    },
    mult: function(a, b){
        return a*b;
    }
};
