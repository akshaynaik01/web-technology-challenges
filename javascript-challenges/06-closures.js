// =====================================================
// JavaScript Challenge #6: Closures
// =====================================================
// Description: Master closures, one of JavaScript's most
// powerful features. Closures allow functions to retain
// access to their lexical scope even when executed outside
// that scope.
// =====================================================

// -----------------------------------------------------
// Challenge 1: Create a Counter
// -----------------------------------------------------
// Write a function called createCounter that returns an object
// with three methods: increment(), decrement(), and getValue().
// The counter should maintain its state privately using closures.

function createCounter() {
    // YOUR CODE HERE
    // let count = 0;
    // return { increment, decrement, getValue }
}

// Test: const counter = createCounter();
// counter.increment();
// counter.increment();
// console.log(counter.getValue()); // Should output: 2
// counter.decrement();
// console.log(counter.getValue()); // Should output: 1

// -----------------------------------------------------
// Challenge 2: Create a Memoize Function
// -----------------------------------------------------
// Write a memoize function that caches the results of a
// expensive function. It should take a function as argument
// and return a new function that returns cached results
// for previously computed inputs.

function memoize(fn) {
    // YOUR CODE HERE
    // Use a closure to store the cache
    // const cache = {};
    // return (...args) => { ... }
}

// Test: const slowSquare = memoize((n) => {
//     console.log('Computing...');
//     return n * n;
// });
// slowSquare(4); // Computing... 16
// slowSquare(4); // 16 (no "Computing...")

// -----------------------------------------------------
// Challenge 3: Create a Private Counter with Reset
// -----------------------------------------------------
// Create a function createPrivateCounter that returns an object
// with methods: add(n), subtract(n), getValue(), and reset().
// All state must be completely private (no direct access to
// the counter variable from outside).

function createPrivateCounter(initialValue = 0) {
    // YOUR CODE HERE
}

// -----------------------------------------------------
// Challenge 4: Implement Once
// -----------------------------------------------------
// Write a function "once" that takes a function and returns
// a new function that only executes the original function
// the first time it is called. Subsequent calls return the
// cached result.

function once(fn) {
    // YOUR CODE HERE
}

// Test: const init = once(() => {
//     console.log('Initializing...');
//     return 'Initialized';
// });
// init(); // "Initializing..." -> "Initialized"
// init(); // "Initialized" (no log)
// init(); // "Initialized" (no log)

// -----------------------------------------------------
// Challenge 5: Create a Module Pattern
// -----------------------------------------------------
// Create a BankAccount module using the module pattern.
// It should have private balance, methods: deposit(amount),
// withdraw(amount), getBalance(), and getTransactionHistory().

const BankAccount = (function() {
    // YOUR CODE HERE
    // return { deposit, withdraw, getBalance, getTransactionHistory }
})();

// -----------------------------------------------------
// Challenge 6: Fix the Loop Closure Bug
// -----------------------------------------------------
// The following code has a common closure bug. Fix it so
// that each button alerts its own index value.

function createButtonsWithBug() {
    const container = document.getElementById('button-container');
    for (var i = 0; i < 5; i++) {
        const btn = document.createElement('button');
        btn.textContent = `Button ${i}`;
        btn.onclick = function() {
            alert(i); // Bug: always alerts 5!
        };
        container.appendChild(btn);
    }
}

// FIX: Rewrite using let or an IIFE to fix the closure bug
function createButtonsFixed() {
    const container = document.getElementById('button-container');
    // YOUR CODE HERE
}

// -----------------------------------------------------
// Challenge 7: Create a Currying Function
// -----------------------------------------------------
// Write a function curry that takes a function and returns
// its curried version. A curried function accepts arguments
// one at a time.

function curry(fn) {
    // YOUR CODE HERE
}

// Test: const add = curry((a, b, c) => a + b + c);
// add(1)(2)(3); // 6
// add(1)(2)(3); // 6
