//Write a JavaScript function to extract unique characters from a string
//Eg: str = "abcdabcdefgggh".
//ans = "abcdefgh"

let str = "abcdadcdefgggh";

function getUnqiue(str){
    let ans = "";
    for(let i =0; i<str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans = ans+ currChar;
        }
    }
    return ans;
}

getUnqiue(str);
