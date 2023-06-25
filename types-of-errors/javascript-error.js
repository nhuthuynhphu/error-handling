// JavaScript error scenario
function withoutTryCatch() {
  // ReferenceError: nonExistentVariable is not defined
  console.log(nonExistentVariable);
}

// Calling the demo function
// withoutTryCatch();

// JavaScript error handling
function withTryCatch() {
  try {
    // ReferenceError: nonExistentVariable is not defined
    console.log(nonExistentVariable);
  } catch (error) {
    console.error('withTryCatch >>> JavaScript Error:', error.message);
    // Handle the error appropriately, e.g., log it or provide user feedback
  }
}

// Calling the demo function
withTryCatch();
