// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

const arrayOfMultiples = function(num, length) {
  let result = [];
  for(let i = 1; i <= length; i++) {
    result.push(num * i)
  }
  return result;
};

console.log(arrayOfMultiples(12, 10))
console.log(arrayOfMultiples(17, 6))
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]