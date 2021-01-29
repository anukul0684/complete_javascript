// 'use strict';
/*
//Activating Strict Mode

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}

if (hasDriversLicense) {
    console.log('I can drive :D');
}

// const interface = 'Audio';
// const private = 534;

// console.log(interface, private);
*/
/*
function logger() { //function body
    console.log('My Name is Anu');
}
//invoking function, calling the function, running the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);

console.log(appleJuice);
//console.log(fruitProcessor(5, 9));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//reuse, easy to maintain, either returns or not

const num = Number('23');
*/
/*

'use strict';

const age1 = calcAge1(1984);

//generic function- function declaration - they can be called before declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}

console.log(age1);
//process called hoisting
//anonymous function -function expression - they cannot be called before expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1982);
console.log(age1, age2);



//Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;

const age3 = calcAge3(1984);

console.log(age3);

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    return retirementAge;
}

console.log(yearsUntilRetirement(1984));

const yearsUntilRetirement1 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement1(1984, 'Anu'));
console.log(yearsUntilRetirement1(1982, 'Ankit'));

// what type of function to be used.
//fundamental differnce between Arrow function and traditional (function declaration and function expression)
//Arrow functions do not get this keyword.
*/
/*
'use strict';

function cutFruitPieces(fruit) {
    return fruit * 3;
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} pieces of ${apples} apples and ${orangePieces} pieces of ${oranges} oranges.`;
    return juice;
};

console.log(fruitProcessor(2, 3));
*/

/*
'use strict';

const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;
    if (retirementAge > 0) {
        console.log(`${firstName} retires in ${retirementAge} years`)
        return retirementAge;
    } else {
        console.log(`${firstName} has already retired 💐`);
        return -1;
    }
    // return `${firstName} retires in ${retirementAge} years`;
};

console.log(yearsUntilRetirement1(1984, 'Anu'));
console.log(yearsUntilRetirement1(2013, 'Anish'));
console.log(yearsUntilRetirement1(1950, 'Papa'));
*/


//function declaration(traditional) - can be used before it is declared
//function expression(traditional) - essentially a function 'value' stored in a variable. cannot be used before it is written
//arrow function - great for a quick one-line functions. Has no 'this' keyword(more later...)
//all three ways - receive input data, transform data, and then output data

//Anatomy of a function
//Function name, 
//Parameters: placeholders to receive input values. Like local variables of a function, 
//Function body: pieces of code/block of code that we want to reuse. Processes the function's input data
//return statement to output a value from the function and terminate execution of the function code also known as function returns here.
//Calling, running or invoking the function using ()
//Arguments: actual values of function parameters, to input data
//variable to save returned value(function output)

