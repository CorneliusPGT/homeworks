const plus = function (a, b) {
  return a + b;
};

const minus = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operations = {
  plus,
  minus,
  multiply,
  divide,
};

const calculate = function (a, b, operation) {
  return operation(a, b);
};

