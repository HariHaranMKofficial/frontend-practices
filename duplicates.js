//duplicates
let numbers = [1, 2, 3, 4, 2, 5, 1, 6];

let obj={};

for(let num of numbers) {
   if(obj[num]) {
       obj[num]++;
   } else {
       obj[num] = 1;
   }
}

for(let a1 in obj) {
   if(obj[a1] > 1) {
       console.log("Duplicate found:", a1);
       
   }
}

for(let a1 in obj) {
   if(obj[a1] == 1) {
       console.log("Unique found:", a1);
   }
}



console.log("Frequency of each number:", obj);