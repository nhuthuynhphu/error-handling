// Assertion error scenario
function divide(a, b) {
  console.assert(b !== 0, 'Divisor should not be zero.');
  return a / b;
}

// Calling the demo function
try {
  const result = divide(10, 0);
  console.log('Result:', result);
} catch (error) {
  console.error('Assertion Error:', error.message);
  // Handle the error appropriately, e.g., log it or provide user feedback
}
