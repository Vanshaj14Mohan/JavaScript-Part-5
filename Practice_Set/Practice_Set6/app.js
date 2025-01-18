//Create a function that returns the concatenation of all strings in an array.
let str = ["Today", "is", "a", "good", "day"];
//output -> Todayisagoodday

function showstr(str){
    let result = "";

    for(i = 0; i<str.length; i++){
        result += str[i]; //or result = result + str[i];
    }
    return result;
}