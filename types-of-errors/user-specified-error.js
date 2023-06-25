// User-specified error scenario
function calculateSquareRoot(number) {
  if (number < 0) {
    throw new Error('Negative numbers are not allowed.');
  }
  return Math.sqrt(number);
}

// Calling the demo function
try {
  const result = calculateSquareRoot(-9);
  console.log('Square root:', result);
} catch (error) {
  console.error('User-specified Error:', error.message);
  // Handle the error appropriately, e.g., log it or provide user feedback
}