//code challenge #1
/*
'use strict';

let counter = 0;
let testData = 2;
while (counter < testData) {
    const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
    const scoreDolphin1 = Number(prompt("Enter Score 1 for Dolphin-"));
    const scoreDolphin2 = Number(prompt("Enter Score 2 for Dolphin-"));
    const scoreDolphin3 = Number(prompt("Enter Score 3 for Dolphin-"));
    const averageDolphinScore = calcAverage(scoreDolphin1, scoreDolphin2, scoreDolphin3);

    const scoreKoalas1 = Number(prompt("Enter Score 1 for Koalas-"));
    const scoreKoalas2 = Number(prompt("Enter Score 2 for Koalas-"));
    const scoreKoalas3 = Number(prompt("Enter Score 3 for Koalas-"));
    const averageKoalasScore = calcAverage(scoreKoalas1, scoreKoalas2, scoreKoalas3);

    const checkDoubleTheScore = (scoreDolphin, scoreKoalas) => {
        if ((scoreDolphin / 2) >= scoreKoalas) {
            return true;
        }
    };

    //Test Data 1 - dolphin - 44,23,71. Koalas - 65,54,49
    //Test Data 2 - dolphin - 85,54,41 and Koalas - 23,34,27
    const checkWinner = function (averageDolphinScore, averageKoalasScore) {

        if (checkDoubleTheScore(averageDolphinScore, averageKoalasScore)) {
            console.log(`Dolphins win 🏆❤(${averageDolphinScore} vs. ${averageKoalasScore}).`);
        } else if ((averageKoalasScore / 2) >= averageDolphinScore) {
            console.log(`Koalas win 🏆❤(${averageKoalasScore} vs. ${averageDolphinScore}).`);
        } else if (averageDolphinScore === averageKoalasScore) {
            console.log(`It was a draw 🤟(Dolphins ${averageDolphinScore} vs. Koalas ${averageKoalasScore}).`);
        } else {
            console.log(`Nobody won the game(Dolphins ${averageDolphinScore} vs. Koalas ${averageKoalasScore}).`);
        }
    };

    checkWinner(averageDolphinScore, averageKoalasScore);
    counter++;
}
*/
/*
'use strict';
//Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';
//literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
//using class Array creating object
const y = new Array(1982, 1984, 2013, 2024);

console.log(friends[0]); //square brackets to get the Array object details out
console.log(friends[2]);
console.log(friends.length); // length is the property of class Array and called by object friends //integer
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

//primitive values are immutable. Array element is not a primitive value so we can mutate or change it even though it is const. but reassign is not possible to const Array
//javascript expects expression at array element
const firstName = 'Anu';
const anu = [firstName, 'Kulshrestha', 2037 - 1984, 'web develeper', friends];
console.log(anu);
console.log(anu.length);

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
};

const years = [1984, 1982, 1950, 1956, 2013];

//can not do operations with arrays directly
console.log(calcAge(years));

//we send the array element instead of whole array to do operations
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

*/
/*
//array operations. using functions of array to do operations on array
'use strict';
const friends = ['Michael', 'Steven', 'Peter'];
//adding element to array at the end using 'push' function
// friends.push('Jay');
// push function returns 'length' of the new array
const newLength = friends.push('Jay');
console.log(friends, newLength);
//to add element at 1st place in array. this function is 'unshift' it also returns length of the array
friends.unshift('John');
console.log(friends);

//remove elements
//to remove the last element use pop(). just the function with no arguments.
const removedFriend1 = friends.pop();
const removedFriend2 = friends.pop();
console.log(friends, removedFriend1, removedFriend2);

//to remove the first element use shift()
friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
friends.push(23)
//includes() returns boolean value if it exists or not
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
//includes() checks with strict equality
console.log(friends.includes('23')); //false
console.log(friends.includes(23)); //true

if (friends.includes('Steven')) {
    console.log(`You have a friend called Steven`);
}

*/
/*
'use strict';
let tip = 0;
const calcTip = function (billValue) {
    const tipCondition = (billValue >= 50 && billValue <= 300);
    tip = tipCondition ? (billValue * 15) / 100 : (billValue * 20) / 100;
    return tip;
}

const testBillTip = calcTip(100);
console.log(testBillTip);
const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = new Array(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
console.log(`The Bills are ${bills},
The tips calculated are ${tips},
The total now will be ${total}`);

const anuArray = [
    'Anu',
    'Kulshrestha',
    2037 - 1984,
    'Web Developer',
    ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha']
];
*/
/*
'use strict';

//we use arrays in case of ordered data accessing them through the index number
//use of object in case of unordered data accessing them through the property or key name
//literal object in array - contains property/key, property value
//associative array
const anu = {
    firstName: 'Anu',
    lastName: 'Kulshrestha',
    age: 2037 - 1984,
    job: 'Web Developer',
    friends: ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha']
};
console.log(anu);
console.log(anu.lastName);
console.log(anu['lastName']);

const nameKey = 'Name';
console.log(anu['first' + nameKey]);
console.log(anu['last' + nameKey]);
//console.log(anu.last + nameKey);

// . notation to be used when direct addressing
//and when we use bracket notation - compute the common names within properties
const interestedIn = prompt(`What do you want to know about Anu? Choose between
                                firstName, lastName, age, job and friends`);
if (anu[interestedIn]) {
    console.log(anu[interestedIn]);
} else {
    console.log('Sorry. Wrong choice');
}

anu.location = 'Winnipeg';
anu['twitter'] = '@AnuKulshresth';
console.log(anu);

//challenge
//"Anu has 3 friends, and her best friend is called Unnati";
console.log(`${anu.firstName} has ${anu['friends'].length}
and her best friend is called ${anu['friends'][0]} ${anu.friends[0]}`);
*/
/*
'use strict';

const anu = {
    firstName: 'Anu',
    lastName: 'Kulshrestha',
    birthYear: 1984,
    job: 'Web Developer',
    friends: ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha'],
    hasDriversLicense: false,
    // calcAge: function (birthYear) { // method is called for function and has to be an expression and not declaration
    //     return 2037 - birthYear;
    // }, // function returns value

    // calcAge: function () {
    //     // console.log(this);
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        // console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
        // return;
        // return this.age;
    },

    isDriver: function () {
        if (this.hasDriversLicense) {
            return 'a';
        } else {
            return 'no';
        }
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and she has ${this.isDriver()} Driver's License`;
    }
};

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// console.log(anu.calcAge(1982));
// console.log(anu['calcAge'](1984));
// console.log(anu.calcAge(anu.birthYear));
// console.log(anu.calcAge());
// console.log(anu.calcAge());
// console.log(anu.calcAge());
console.log(anu.calcAge());
// anu.calcAge();
console.log(anu.age);

//Challenge
//"Anu is a 53-year old web developer and she has a driver's license"
// console.log(`${anu.firstName} is a ${anu.calcAge()}-year old ${anu.job} and she has ${anu.hasDriversLicense ? 'a' : 'no'} driver's licence`);

console.log(anu.getSummary());

//array is a special kind of object. they have methods to manipulate them like push-pop, shift-unshift and more

*/

