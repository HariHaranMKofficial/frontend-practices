//inbuilt functions

//string array


//String
let str="Hello javascript";
console.log(str.split(" "));  //split by space
console.log(str.split("l"));  //split by 'l'
console.log(str.split(""));  //split by ''
console.log(str.toUpperCase());  //convert to uppercase
console.log(str.toLowerCase());  //convert to lowercase
console.log(str);
console.log(str.indexOf("h"));  //find index of substring
console.log(str.lastIndexOf("l"));  //find last index of substring
console.log(str.search(/H/i)); 
console.log(str.replace("javascript", "TypeScript")); 
console.log(str.slice(-6));   //extract substring
console.log(str.substring(-6));   //extract substring



console.log(Array.from(str.matchAll("l")));
let Letter=" Javascript";
console.log(Letter.padStart(20, "DHVGSUIG").padEnd(30, "XYZ"));  //pad start with 'DHVGSUIG'
console.log(Letter.padEnd(20, "DHVGSUIG"));  //pad end with 'DHVGSUIG'
console.log(Letter.repeat(4));
console.log(Letter.length);
console.log(Letter.trim ( ));
console.log(Letter.includes("cs")); //checks if includes
console.log(Letter.startsWith(" Ja")); //checks if starts with
console.log(Letter.endsWith("pt")); //checks if ends with