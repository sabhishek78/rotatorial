// Normally, the factorial of a positive integer n is the product of all positive integers less than or equal to n. For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.

// We instead make a rotating factorial: using the integers in decreasing order, we swap out the multiply operations for a fixed rotation of operations: multiply (*), divide (/), add (+) and subtract (-) in this order.

// For example, rotatorial(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1

// The division that we use is floor division such that 10 * 9 / 8 equals 11. This guarantees the result is an integer.

// Implement the rotatorial function as defined above: given an integer N, it returns the rotating factorial of N.

// Note
// The operations are still applied using the usual order of operations of arithmetic. So first multiplication, then division, and then addition and subtraction.

// Examples
// rotatorial(4); // should return 7 because  4 * 3 / 2 + 1 = 7
// rotatorial(10); // should return 12 because 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1 = 12

function rotatorial(number) {
  let numberArray = [];
  for (let i = number; i >= 1; i--) {
    numberArray.push(i);
  }
  let remainingDigits = 4 - (numberArray.length % 4);
  if (remainingDigits === 1) {
    numberArray.push(0);
  }
  if (remainingDigits === 2) {
    numberArray.push(1, 0);
  }
  if (remainingDigits === 3) {
    numberArray.push(1, 1, 0);
  }
  let result1 = [];
  let result2 = [];
  for (let i = 0; i < numberArray.length; i = i + 4) {
    let temp = Math.floor(
      (numberArray[i] * numberArray[i + 1]) / numberArray[i + 2]
    );
    result1.push(temp);
    result2.push(numberArray[i + 3]);
  }
  return result1.reduce((a, b) => a - b) + result2.reduce((a, b) => a + b);
}
console.log(rotatorial(1));
console.log(rotatorial(2));
console.log(rotatorial(3));
console.log(rotatorial(4));
console.log(rotatorial(5));
console.log(rotatorial(6));
console.log(rotatorial(7));
console.log(rotatorial(8));
console.log(rotatorial(9));
console.log(rotatorial(10));