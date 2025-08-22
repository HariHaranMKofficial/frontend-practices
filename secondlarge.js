//second largest

let numbers = [3, 5, 1, 4, 2, 10, 9, 8, 7];
let largest = 0;
let secondLargest = 0;
let thirdLargest = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = numbers[i];
    } else if (numbers[i] > secondLargest && numbers[i] < largest) {
        thirdLargest = secondLargest;
        secondLargest = numbers[i];
    } else if (numbers[i] > thirdLargest && numbers[i] < secondLargest) {
        thirdLargest = numbers[i];
    }
}
console.log("Largest number is:" + " " + largest);
console.log("Second largest number is:" + " "+ secondLargest);
console.log("Third largest number is:" + " "+ thirdLargest);

