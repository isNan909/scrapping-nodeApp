const puppeteer = require('puppeteer');
const SCRAPE_URL = `https://coincodex.com/`;

puppeteer
  .launch()
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto(SCRAPE_URL);
    await page.waitForSelector('body');

    let grabCoins = await page.evaluate(() => {
      let allCoins = document.body.querySelectorAll('.coin-base-data-wrapper');
      scrapeItems = [];
      allCoins.forEach((item) => {
        try {
          coinName = item.querySelector('.full-name').innerText;
        } catch (err) {}
        scrapeItems.push({
          coinName,
        });
      });
      let items = {
        coins: scrapeItems,
      };
      return items;
    });
    console.log(grabCoins);
    await browser.close();
  })
  .catch(function (err) {
    console.error(err);
  });
