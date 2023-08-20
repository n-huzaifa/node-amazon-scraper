README.md file:

````markdown
# Node Amazon Scraper

A simple Node.js script to scrape product data from an Amazon product page and store it in a CSV file.

## Prerequisites

- Node.js (at least version 14)
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the code.
2. Navigate to the project directory in your terminal.

```bash
cd node-amazon-scraper
```
````

3. Install the required dependencies using npm.

```bash
npm install
```

## Usage

1. Open the `index.js` file and set the `ASIN` variable to the desired Amazon ASIN.
2. Run the script using either of the following commands:

- For a one-time run:

```bash
npm start
```

- For development with automatic script restarting (using nodemon):

```bash
npm run dev
```

3. The scraped product data will be stored in the `product_data.csv` file in the project directory.

## Configuration

You can modify the script to extract additional data points from the Amazon product page. To do this:

1. Identify the HTML elements on the Amazon page that correspond to the data you want to extract.
2. Use Puppeteer's `$eval` function to extract the desired data.
3. Update the `productData` object with the new data points.

## Package.json

```json
{
  "name": "node-amazon-scraper",
  "version": "1.0.0",
  "description": "A simple Node.js script to scrape product data from an Amazon product page and store it in a CSV file.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "csv-parser": "^3.0.0",
    "fs": "^0.0.1-security",
    "nodemon": "^3.0.1",
    "puppeteer": "^21.1.0"
  }
}
```

## Disclaimer

This script is provided as-is and may require maintenance or updates in the future as Amazon's website structure changes. Use this script responsibly and respect Amazon's terms of use.

```

Feel free to copy and paste this markdown code into your README.md file and adjust any details or formatting as needed.
```
