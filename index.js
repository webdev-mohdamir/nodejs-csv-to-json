const csv = require('csv-parser');
const fs = require('fs');

// Path to the CSV file
const filePath = 'sample-data/data-1.csv';

// Specify the fields/columns of the CSV file
const fieldsOfFiles = ['Login email', 'Identifier', 'One-time password', 'Recovery code', 'First name', 'Last name', 'Department', 'Location'];

// Array to store parsed CSV data
const result = [];

// Create a readable stream from the CSV file and pipe it through csv-parser
const fileStream = fs.createReadStream(filePath).pipe(csv(fieldsOfFiles));

// Event listener for each row of data parsed from the CSV
fileStream.on('data', (data) => {
  // Push each row of data to the result array
  result.push(data);
});

// Event listener for any error that occurs during parsing
fileStream.on('error', (err) => {
  console.log(err);
});

// Event listener for the end of the CSV parsing process
fileStream.on('end', () => {
  try {
    // Convert the result array to JSON
    const jsonData = JSON.stringify(result);

    // Write the JSON data to a new file
    fs.writeFileSync('sample-data/data-1.json', jsonData, 'utf-8');

    // Log a message indicating successful completion
    console.log('Process is completed.');
  } catch (error) {
    // Log any errors that occur during file writing
    console.log(error);
  }
});
