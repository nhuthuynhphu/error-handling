// Simulating an uncaught exception
function throwError() {
  throw new Error('Oops! Something went wrong.');
}

// Uncaught exception scenario
function uncaughtExceptionDemo() {
  console.log('Executing some asynchronous task...');
  setTimeout(() => {
    throwError(); // Simulating an error
    console.log('This line will not be reached.');
  }, 2000);
}

// Handling uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error.message);
  // Perform any necessary cleanup or logging tasks here
  process.exit(1); // Terminate the process with a non-zero exit code
});

// Calling the demo function
uncaughtExceptionDemo();
