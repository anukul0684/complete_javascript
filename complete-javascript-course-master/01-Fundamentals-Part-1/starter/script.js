
/*let js = 'amazing';
//if (js === 'amazing') alert('Javascript is fun!');

//40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

//A value is a piece of data. Most fundamental unit of information in programming
console.log('Jonas');
console.log(23);

//useful thing we can do on value is store them in a variable and reuse it in programming
let firstName = "Matilda";
let first = "Jonas";
let firstNamePerson = "Bob";
let first_name; //popular in Ruby

//variable name letters, numbers, underscores, $ sign
//variable name cannot start with numbers
//variable name cannot have reserved keywords as their own like new/function
//variable name can start with letters, underscores and _ sign
//name is a keyword but legal to us, but we should avoid using it
//variable name should not start with capital or uppercase letter
//variable name with all caps should be used to JS to understand it as a real constant
//for ex:
let PI = 3.1415;

console.log(firstName);

console.log(firstName);

console.log(firstName);

//the variable names should be descriptive instead just name them with general way
let myFirstJob = "Coder";
let myCurrentJob = "Web Developer";
//below gives no description about its importance as data
let job1 = "Programmer";
let job2 = "Web Developer";

console.log(myFirstJob);

let country = 'India';
let continent = 'Asia';
let population = 1366;

console.log(country + ' belongs to continent name - ' + continent + ' and has population of - ' + population + ' millions.');

//value is only primitive if it is not an object.
//Primitive data types
// 7
//number
//string
//boolean
//undefined
//null
//symbol
//bigint

//number:floating point numbers used for decimals and integers
let age = 23;

//string: sequence of characters used for text. put them in either '' or " "

//Boolean: logical type that can only be true or false used for taking decisions

//undefined: Value taken by a variable that is not yet defined("empty value")
let children;

//null: also means 'empty value'

//symbol(ES2015) - value that is unique and cannot be changed (not useful for now)

//BigInt (ES2020) - Larger integers than the Number type can hold

//Dynamic typing - create a new variable not required to declare the datatype. Value has data type and not Variable. Data types are determined automatically.
*/

//true;
//console.log(true);
/*let javascriptIsFun = true;
console.log(javascriptIsFun);


// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "true");

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year); // value of the variable is undefined
console.log(typeof year); //type of the variable is undefined as value is undefined

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null); //bug or error in javascript. null is not an object, it should return undefined
*/

//let and const are modern Javascript
/*let age = 30;
age = 31; //reassigning or mutated variable


//const variable not suppose to change in future
const birthYear = 1984;
//birthYear = 1985; //throws error

//const job;

//always use const. use let only when you know there will be mutation

//var is old prior to ES6. works almost same as let

var job = 'programmer';
job = 'teacher';

//var and let are pretty different
//var is function scoped. let is block scoped.
lastName = 'Schmedtmann'; //create a property on a global object //never declare a variable without var, let or const
console.log(lastName);
*/


/*
//Basic operators
//mathematical operators
const futureYear = 2043;
const ageAnu = futureYear - 1984;
console.log(ageAnu);
const ageAnkit = futureYear - 1982;
console.log(ageAnu, ageAnkit);

console.log(ageAnu * 2, ageAnu / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Anu';
const lastName = 'Kulshrestha';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; //x = x + 1;
x--; //x = x-1;
x--; //x = x-1;
console.log(x);

//Comparison operators
console.log(ageAnu > ageAnkit);
console.log(ageAnu < ageAnkit); // >, <, >=, <=
console.log(ageAnu >= 18);
const isFullAge = ageAnu >= 18;

//operator precedence
console.log(futureYear - 1984 > futureYear - 1982);
*/


/*
const futureYear = 2043;
const ageAnu = futureYear - 1984;
const ageAnkit = futureYear - 1982;

//operator precedence
console.log(futureYear - 1984 > futureYear - 1982);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; //x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageAnu + ageAnkit) / 2;
console.log(ageAnu, ageAnkit, averageAge);
*/

