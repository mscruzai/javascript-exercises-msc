const add = (a,b) => (a + b);

const subtract = (a, b) => (a-b);

const sum = (arr) => arr.reduce((total, currentItem) => total + currentItem, 0);

const multiply = (arr) => arr.reduce((product, currentItem) => product*currentItem, 1);

const power =  (a, b) => Math.pow(a,b);

const factorial = (n) =>
  (n > 1) 
    ? Array.from({ length: n }, (_, i) => i + 1).reduce((acc, val) => acc * val, 1)  
    : n < 0
      ? undefined
      : 1;
      
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
