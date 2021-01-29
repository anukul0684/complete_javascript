// Remember, we're gonna use strict mode in all scripts now!
/*
'use strict';

const x = '23';
if (x === 23) {
  console.log(23);
}
const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(1984));

//  Problem:
//  Array of temperatures of one day, calculate the temperature amplitude.
//  Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//  1) Understanding the problem
//  -What is temperature amplitude? Ans. Difference between highest and lowest temperature
//  -How to compute the max and min temperature?
//  -What is a sensor error? And what to do when it occurs?

//  2) Breaking up into sub-problems
//  -How to ignore errors?
//  -Find max value in temp array
//  -Find min value in temp array
//  -Substract min from max(amplitude) and return it

//function calcTempAmplitude(arr) {}
let errorCount = 0;
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if (typeof curTemp !== 'number') {
    //   continue;
    // }
    if (isNaN(temps[i])) {
      errorCount++;
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(`Maximum temperature is ${max}.`);
  console.log(`Maximum temperature is ${min}.`);
  console.log(`${errorCount} time(s) error occurred.`);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(`Temperature amplitude is ${amplitude}`);

//  Problem 2:
//  Function should now receive 2 arrays of temps
//  1)Understanding the problem
//  -With 2 arrays, should we implement functionality twice? No! just merge two arrays

//  2) Breaking up into sub-problems
//  -Merge 2 arrays
console.log(
  '----------------------------------PROBLEM 1 Ends--------------------------------------'
);
errorCount = 0;
const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if (typeof curTemp !== 'number') {
    //   continue;
    // }
    if (isNaN(temps[i])) {
      errorCount++;
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(`Maximum temperature is ${max}.`);
  console.log(`Maximum temperature is ${min}.`);
  console.log(`${errorCount} time(s) error occurred.`);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(`Temperature amplitude is ${amplitudeNew}`);
*/
/*
'use strict';
//Software Bug: Defect or problem in a computer program. Basically, any unexpected or unintended behaviour of a computer program is a software bug.
//Bugs are completely normal in software development.

//Previous ex. we need a function that reverses whatever we pass into it.`
//reverse([3, 5, 2, 11]);

//The Debugging process
//1. Identify - During development, testing software, user reports during production, context:brow
//2. Find - Developer console (simple code)
//3. Fix - replace wrong solution with new correct solution
//4. Prevent - Searching for the same bug in similar code, writing tests using testing software

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: Number(prompt('Degrees celsius:')), //C) Fix the Bug
    value: 10,
  };
  //B) FIND the Bug
  console.log(measurement);
  //console.log(measurement.value);
  const kelvin = measurement.value + 273; // if the measurement.value is not number then + sign will convert 273 into string.
  return kelvin;
};
//A) Identify the Bug
console.log(measureKelvin());

//using a debugger
let errorCount = 0;
const calcTempAmplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    // if (typeof curTemp !== 'number') {
    //   continue;
    // }
    if (isNaN(temps[i])) {
      errorCount++;
      continue;
    }
    // debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(`Maximum temperature is ${max}.`);
  console.log(`Maximum temperature is ${min}.`);
  console.log(`${errorCount} time(s) error occurred.`);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY
console.log(`Temperature amplitude is ${amplitudeBug}`);
*/

//Code Challenge #1
//  1) Understanding the problem
//  - Array transformed to string, separated by ...
//  - What is the X days? Answer: index+1
//  -

//  2) Breaking up into sub-problems
//  - Transform array into string
//  - Transform each element into string with °C
//  - Strings needs to contain day (index + 1)
//  - Add ... between elements and start and end of string

'use strict';
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `... ${arr[i]}\u00B0C in ${i + 1} days `;
  }
  return str + '...';
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const forecastToday = printForecast(data1);
console.log(forecastToday);

const forecastTomorrow = printForecast(data2);
console.log(forecastTomorrow);
