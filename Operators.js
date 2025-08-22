//a=12;

//let a;
//var a; 

//console.log(a)

//Operators -> Unary and Binary


//

let a=5;
//let b=a;
//let b=a++;
//let b=++a;

let b= a++ + ++a + a;

console.log(a);
console.log(b);

let c=6;

c++;
console.log(c);

//binary
//arithmetic logical relational bitwise assignment

//Arithmetic
// + - * / %

console.log(4 * 5);
console.log("2"*"3");
console.log("6"* 7);
console.log("9." * 3);
console.log("9a"*3);  //NaN
console.log("8%" * 3); //NaN
console.log("3,"*9);  //NaN

console.log("6." * false); //0
console.log("8.2" * true); //8.2
console.log(true * true); //1
console.log("String " * true); //NaN
console.log("6." * null);
console.log("7." * undefined);

console.log(4+5);
console.log("3"+"7");
console.log("7." + "8");
console.log("8."+9);
console.log("5." + undefined);
console.log("6." + null);
console.log(true + true);

console.log(2/0);
console.log(0/20);


console.log(0.1 + 0.2);
console.log(1.1 + 2.3);

console.log(typeof null);
console.log(0.7 + 0.1);
console.log(0.1 + 0.2 + 0.3);
console.log(0.05 + 0.01);
console.log(0.2 + 0.4);

console.log(0.3 - 0.1);
console.log(0.6 - 0.2);
console.log(3.82 - 8.34);
console.log(2.18-1.10);
console.log(0.2 * 0.1);
console.log(0.5 * 0.6);
console.log(0.2 * 0.6);

console.log([1,5] + [5,3]);
console.log([1,3] - [2,6]);
console.log("1,2" * "3,3");
console.log("[1,2]" * "[7,7]");
console.log([12] * [6]);

console.log({name: "hari"} + {name: "mari"});
console.log({name: "hari"} - {name: "mari"});
console.log({name: "hari"} * {name: "mari"});
console.log({name: "hari"} + 12);
console.log({name: "hari"} * "mari");
console.log({name: "hari"} + "mari");


// > < <= >= == !=

console.log(2 >12);
console.log(2< 12);
console.log(2 <= 12);
console.log(2>= 12);

console.log("2" > 13);
console.log("2" <14);
console.log("4" >= 15);
console.log("4"<= 15);
console.log("2" > "12");
console.log("2" < "12");
console.log(a > b);
console.log( a < b);
console.log(a <= b);
console.log(a>=b);

console.log("a" >= "x");
console.log("a"<= "x");
console.log("a" > "z");
console.log("a" < "z");
console.log(2==12);
console.log("7"==7);
console.log(67==67);
console.log(23==43);
console.log("45"==67);


console.log(a==a);
console.log("a"=="a");
console.log("a"==b);
console.log("a"=="d");

console.log("a"< undefined);
console.log(a<undefined);
console.log(a>null);
console.log("a">null);
console.log("a"> undefined);
console.log(false==null);
console.log(null==undefined);
console.log(null!=undefined);
console.log(true==undefined);
console.log(true==null);
console.log(null!=true);

console.log(null> 1);
console.log(undefined<1);
console.log(null == 0 );
console.log(undefined== 1);
console.log(undefined!=1);
console.log(null!=a);
console.log(undefined!=a);