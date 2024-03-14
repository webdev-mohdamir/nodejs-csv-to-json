# CSV to JSON Converter

This Node.js script converts a CSV file into a JSON file using the `csv-parser` and `fs` modules.

## Installation

1. Clone this repository or download the `index.js` file.
2. Ensure you have Node.js installed on your system.
3. Install the required npm packages by running the following command in your terminal:

    ```
    npm install csv-parser
    ```

## Usage

1. Place the CSV file you want to convert in the `sample-data` directory.
2. Open the `index.js` file and modify the `filePath` variable to specify the path to your CSV file.
3. Optionally, update the `fieldsOfFiles` array to match the fields/columns of your CSV file.
4. Run the script by executing the following command in your terminal:

    ```
    node index.js
    ```

5. After the script finishes executing, a JSON file containing the converted data will be created in the `sample-data` directory with the same name as the CSV file, but with a `.json` extension.

## Dependencies

- [csv-parser](https://www.npmjs.com/package/csv-parser): Used to parse CSV files.
- [fs](https://nodejs.org/api/fs.html): Node.js file system module for file operations.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
