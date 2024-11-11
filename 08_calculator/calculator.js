const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, current) => {
    total += current;
    return total;
  }, 0);
};

const multiply = function(nums) {
  return nums.reduce((product, current) => {
    product *= current;
    return product;
  }, 1)
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(a) {
	if (a < 0) return -1;
  if (a < 2) return 1;
  let output = 1;
  for (let i = a; i > 1; i--) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
