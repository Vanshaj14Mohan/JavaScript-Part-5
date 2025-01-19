//What will be the output of this code
let greet = "Hello"; //Global Scope

function changeGreet(){
    let greet = "Namaste"; //Function Scope
    console.log(greet); // Namaste
    function innerGreet(){
        console.log(greet);  //Lexical Scope
    }
    innerGreet();
}

console.log(greet); //Hello
changeGreet(); //Namaste