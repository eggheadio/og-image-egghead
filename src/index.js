
import { parseRequest } from './_lib/parser';
import { getScreenshot } from './_lib/chromium';
import { getHtml } from './_lib/template';
import { writeTempFile, pathToFileURL } from './_lib/file';


const isDev = process.env.NOW_REGION === 'dev1';
const isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

export default async function handler(req, res) {
  try {
    const parsedReq = parseRequest(req);
    const { text, fileType, resourceType } = parsedReq;



    const html = await getHtml(parsedReq);

    if (isHtmlDebug) {
      res.setHeader('Content-Type', 'text/html');
      res.end(html);
      return;
    }

    const filePath = await writeTempFile(text, html);
    const fileUrl = pathToFileURL(filePath);
    const file = await getScreenshot(fileUrl, fileType, isDev);

    res.statusCode = 200;
    res.setHeader('Content-Type', `image/${fileType}`);
    res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
    res.end(file);
  } catch (e) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(e.stack);
  }
}
