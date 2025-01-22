//Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
//Eg Country = ["Australia", "Germany", "India", "Japan", "United States of America"]
//Output -> United States of America

let country = ["Australia",  "Germany","India", "Japan", "United States of America"];
function longestName (county){
let ansIdx = 0;
for(let i =0; i<country.length; i++){
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if(currLen > ansLen){
        ansIdx = i;
    }
}
return county[ansIdx];
}

longestName(country);