//code challenge 1
/*
//Test Data 1:
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log('Test Data 1', markBMI.toFixed(2), johnBMI.toFixed(2));

let markHigherBMI = markBMI > johnBMI;
console.log('Compared Mark BMI with John BMI', markHigherBMI);

//Test Data 2:
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

console.log('Test Data 2', markBMI.toFixed(2), johnBMI.toFixed(2));

markHigherBMI = markBMI > johnBMI;
console.log('Compared Mark BMI with John BMI', markHigherBMI);
*/


/*
const firstName = 'Anu';
const lastName = 'Kulshrestha';
const birthYear = 1984;
const year = 2020;
const job = 'web developer';

const anu = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old, and a PG diploma Graduate in Web Development from PACE, UofW. I work as a ' + job;
console.log(anu);

//template literal or template string using backticks `` ES6
const anuNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
console.log(anuNew);
console.log(`just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines
here with
backticks`);
*/


/*
// if-else statements
const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Anu can start driving licence 🚗 🚌');
} else {
    //const yearsLeft = 18 - age;
    //console.log(`Anu needs to wait for ${yearsLeft} years`);
    console.log(`Anu needs to wait for ${18 - age} years`);
}
*/

//controlled structure
/*
if () {

} else {

}
*/

/*
const birthYear = 2013;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/

//code challenge 2
/*
//Test Data 1:
console.log('***************************** Test Data 1 ***************************');
let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

console.log('Test Data 1', markBMI.toFixed(2), johnBMI.toFixed(2));

let markHigherBMI = markBMI > johnBMI;

console.log('Compared Mark BMI with John BMI', markHigherBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s BMI');
    console.log(`Marks's BMI (${markBMI.toFixed(2)}) is higher than John's BMI ${johnBMI.toFixed(2)}`);
} else {
    console.log('John\'s BMI is higher than Mark\'s BMI');
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's BMI ${markBMI.toFixed(2)}`);
}

console.log('***************************** Test Data 2 ***************************');
//Test Data 2:
markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

console.log('Test Data 2', markBMI.toFixed(2), johnBMI.toFixed(2));

markHigherBMI = markBMI > johnBMI;
console.log('Compared Mark BMI with John BMI', markHigherBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s BMI');
    console.log(`Marks's BMI (${markBMI.toFixed(2)}) is higher than John's BMI ${johnBMI.toFixed(2)}`);
} else {
    console.log('John\'s BMI is higher than Mark\'s BMI');
    console.log(`John's BMI (${johnBMI.toFixed(2)}) is higher than Mark's BMI ${markBMI.toFixed(2)}`);
}
*/
/*
//Type Conversion and Type coercion
//manually done is type conversion
const inputYear = '1984';
console.log(Number(inputYear) + 18, inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Anu')); //returns NaN meaning Not a Number or Invalid number
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion

// + operator converts numbers to strings because javascript has automatic type coercion
console.log('I am ' + 23 + ' years old');

// - operator converts strings to numbers
console.log('23' - '10' - 3);

// other than +, all operators converts string to numbers
console.log('23' * '23' + 5);

console.log('23' > '18');

//guess the outupt

let n = '1' + 1; //converts to 11 the string
n = n - 1; //converts n to 11 the number and substracts 1

console.log(n);
*/
/*
//Truthy and falsy values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean(NaN));

const money = 0;
if (money) {
    console.log(`Don't spend it all`);
} else {
    console.log('You should get a job');
}

let height = NaN;
if (height) {
    console.log('YAY! height is defined');
} else {
    console.log('Height is UNDEFINED');
}
*/

/*
//Equality operators

const age = '18';

if (age === 18) {
    console.log('Person is an Adult (strict)');
}

// == does type coercion
if (age == '18') {
    console.log('Person just became adult(loose)');
}

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite); // ok string cancel object
console.log(typeof favourite); // ok string cancel object
if (favourite === 23) { // == '23' == 23 ->true, === 6 ===23 ->false
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 6) {
    console.log('6 is the coolest number');
} else {
    console.log('number is neither 23 nor 7 nor 6');
}

if (favourite !== 23) {
    console.log('Why not 23?');
}
*/

