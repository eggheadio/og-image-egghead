import {parse} from 'url'
import compact from 'lodash/compact'

export function parseRequest(req) {
  console.log('parsing request', req.url)

  const {pathname = '/', query = {}} = parse(req.url || '', true)
  const {fontSize, images, widths, heights, theme, md, bgImage} = query
  let [type, slug] = compact(pathname.split('/'))

  if (type && !slug) {
    slug = type
    type = 'series'
  }

  if (Array.isArray(fontSize)) {
    throw new Error('Expected a single fontSize')
  }
  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme')
  }

  const arr = slug.split('.')

  let extension = ''
  let text = ''

  if (arr.length === 0) {
    text = ''
  } else if (arr.length === 1) {
    text = arr[0]
  } else {
    extension = arr.pop()
    text = arr.join('.')
  }
  console.log(text, slug, type, extension)
  const parsedRequest = {
    resourceType: type,
    fileType: extension === 'jpeg' ? extension : 'png',
    text: decodeURIComponent(text),
    theme: theme === 'dark' ? 'dark' : 'light',
    md: md === '1' || md === 'true',
    fontSize: fontSize || '60px',
    bgImage: bgImage,
    images: getArray(images),
    widths: getArray(widths),
    heights: getArray(heights),
  }
  parsedRequest.images = getDefaultImages(
    parsedRequest.images,
    parsedRequest.theme
  )
  return parsedRequest
}

function getArray(stringOrArray) {
  return Array.isArray(stringOrArray) ? stringOrArray : [stringOrArray]
}

function getDefaultImages(images, theme) {
  if (
    images.length > 0 &&
    images[0] &&
    images[0].startsWith(
      'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198085/og-image-assets'
    )
  ) {
    return images
  }
  return theme === 'light'
    ? [
        'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198446/og-image-assets/eggo.svg',
      ]
    : [
        'https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198446/og-image-assets/eggo.svg',
      ]
}
