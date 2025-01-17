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