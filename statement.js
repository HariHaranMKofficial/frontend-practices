//Statements

//conditional statements iterative switch 

//conditional statements

//if else

if (" ") {
   console.log("Condition is true"); // This will print true
   console.log("Condition is true1"); // This will print true1
} 
else {
   console.log("Condition is false");
}

if ("") {
   console.log("Condition is true");
} 
else {
   console.log("Condition is false"); // This will print false
}

if ("")   
   ;
   console.log("Condition is true"); // This will print true because the semicolon ends the if statement


//ladder, nested , if else

// if else ladder

let marks = 85;

if (marks >= 90) {
   console.log("Grade A");
} else if (marks >= 80) {
   console.log("Grade B");
} else if (marks >= 70) {
   console.log("Grade C");
} else {
   console.log("Grade D");
}


//nested if 
if (marks >= 70) {
   if (marks >= 80) {
      console.log("Grade A");
   } else {
      console.log("Grade B");
   }
}

//iterative statements
//for loop, while loop, do while loop

//for loop
for (let i = 0; i < 7; i += 2) {
   console.log("For loop iteration: " + i);
}

//while loop
let j = 0;
while (j < 5) {
   console.log("While loop iteration: " + j);
   j++;
}

//do while loop
let k = 0;
do {
   console.log("Do while loop iteration: " + k);
   k++;
} while (k < 5);

//for(; ;){
  // console.log("marks"); 
//}


let arr = [1, 2, 3, 4, 5];
for(i=0; i<5; i++){
   console.log("For= " + arr[i]);
}


//while

let q = 0;
while (q < arr.length) {
   console.log("While= " + arr[q]);
   q++;
}

//do while
let r = 0;
do {
   console.log("Do While= " + arr[r]);
   r++;
} while (r < arr.length);


for(let a1 of arr){
   console.log("For of= " + a1);
}

for(let key in Object){
   console.log("For in= " + key);
}

for(let i=0;i<5;){
   if(i===2){
      
      continue;
   }
   console.log("Hello =" + " " + i);
  i++;
}
