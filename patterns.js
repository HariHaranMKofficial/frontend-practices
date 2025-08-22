//*
//***
// ***** 


let rows = 6;
let result = '';
let spaces = rows*2-2;
let cols = 1;

for (let i = 1; i <= rows; i++) {
    var num =1;
    for (let j = 1; j <= spaces; j++) {
        result += " ";
    }
    for (let j = 1; j <= cols; j++) {
        //result += j%2!=0 ? num++ : " ";
        result += '*';
    }
    result += "\n";
    cols += 2; //Increment columns
    spaces -= 2; //Decrement spaces
}
console.log(result);
console.log(num);

