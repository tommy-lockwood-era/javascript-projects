/*let a = 3;
//console.log(a);
a = a + 3;
a += 3;
a++;

a = a - 1;
a -= 1;
a--;

//console.log(a);
//  counter   boundary increment
let forLogging = "";
for(let i = 0; i <= 10; i++ ){
    // loop body
    // each time this code runs, it's called an iteration
    forLogging = forLogging + i + " ";
}
console.log(forLogging);
*/
/*i | forLogging
0   0 
1   0 1
2   0 1 2
3   0 1 2 3 
.
.
.
9   0 1 2 3 4 5 6 7 8 9 
10*/

function factorial(x) {
  // x ^ 5
  // x * x * x * x * x
  let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= x; // result = result * x;
  }
  return result;
}

//document.getElementById("result").innerHTML = power(3,2);

//console.log(power(2,4) + "\n\n");
// 0   1   2   3   4   5
const myArray = [87, 76, 99, 23, 86, 95];
const carMakes = ["Saab", "Volvo", "Dodge", "Toyota", "Buick"];
const settings = [true, false, true, true, false];

//console.log(myArray[2]);
for (let i = 0; i < carMakes.length; i++) {
  console.log(carMakes[i]);
}

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 5; j++) {
    for (let k = 0; k < carMakes.length; k++) {
      console.log(carMakes[k]);
    }
  }
}

let results = 1

// factorial using recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = n * factorial(n - 1);
    //console.log(result);
    return result;
  }
}
/* multi-line comment 
*/
//console.log(factorial(8));
/*
function Animal(object) {
    this.name = object.name;
  }
 */
function Person(attributes) {
  this.age = attributes.age;
  this.name = attributes.name; // means 'my "name" attribute' = ...
  this.homeTown = attributes.homeTown;
  this.speak = function () {
    return `Hello, my name is ${this.name}`;
  };
}

const shannon = new Person({ age: 27, name: 'Shannon', homeTown: 'Nashville' });

console.log(shannon.name);

/*function Fruit(attrs) {
  this.type = attrs.type;
  this.name = attrs.name;
  this.isRipe = attrs.isRipe;
  this.calories = attrs.calories;
}
// dont worry about prototype rn

Fruit.prototype.shipped = this.shipped = function(destination) {
    console.log(`Shipping ${this.name} to ${destination}`);
  };
 
Fruit.prototype.calculateCals = function() {
  console.log(`Calories in ${this.name} are ${this.calories * 200}`);
};
 
function Banana(bananaAttrs) {
  Fruit.call(this, bananaAttrs);
  this.doMonkeysLikeIt = bananaAttrs.doMonkeysLikeIt
}
 
Banana.prototype.checkIfMonkeysLikeIt = function() {
  if(this.doMonkeysLikeIt) {
    return true;
  } else {
    return false;
  }
};
 
const newBanana = new Banana({doMonkeysLikeIt: true, type: 'Tree', name: 'Banana', isRipe: false, calories: 0.1});
 
console.log(newBanana);*/

// 11!
// 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1
// 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10 * 11

for (let i = 0; i <= 20; i++) {
  if (2 * i % 3 === 0) {
    console.log(i);
  }
}

// while loops
let carHasGas = true;
let hasReachedDestination = true;
if (carHasGas) {
  console.log("Car is driving");
}

while (carHasGas) {
  console.log("Car is driving");
  if (hasReachedDestination) {
    break;
  }
}

do {
  console.log("Car is driving");
  if (hasReachedDestination) {
    break;
  }
} while (carHasGas);

// random numbers
Math.random(); // RNG - Random Number Generator
// 0.0 (inclusive) - 1.0 (exclusive) 
// [0.0,1.0) -> 0% - 100%

Math.floor(Math.random() * 101); // Random number 0-100
Math.floor(Math.random() * 11); // Random number 0-10

// Random number 60-100 -> convert to a 0-# range -> subtract 60 from both the min and max
Math.floor(Math.random() * 41); // Random number 0-40
Math.floor(Math.random() * 41) + 60; // Random number 60-100

// Random number 1-10
// Random number 0-9 + offset of 1
Math.floor(Math.random() * 10) + 1; // Random number 1-10

Math.floor(Math.random() * 101); // Random number 0-100
let num = Math.floor(Math.random() * 41) - 50; // Random number -50-50

const myOtherArray = [5, 4, 6, 22, 43, 12, 66, 1, 2, 3];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(i, j);
  }
}

/*let i = 0;
while (i < 3) {
  let j = 0;
  while (j < 3) {
    console.log(i, j);
    j++;
  }
  i++;
}*/
// no i or j
for(let i = 0; i < 10; i++) {
  // no j, yes i
  for(let j = 0; j < 3; j++) {
    for(let k = 0; k < 4; k++) {
      //console.log(`i: ${i} j: ${j} k: ${k}`);
    }
  }
  // no j, yes i
}
// no i or j

// piece of code to process inventory
let item = {isInStock: false};
let haveMoreItemsToCheck = true;
/*while(haveMoreItemsToCheck) {
  if(item.isInStock) {
    console.log("We have some!");
  } else {
    console.log("We need more!");
  }
  haveMoreItemsToCheck = db.getNextItem();
}*/
let myNums = [5,7]; // indexes 0-5, length 6
function calcAve(numbers) {
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum/numbers.length;
}

myVar = 

console.log(calcAve([3,6,7,2]));
console.log(calcAve([7,12,4.23,98]));
console.log(calcAve(myNums));