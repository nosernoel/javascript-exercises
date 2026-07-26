const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let total = 0;
  for (number of arr) {
    total = total + number;
  }

  return total;
};


const multiply = function (arr) {
  let total = 1;
  for (number of arr) {
    total = total * number;
  }

  return total;
};


const power = function (a, b) {
  return a ** b;

};


const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  let total = 1;

  for (let i = number; i > 0; i--) {
    total *= i;
  }

  return total;
};

console.log(factorial(3));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
