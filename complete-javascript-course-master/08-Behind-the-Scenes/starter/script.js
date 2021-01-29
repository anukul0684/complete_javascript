/*'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  //   console.log(lastName);

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      //Creating new variable with same name as out scope's variable
      const firstName = 'Ankit';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //Reassigning outer scope's variable
      output = 'NEW OUTPUT';
    }
    // console.log(str); //block-scoped
    console.log(millenial); //function scoped
    // console.log(add(2, 3)); //block-scoped in strict mode
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Anu';
calcAge(1984);
// console.log(age);
// printAge();
*/
/*
'use strict';

//Variables Hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Anu';
let job = 'teacher';
const year = 1991;

//Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/
/*
'use strict';
console.log(this);
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //own this keyword of the function
};
calcAge(1984);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); //no this keyword in arrow function so it is of its parent, which is window
};
calcAgeArrow(1984);

const anu = {
  year: 1984,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

anu.calcAge();

const anish = {
  year: 2013,
};

anish.calcAge = anu.calcAge;

anish.calcAge();

const f = anu.calcAge;
f();
*/
/*
'use strict';
// var firstName = 'Ankit';
const anu = {
  firstName: 'Anu',
  year: 1984,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution #1
    // const self = this; //self or that
    // const isMillenial = function () {
    //   //   console.log(this);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution #2 - use of arrow function for not having this in it
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // never ever use an arrow function as method in an object
  },
};

anu.greet();
anu.calcAge();

//onsole.log(this.firstName);
const addExpr = function (a, b) {
  console.log(arguments); //arrow function does not get this arguments
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 6, 8);
console.log(addExpr(5));
const addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(addArrow(3));
*/
/*
'use strict';

//var firstName = 'Matilda';

const anu = {
  year: 1984,
  firstName: 'Anu',
  calcAge: function () {
    //console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   // inside a regular function called the 'this' keyword is undefined. so we use 'self' or 'that'
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2
    const isMillenial = () => {
      //arrow function looks for this of parent block hence 'this' works in here
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
anu.greet();
anu.calcAge();
//console.log(this.firstName);

//arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);
var addArrow = (a, b) => {
  console.log(arguments); //Uncaught ReferenceError: arguments is not defined inside Arrow functions.
  return a + b;
};
addArrow(2, 3);
*/
/*
'use strict';
//Primitives vs. Objects(Primitives vs. Reference types)

//Primitive data types - values update line wise
let age = 30;
let oldAge = age;
age = 31;
console.log(age, oldAge);

//Object - values update globally
const me = {
  name: 'Anu',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

//Primitive types are stored in Execution context - call stack, where there execution context runs.
//Objects are stored in Heap.
/*
'use strict';
//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before Marriage:', jessica);
console.log('After Marriage:', marriedJessica);

//marriedJessica = {};

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bobby'],
};

const jessicaCopy = Object.assign({}, jessica2); //shallow. does not goes to the object in the object
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
*/
