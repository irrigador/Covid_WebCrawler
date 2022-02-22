const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();
  await page.goto('https://img-page.vercel.app/');

 const imgList = await page.evaluate(() => {

    const nodeList = document.querySelectorAll('article img')
    const imgArray = [...nodeList]
    const list = imgArray.map( ({src}) => ({
      src
    }))

    
  return list
  });
 
 fs.writeFile('twitter.json', JSON.stringify (imgList, null, 2), err => {
  if(err) throw new Error('Algo deu errado')

  console.log('Deu certo')
})

await browser.close();
})();