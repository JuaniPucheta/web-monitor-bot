const puppeteer = require('puppeteer');
const path = require('path');

async function checkForChanges(url, lastContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Guardar screenshot
  const screenshotPath = path.join(__dirname, 'screenshots', `screenshot-${Date.now()}.png`);
  await page.screenshot({ path: screenshotPath });

  // Extraer el texto de la página
  const content = await page.evaluate(() => document.body.innerText);

  await browser.close();

  return {
    screenshotPath,
    hasChanged: content !== lastContent,
    content
  };
}

module.exports = checkForChanges;
