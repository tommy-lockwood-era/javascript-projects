let myArray = [4,3,6,7];
for(let i=0; i < 5; i++) {
    
}

for(let i=0; i < 2; i++) {

}

console.log("this function is running!");

function sum2(x,y) {
    let sum = x + y;
    return sum;
}

let sum;
if(true) {
    sum = 5;
}

console.log(    sum2(3,5)        );
console.log(    "sum: " + sum   );

// Document Object Model (DOM)


// properties - variables with values
// behaviors - functions/methods

let num = 3;
console.log(num = 6); // assigns a '6' to 'num' and outputs the value of num
console.log(num != '6'); // does not compare data type
console.log(num !== '6'); // does compare data type

num == 6;
num === 6;
num > 6;
num < 6;

if(num == 6) {
    // do something
} else if(num > 6) {
    // do something else
} else {
    // do another thing
}

// OR (||) and AND (&&)
while(num > 6 || num < 6) {
    break;
}

/*let age = 14
let hasAnotherPersonInLine = true;
while(hasAnotherPersonInLine) {
    age = getNextInLine().age;
    if(age < 15 && age > 10) {
        // receive youth ticket
    }
}*/

function checkInventory() {

}

function orderSupplies() {

}

function checkOrderStatus() {

}

let employeeRoster;

function getCurrentShift() {

}

function getEmployeeShifts(employee) {

}

function assignShift(employee, shift) {
    // organize the employee and shift information and store it properly in the database
}

// logical comparisons || and &&
// concatenation - adding strings together, combining strings (or numbers)
console.log("0 || 1 = "+(0 || 1)); // truthy/falsy
console.log("1 || 2 = "+(1 || 2));
console.log("0 && 1 = "+(0 && 1));
console.log("1 && 2 = "+(1 && 2));

    // index    0  1  2  3
let myArray2 = [32,76,89,41];
for(let i = myArray2.length-1; i >= 0; i--) {
    console.log(myArray2[i]);
}
/*
iteration   i   i-1    output
1           4   3      41
2           3   2      89
3           2   1      76
4           1   0      32
5           0
*/

