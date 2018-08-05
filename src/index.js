/* Homework 1 - Functions */

/*
 Task 1:

 1.1: Add a parameter with any name to the function
 1.2: The function must return an argument passed to it as a parameter

 Пример:
   returnFirstArgument(10) returns 10
   returnFirstArgument('hi') returns `hi`

The function must return unchanged what is input to it
 */

function returnFirstArgument(arg1) {
    return (arg1);
}

/*
 Task 2:

 2.1: The function must return the sum of the arguments passed

 Example:
   sumWithDefaults(10, 20) returns 30
   sumWithDefaults(2, 4) returns 6

 2.1 *: The default value for the second argument must be 100

 Example:
   sumWithDefaults(10) returns 110
 */
function sumWithDefaults(a, b = 100) {
    return a + b
}
sumWithDefaults(10);
/*
 Task 3:

 The function must perform another function and return the result

 Example:
   returnFnResult(() => 'hi') returns 'hi'
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Task 4:

 The function must take a number and return a new function (F)
 When the function F is called, the previously transmitted number must be incremented by one and returned from F

 Example:
   var f = returnCounter(10);

   console.log(f()); // output 11
   console.log(f()); // output 12
   console.log(f()); // output 13
 */

function returnCounter(n = 0) {
    return function fn() {
        return ++n;
    }

}
returnCounter();

/*
 Task 5 *:

 The function must return all arguments passed to it as an array
 The number of arguments passed is not known in advance

 Example:
   returnArgumentsArray(1, 2, 3) returns [1, 2, 3]
 */
function returnArgumentsArray() {
    return [...arguments]
}
/*
 Task 6 *:

 The function must take another function (F) and a certain number of additional arguments
 The function must bind the passed arguments to the functions F and return the resulting function

 Example:
   function sum(a, b) {
     return a + b;
   }

   var newSum = bindFunction(sum, 2, 4);

   console.log(newSum()) output 6
 */

function bindFunction(fn, ...args) {
    return function() {
        return fn.apply(fn, args);
    }
}

export {
    returnFirstArgument,
    sumWithDefaults,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
