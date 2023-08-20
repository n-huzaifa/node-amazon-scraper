const puppeteer = require('puppeteer')
const fs = require('fs')

const ASIN = 'B000MQIU4A'
const outputCSVFile = 'product_data.csv'

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // Navigate to the Amazon product page using the ASIN
  await page.goto(`https://www.amazon.de/dp/${ASIN}`)

  // Extract product data
  const productTitle = await page.$eval('#productTitle', (title) => title.textContent.trim())
  const priceWhole = await page.$eval('.a-price-whole', (whole) => whole.textContent.trim())
  const priceFraction = await page.$eval('.a-price-fraction', (fraction) => fraction.textContent.trim())
  const bestSellerRank = await page.$eval('#productDetails_detailBullets_sections1', (fraction) =>
    fraction.textContent.trim()
  )

  const pattern = /Amazon Bestseller-Rang\s+Nr\.\s*([\d,]+)\s+in\s+Küche, Haushalt & Wohnen/
  const match = bestSellerRank.match(pattern)

  const bestSellersRank = match[1]
  const productPrice = `$${priceWhole}.${priceFraction}`
  // Add more data points you want to scrape

  // Store data in an object
  const productData = {
    ASIN,
    title: productTitle,
    price: productPrice,
    bestSellersRank: bestSellersRank,
    // Add more data points
  }

  // Write the data to a CSV file
  if (!fs.existsSync(outputCSVFile)) {
    fs.writeFileSync(outputCSVFile, 'ASIN,Title,Price,BestSellerRank\n') // Add headers
  }

  const csvData = `${productData.ASIN},"${productData.title}","${productData.price}","${productData.bestSellersRank}",\n`
  fs.appendFileSync(outputCSVFile, csvData)

  await browser.close()

  console.log('Scraping and CSV generation completed.')
})()
