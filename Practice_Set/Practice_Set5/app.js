//Create a function that returns the sum of numbers from 1 to n.
function sumNum(n){
    let sum = 0;
    for(i = 1; i<=n; i++){
        sum += i; //or sum = sum + i;
    }
    return sum;
}