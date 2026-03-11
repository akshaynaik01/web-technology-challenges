function mapArray(array, callback) {
  return array.map(callback);
}

function filterArray(array, callback) {
  return array.filter(callback);
}

function reduceArray(array, callback, initialValue) {
  return array.reduce(callback, initialValue);
}

function composeFunction(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function memoize(func) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
}

function curryFunction(func) {
  const arity = func.length;
  return function $curry(...args) {
    if (args.length < arity) {
      return $curry.bind(null, ...args);
    }
    return func.call(null, ...args);
  };
}

const multiply = (a, b) => a * b;
const add = (a, b) => a + b;
const square = (n) => n * n;
const double = (n) => n * 2;

const numbers = [1, 2, 3, 4, 5];

const doubled = mapArray(numbers, double);
const evens = filterArray(numbers, (n) => n % 2 === 0);
const sum = reduceArray(numbers, add, 0);
const squareThenDouble = composeFunction(double, square);
const memoizedMultiply = memoize(multiply);
const curriedAdd = curryFunction(add);

console.log('Doubled:', doubled);
console.log('Evens:', evens);
console.log('Sum:', sum);
console.log('Square then double 5:', squareThenDouble(5));
console.log('Memoized multiply 3 * 4:', memoizedMultiply(3, 4));
console.log('Curried add 5:', curriedAdd(5));
console.log('Curried add 5 + 3:', curriedAdd(5)(3));