/*
//basic boolean logic computer science
//logical operators
//basic AND, OR, NOT

//A. Anu has a driver's licence AND B. good vision
//both A and B are true than true
//if either A or B are false then false

////A. Anu has a driver's licence OR B. good vision
//either of them or both true then true.
//if both are false then false;

//Not A, Not B
const age = 16;

if (!(age >= 20)) {
    console.log(1, true);
} else {
    console.log(1, false);
}

if (age >= 20 && age < 30) {
    console.log(2, true);
} else {
    console.log(2, false);
}

if (age >= 20 || age < 30) {
    console.log(3, true);
}

if (!(age >= 20) && age < 30) {
    console.log(4, true);
}

if (age >= 20 || !(age < 30)) {
    console.log(5, true);
} else {
    console.log(5, false);
}
*/

/*
const hasDriversLincense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLincense && hasGoodVision);
console.log(hasDriversLincense || hasGoodVision);
console.log(!hasDriversLincense);

const shouldDrive = hasDriversLincense && hasGoodVision;

if (shouldDrive) {
    console.log('Anu is able to drive');
} else {
    console.log('Someone else should drive');
}

const isTired = false; //
console.log(hasDriversLincense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
    console.log('Anu is able to drive');
} else {
    console.log('Someone else should drive');
}
*/
/*
//coding challenge 3
//Test Data:
console.log('*******************Test Data*********************');
let dolphins1 = 96;
let dolphins2 = 108;
let dolphins3 = 89;

let koalas1 = 88;
let koalas2 = 91;
let koalas3 = 110;

let dolphinsAverageScore = (dolphins1 + dolphins2 + dolphins3) / 3;
let koalasAverageScore = (koalas1 + koalas2 + koalas3) / 3;

console.log(`Dolphins average score - ${dolphinsAverageScore.toFixed(2)}
                and Koalas average score - ${koalasAverageScore.toFixed(2)}`);

if (dolphinsAverageScore > koalasAverageScore) {
    console.log(`Dolphins ${dolphinsAverageScore.toFixed(2)} are the winners 🏆 using Test Data`);
} else if (dolphinsAverageScore < koalasAverageScore) {
    console.log(`Koalas ${koalasAverageScore.toFixed(2)} are the winners 🏆 using Test Data`);
} else if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`Both teams Dolphins - ${dolphinsAverageScore.toFixed(2)},
                 Koalas - ${koalasAverageScore.toFixed(2)} scored the same.
                 So the result is a DRAW`);
}

// Test Data Bonus1
console.log('*******************Test Data Bonus 1*********************');
dophins1 = Number(prompt("Dolphins 1st score as per Bonus1 - "));
dophins2 = Number(prompt("Dolphins 2nd score as per Bonus1 - "));
dophins3 = Number(prompt("Dolphins 3rd score as per Bonus1 - "));
dolphinsAverageScore = (dolphins1 + dolphins2 + dolphins3) / 3;

koalas1 = Number(prompt("Koalas 1st score as per Bonus1 - "));
koalas2 = Number(prompt("Koalas 2nd score as per Bonus1 - "));
koalas3 = Number(prompt("Koalas 3rd score as per Bonus1 - "));
koalasAverageScore = (koalas1 + koalas2 + koalas3) / 3;

console.log(`Dolphins average score - ${dolphinsAverageScore.toFixed(2)}
                and Koalas average score - ${koalasAverageScore.toFixed(2)}`);

let minScore = 100;
let result = dolphinsAverageScore > koalasAverageScore;
let ruleToWinDolphin = dolphinsAverageScore > minScore;
let ruleToWinKoalas = koalasAverageScore > minScore;
if (result && ruleToWinDolphin) {
    console.log(`Dolphins ${dolphinsAverageScore.toFixed(2)} are the winners 🏆 using Bonus1 test data`);
} else if (!result && ruleToWinKoalas) {
    console.log(`Koalas ${koalasAverageScore.toFixed(2)} are the winners 🏆 using Bonus1 test data`);
} else if (result && !ruleToWinDolphin) {
    console.log('Dolphins won but not scored minimum 100');
} else if (!result && !ruleToWinKoalas) {
    console.log('Koalas won but not scored minimum 100');
} else {
    console.log('game was a draw');
}

// Test Data Bonus1
console.log('*******************Test Data Bonus 2*********************');
dophins1 = Number(prompt("Dolphins 1st score as per Bonus2 - "));
dophins2 = Number(prompt("Dolphins 2nd score as per Bonus2 - "));
dophins3 = Number(prompt("Dolphins 3rd score as per Bonus2 - "));
dolphinsAverageScore = (dolphins1 + dolphins2 + dolphins3) / 3;

koalas1 = Number(prompt("Koalas 1st score as per Bonus2 - "));
koalas2 = Number(prompt("Koalas 2nd score as per Bonus2 - "));
koalas3 = Number(prompt("Koalas 3rd score as per Bonus2 - "));
koalasAverageScore = (koalas1 + koalas2 + koalas3) / 3;

console.log(`Dolphins average score - ${dolphinsAverageScore.toFixed(2)}
                and Koalas average score - ${koalasAverageScore.toFixed(2)}`);

minScore = 100;
result = dolphinsAverageScore > koalasAverageScore;
ruleToWinDolphin = dolphinsAverageScore >= minScore;
ruleToWinKoalas = koalasAverageScore >= minScore;
if (result && ruleToWinDolphin) {
    console.log(`Dolphins ${dolphinsAverageScore.toFixed(2)} are the winners 🏆 using Bonus2 test data`);
} else if (!result && ruleToWinKoalas) {
    console.log(`Koalas ${koalasAverageScore.toFixed(2)} are the winners 🏆 using Bonus2 test data`);
} else if (result && !ruleToWinDolphin) {
    console.log('Dolphins did not win as they did not scored minimum 100');
} else if (!result && !ruleToWinKoalas) {
    console.log('Koalas did not win as they did not scored minimum 100');
} else if (dolphinsAverageScore === koalasAverageScore && dolphinsAverageScore >= 100 && koalasAverageScore >= 100) {
    console.log('Both win the trophy');
} else {
    console.lo
}

*/

