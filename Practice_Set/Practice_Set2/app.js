//Create a function to roll a dice & always display the value of the dice:
 function rollDice(){
    getRandom = Math.floor(Math.random()*6)+1;
    console.log("Dice rolled:");
    console.log("Value got after dice was rolled is:", getRandom);
 }

 rollDice();