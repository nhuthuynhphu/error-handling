class MyCustomError extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = 'MyCustomError';
  }
}

// Usage example
function processData(data) {
  if (!data) {
    throw new MyCustomError('Invalid data', 400);
  }
  // Perform data processing
}

processData();
