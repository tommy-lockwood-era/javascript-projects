/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Tommy Lockwood <t.lockwood@erasolutions.us>
 *
 * Created at     : 2017-11-03 02:21:56 
 * Last modified  : 2018-02-25 15:31:40
 */

function complexFunction(a,b,c,d,e) {
    // a bunch of stuff
    return 5;
}

// Testing various math operations
4 + 5
2 - 7
8 * 2
9 / 7

// Trying out exponents
Math.pow(5,2);
5 ** 2;

Math.round(4.3);
Math.sin(45);

// PEMDAS
/*
Parenthesis
Exponents
*
/
+
-
*/

let x = 4;
let y = 6 + x++
console.log(y);
console.log(x);

let z = 4 / (5 * 3) - 6

5 < 11 // true
5 < 5  // false
5 <= 5 // true
5 !== 7 // true

const ride = {isNotFull: false};
let height = 4;
let age = 8;
if(age >= 8 && height >= 4 && ride.isNotFull) {
    console.log("keep on comin");
}
console.log("Choose your lunch:")
// ...
//if(ham || turkey || vegetarian || none) {
    // proceed with registration
//}
/* AND - multiple requirements
x        y       x&&y
true  && true  = true
true  && false = false
false && true  = false
false && false = false
1 + 1 = 2 (1)
1 + 0 = 1
0 + 1 = 1
0 + 0 = 0
*/
/* OR - multiple options
x        y       x&&y
true  || true  = true
true  || false = true
false || true  = true
false || false = false
*/

//&& //and - above #7
//|| //or - "pipe" above backslash above enter key

function printPerson(person) {
    console.log(`Name: ${person.name}`);
}

let person = {name: "John"};
printPerson(person);

let xa = 6;
let ya = 2;
let za = xa <= ya ? 26 : 18;
console.log(za);

if(x > 5) {
    // some code
} else {

}

function add(x,y) {
    return x + y;
}

let choice = "meat";

            //condition             true result                 false result
let meal =
    choice === "meat"
    ? "Here's the meat option"
    : "Here's the vegetarian option";

if(choice === "meat") {
    let meal = "Here's the meat option";
} else {
    let meal = "Here's the vegetarian option";
}
        
// expressive
// Leetcode, HackerRank

function ave(values) {
    let sum = 0;
    for(let i = 0; i < values.length; i++) {
        sum = sum + values[i];
    }
    return sum / values.length;
}

function median(values) {
    let myArray = sort(values);
    let index = Math.floor(myArray.length/2); // arrays with an odd number of values are covered
    
    // NOTE: add functionality for arrays with even numbers of values

    return values[index];
}
let time = 2;
while(time >= 9 && time < 20) {
    // Let customers in
    time = Clock.currentTime();
}

let i = 0;
while(i < 20) {
    console.log("This loop is running!");
    i++;
}

function sort(unsortedArray){
    let sortedArray;
    //...
    return sortedArray;
}

let num1 = 8;
let num2 = '8';
console.log(num1 == num2); // true
console.log(num1 === num2); // false

let month = '6';
switch(month) {
    case 6:
        console.log(1);
        break;
    case '6':
        console.log(2);
        break;
    case "june":
    case "quintilus":
    case "junio":
        console.log(6);
        break;
    default:
        console.log("Sorry man, we haven't heard of that month. Can you try that again?");
        break;
}

let xk = '5';

switch(xk) {
    case 5:
        document.write("yes");
        break;
    default:
        document.write("no");
        break;
}
