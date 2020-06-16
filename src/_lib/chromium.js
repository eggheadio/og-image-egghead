import puppeteer from 'puppeteer-core'
import {getOptions} from './options'
let _page

async function getPage(isDev) {
  if (_page) {
    return _page
  }
  const options = await getOptions(isDev)
  const browser = await puppeteer.launch(options)
  _page = await browser.newPage()
  return _page
}

export async function getScreenshot(url, type, isDev) {
  const page = await getPage(isDev)
  await page.setViewport({width: 1200, height: 628})
  const response = await page.goto(url)
  await page.setContent((await response.buffer()).toString('utf8'))
  const file = await page.screenshot({type})
  return file
}
