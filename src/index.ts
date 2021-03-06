const Apify = require('apify')

Apify.main(async () => {
  const requestList = await Apify.openRequestList('urls', [{ url: 'https://news.google.com/' }])
  const handlePageFunction = async ({ page, _ }) => {
    await page.pdf({ path: 'example.pdf' })
  }

  const crawler = new Apify.PuppeteerCrawler({
    requestList,
    handlePageFunction,
    launchContext: {
      launchOptions: {
        headless: true
      }
    }
  })

  await crawler.run()
})
