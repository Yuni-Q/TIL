const axios = require('axios');
const cheerio = require('cheerio');

async function getText () {
  const html = await axios.get('https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=brooklyn-nine-nine&episode=s01e01')
  const $ = cheerio.load(html.data);
  const text = $("#content_container > div.main-content > div.main-content-left > div.episode_script div.scrolling-script-container")
    .text()
  console.log(text);
}

getText();


// axios.get('https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=brooklyn-nine-nine&episode=s01e01')
//   .then((html) => {
//     return cheerio.load(html.data)
//   })
//   .then(($) => {
//     return $("#content_container > div.main-content > div.main-content-left > div.episode_script div.scrolling-script-container").text()
//   })
//   .then((text) => {
//     console.log(text);
//   })