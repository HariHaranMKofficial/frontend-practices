//non primitve

//array

let a = [12,1,45,66,42,85, "Hello", true, null , undefined];

console.log(a[2]);
console.log(a[55]);
console.log(a);

a[4]=75;
console.log(a);

a[10]=123;
console.log(a);

a[16]=true;
console.log(a);

console.log(a.length);

let b= a;
b[1]= 20;
console.log(a[1]);
console.log(b[1]);


//Object -> Key value pair

  let obj = {name: "hari" , class:"frontend" , marks: [70,89,99,46]};
 console.log(obj.name);
 //Object.seal(obj);

 obj["name"]= "updated";

 console.log(obj);

 console.log(obj["name"]);
 console.log(obj["class"]);

//Object.freeze(obj);
let obj1 =obj;
obj1["name1"]="obj1 changes";

obj[undefined]="accepted";
obj[null]="accepted null";
obj[[1,2,3]]="Done!";
console.log(obj);
console.log(Object.values(obj));
console.log(Object.keys(obj));