/*
const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday' // strict comparison
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
}

*/
/*
3 + 4
1984
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Anu'
console.log(`I'm ${2037 - 1984} years old ${me}`);
*/
/*
//conditional ternary operator
const age = 13;
age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink milk 🥛');

const drink = age >= 18 ? 'wine 🍷' : 'milk 🥛';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'milk 🥛';
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'milk 🥛'}`);
*/

/*
//code challenge 4

console.log('********************Entered bill value*****************');
const billAmount = Number(prompt("Please enter the Bill Amount - "));
const tipCondition = billAmount <= 50 || billAmount >= 300;
let tip = tipCondition ? (billAmount * 20) / 100 : (billAmount * 15) / 100;
console.log(`The bill was ${billAmount}, the tip was ${tip}, and the total value is ${billAmount + tip}`);
*/

//Javascript releases
//history of javascript
//interactive websites
//Mocha 1995
//LiveScript 1996
//Javascript 1996
//IE launched JScript copied from Javascript from Netscape
//1997 ECMA, standardizer for javascript ES1 first official standard for javascript ECMAScript is the standard javascript is the language in practice
//2009 ES5
//2015 ES6. biggest update to the language ever
//annual release cycle
//2017 ES2016/2018 ES2017/2019 ES2018/2020 ES2019/...
//new features added keeping previous stuff intact. hence releases and not versions.
//websites keep working forever
//backwards compatible


//2020 2089 will not work. not forward compatible
//how to use modern js today
//development - simply use latest google chrome
//production - deploying on internet - user cant be thought of what they are using. use Babel to transpile and polyfill your code converting back to ES5 to ensure browser compatibility for all users

//ES5 fully supported in all browsers(down to IE9 from 2011)
//ES6+ (ES2015 till ES2019) well supported in all  modern browsers; no support in older browsers can use most features in production with transpiling and polyfilling
// ES2021 - infinity - ESNext: future versions of the language(new feature proposals that reach stage4); can already use some features in production with transpiling and polyfilling.