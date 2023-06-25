// Async error handling using promises
function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Oops! Something went wrong in the async operation.'));
    }, 2000);
  });
}

// Calling the demo function
simulateAsyncOperation()
  .then((result) => {
    console.log('Async operation result:', result);
  })
  .catch((error) => {
    console.error('simulateAsyncOperation >>> Async Error:', error.message);
    // Handle the error appropriately, e.g., log it or provide user feedback
  });

// Async error handling using async/await
async function performAsyncOperation() {
  try {
    const result = await simulateAsyncOperation();
    console.log('Async operation result:', result);
  } catch (error) {
    console.error('performAsyncOperation >>> Async Error:', error.message);
    // Handle the error appropriately, e.g., log it or provide user feedback
  }
}

// Calling the demo function
performAsyncOperation();