//Coding Challenge #3
/*
'use strict';

const mark = {
    // firstName: 'Mark',
    fullName: 'Mark Miller',
    massValue: 78,
    heightValue: 1.69,
    calcBMI: function () {
        this.markBMI = this.massValue / this.heightValue ** 2;
        return this.markBMI;
    }
};

const john = {
    // firstName: 'John',
    fullName: 'John Smith',
    massValue: 92,
    heightValue: 1.95,
    calcBMI: function () {
        this.johnBMI = this.massValue / this.heightValue ** 2;
        return this.johnBMI;
    }
};

const compareBMI = function () {
    if (mark.calcBMI() > john.calcBMI()) {
        return `${mark.fullName}'s BMI (${mark.markBMI.toFixed(2)}) is higher than ${john.fullName}'s (${john.johnBMI.toFixed(2)})!`;
    } else {
        // return john.fullName + '\'s BMI (' + john.johnBMI.toFixed(2) + ') is higher than ' + mark.fullName + '\'s (' + mark.markBMI.toFixed(2) + ')!';

        return `${john.fullName}'s BMI (${john.johnBMI.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.markBMI.toFixed(2)})!`;
    }
};

console.log(compareBMI());

console.log(`${mark.calcBMI() > john.calcBMI() ? mark.fullName + '\'s BMI (' + mark.calcBMI().toFixed(2) + ') is higher than ' + john.fullName + '\'s (' + john.calcBMI().toFixed(2) + ')!' : john.fullName + '\'s BMI (' + john.calcBMI().toFixed(2) + ') is higher than ' + mark.fullName + '\'s (' + mark.calcBMI().toFixed(2) + ')'}`);

*/
/*
'use strict';
//if-else is a controlled structure
//other is for loop
// console.log('Lifting weights repetition 1 🏋️‍♂️');
// console.log('Lifting weights repetition 2 🏋️‍♂️');
// console.log('Lifting weights repetition 3 🏋️‍♂️');
// console.log('Lifting weights repetition 4 🏋️‍♂️');
// console.log('Lifting weights repetition 5 🏋️‍♂️');
// console.log('Lifting weights repetition 6 🏋️‍♂️');
// console.log('Lifting weights repetition 7 🏋️‍♂️');
// console.log('Lifting weights repetition 8 🏋️‍♂️');
// console.log('Lifting weights repetition 9 🏋️‍♂️');
// console.log('Lifting weights repetition 10 🏋️‍♂️');

//for loop keeps running while condition is TRUE
for (let rep = 0; rep < 10; rep++) {
    console.log(`Liftting weights repetition ${rep + 1} 🏋️‍♂️`);
}
*/
/*
'use strict';
let anu = [
    'Anu',
    'Kulshrestha',
    2037 - 1984,
    'Web Developer',
    ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha'],
    true
];

const types = [];

for (let i = 0; i < anu.length; i++) {
    //Reading from anu array
    console.log(anu[i], typeof anu[i]);

    //Filling types array
    // types[i] = typeof anu[i];
    // console.log(types[i]);

    types.push(typeof anu[i]);
};
console.log(types);
console.log('--------------------------------------------');
// anu = {
//     firstName: 'Anu',
//     lastName: 'Kulshrestha',
//     age: 2037 - 1984,
//     job: 'Web Developer',
//     friends: ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha'],
//     hasDriversLicense: false
// };

// for (let i = 0; i < anu.friends.length; i++) {
//     console.log(`${anu.firstName} friend name is ${anu.friends[i]}`);
// };

const years = [1982, 1984, 2013, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}

console.log(ages);

//continue and break
console.log('----ONLY STRINGS----');
for (let i = 0; i < anu.length; i++) {
    if (typeof anu[i] !== 'string') {
        continue;
    }
    console.log(anu[i], typeof anu[i]);
}

console.log('----BREAK WITH NUMBER----');
for (let i = 0; i < anu.length; i++) {
    if (typeof anu[i] === 'number') {
        break;
    }
    console.log(anu[i], typeof anu[i]);
}

*/
/*
'use strict';
const anu = [
    'Anu',
    'Kulshrestha',
    2037 - 1984,
    'Web Developer',
    ['Unnati', 'Arun', 'Dolly', 'Fenil', 'Ankit', 'Mansi', 'Guneet', 'Divyaraj', 'Ujaala', 'Tanha'],
    true
];

//loop backwards
for (let i = anu.length - 1; i >= 0; i--) {
    console.log(i, anu[i], typeof anu[i]);
}

//loop inside a loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log('---------Starting exercise ' + exercise);
    for (let rep = 1; rep < 5; rep++) {
        console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
    }
}
*/
/*
'use strict';

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weight repetition ${rep} 🏋️‍♂️`);
// }


//while loop
let i = 1;
while (i <= 10) {
    // console.log('---------Starting exercise ' + i);
    // for (let rep = 1; rep < 5; rep++) {
    console.log(`WHILE: Lifting weight repetition ${i} 🏋️‍♂️`);
    // }
    i++;
}

let dice = Math.trunc(Math.random() * 7) + 1;
console.log(dice);

while (dice !== 6) {
    // console.log(dice);
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...');
    }
}

*/

//Code Challenge #4
/*
'use strict';
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(billValue) {
    if (billValue >= 50 && billValue <= 300)
        return (billValue * 15) / 100;
    else
        return (billValue * 20) / 100;
}

for (let i = 0; i < bills.length; i++) {
    //tips[i] = calcTip(bills[i]);
    tips.push(calcTip(bills[i]));
    // totals[i] = bills[i] + tips[i];
    totals.push(tips[i] + bills[i]);
    console.log(`$${bills[i]} will have ${(bills[i] >= 50 && bills[i] <= 300) ? '15%' : '20%'} tip $${tips[i]} and so the total will be $${totals[i]}`);
    console.log('----------------------------END---------------------------');
}
let sum = 0;
function calcAverage(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(`Average total expenditure is $${calcAverage(totals)}`);
console.log(`Average tip expenditure is $${calcAverage(tips)}`);
console.log(`Average bill expenditure is $${calcAverage(bills)}`);
*/