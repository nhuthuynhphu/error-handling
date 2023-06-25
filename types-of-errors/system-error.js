const fs = require('fs');

// System error scenario
function readFile() {
  fs.readFile('nonExistentFile.txt', 'utf8', (error, data) => {
    if (error) {
      console.error('System Error:', error.message);
      // Handle the error appropriately, e.g., log it or provide user feedback
      return;
    }
    console.log('File contents:', data);
  });
}

// Calling the demo function
readFile();
