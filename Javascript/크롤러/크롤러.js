const axios = require('axios');
const cheerio = require('cheerio');

async function getText () {
  const { data } = await axios.get('https://www.springfieldspringfield.co.uk/view_episode_scripts.php?tv-show=brooklyn-nine-nine&episode=s01e01')
  const str = data.replace(/<br> /g, '\n');
  const $ = cheerio.load(str);
  const text = $("div.scrolling-script-container")
    .text()
    .trim()
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