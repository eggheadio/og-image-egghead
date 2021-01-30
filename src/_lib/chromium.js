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

export async function getScreenshot(url, type, isDev, orientation) {
  const dimensions = orientation === 'landscape' ? {width: 1200, height: 628} : {width: 628, height: 1200}
  const page = await getPage(isDev)
  await page.setViewport(dimensions)
  const response = await page.goto(url)
  await page.setContent((await response.buffer()).toString('utf8'))
  const file = await page.screenshot({type})
  return file
}
