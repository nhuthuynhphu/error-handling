// function multiply(a, b) {
//   return a * b;
// }

function calculateSquare(number) {
  const squared = multiply(number, number);
  return squared;
}

function printSquareOfNumber(number) {
  const result = calculateSquare(number);
  console.log('Square of', number, 'is', result);
}

// Calling the demo function
printSquareOfNumber(5);
