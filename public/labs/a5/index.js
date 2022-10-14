// Commented out code below as mentioned in 2.2
// for future sections of Lab
// alert('Hello World!');
console.log('Hello World!');

// 2.4 Variables and Constants
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;

console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

// 2.4.1 Variable Types
console.log('Variable Types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;

console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// 2.4.2 Boolean Variables
console.log('Boolean Variable');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
let sortaTrue = '1' == 1;
let notTrue = '1' === 1;

console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// 2.5 Conditionals

// 2.5.1 If Else
console.log('If else');
if (true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// 2.5.2 Ternary Conditional Operator
console.log('Ternary Conditional Operator');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting);

// 2.6 Functions

// 2.6.1 Legacy ES5 function
console.log('Legacy ES5 function');
function add (a,b) {
    return a + b;
}
const twoPlusFour = add(2,4);
console.log(twoPlusFour);

// 2.6.2 New ES6 arrow functions
console.log('New ES6 functions')
const subtract = (a,b) => {
    return a-b;
}
const threeMinusOne = subtract(3,1);
console.log(threeMinusOne);

// 2.6.3 Implied Returns
console.log('Implied return');
const multiply = (a,b) => a * b;
const fourTimesFive = multiply(4,5);
console.log(fourTimesFive);

// 2.6.4 Optional Parenthesis and Parameters
// Only when there is ONE parameter
console.log('Parenthesis and parameters');
const square = a => a*a;
const plusOne = a => a+1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// 2.7 Arrays
console.log('Arrays');
let numberArray1 = [1,2,3,4,5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped, blockScoped, constant1, numberArray1, stringArray1
];
console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

// 2.7.1 Array index and length
console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// 2.7.2 Adding and Removing Data to/from Arrays
console.log('Add and remove data to arrays');
// adding new items
numberArray1.push(6);
stringArray1.push('string3');
// console.log(numberArray1);
// console.log(stringArray1);
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
// removes the 2nd item
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// 2.7.3 For Loops
console.log('For loops');
// console.log(stringArray1.length);
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// 2.7.4 The Map Function
console.log('Map function');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares);
console.log(cubes);

// 2.7.5 The Find Function
console.log('Find function');
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

// 2.7.6 The Find Index Function
console.log('Find index');
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

// 2.7.7 The Filter Function
console.log('Filter function');
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
const evenNumbers = numberArray1.filter(a => a % 2 === 0);
const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);






















