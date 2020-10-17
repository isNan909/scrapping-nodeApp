const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get('https://coincodex.com/')
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const scrapedata = $('.coin-base-data-wrapper > .full-name').text();
    console.log(scrapedata);
  })
  .catch((error) => {
    console.log(error);
  });
