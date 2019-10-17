"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseRequest = parseRequest;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _url = require("url");

var _compact3 = _interopRequireDefault(require("lodash/compact"));

function parseRequest(req) {
  console.log('parsing request', req.url);

  var _parse = (0, _url.parse)(req.url || '', true),
      _parse$pathname = _parse.pathname,
      pathname = _parse$pathname === void 0 ? '/' : _parse$pathname,
      _parse$query = _parse.query,
      query = _parse$query === void 0 ? {} : _parse$query;

  var fontSize = query.fontSize,
      images = query.images,
      widths = query.widths,
      heights = query.heights,
      theme = query.theme,
      md = query.md,
      bgImage = query.bgImage;

  var _compact = (0, _compact3["default"])(pathname.split('/')),
      _compact2 = (0, _slicedToArray2["default"])(_compact, 2),
      type = _compact2[0],
      slug = _compact2[1];

  if (type && !slug) {
    slug = type;
    type = 'series';
  }

  if (Array.isArray(fontSize)) {
    throw new Error('Expected a single fontSize');
  }

  if (Array.isArray(theme)) {
    throw new Error('Expected a single theme');
  }

  var arr = slug.split('.');
  var extension = '';
  var text = '';

  if (arr.length === 0) {
    text = '';
  } else if (arr.length === 1) {
    text = arr[0];
  } else {
    extension = arr.pop();
    text = arr.join('.');
  }

  console.log(text, slug, type, extension);
  var parsedRequest = {
    resourceType: type,
    fileType: extension === 'jpeg' ? extension : 'png',
    text: decodeURIComponent(text),
    theme: theme === 'dark' ? 'dark' : 'light',
    md: md === '1' || md === 'true',
    fontSize: fontSize || '60px',
    bgImage: bgImage,
    images: getArray(images),
    widths: getArray(widths),
    heights: getArray(heights)
  };
  parsedRequest.images = getDefaultImages(parsedRequest.images, parsedRequest.theme);
  return parsedRequest;
}

function getArray(stringOrArray) {
  return Array.isArray(stringOrArray) ? stringOrArray : [stringOrArray];
}

function getDefaultImages(images, theme) {
  if (images.length > 0 && images[0] && images[0].startsWith('https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198085/og-image-assets')) {
    return images;
  }

  return theme === 'light' ? ['https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198446/og-image-assets/eggo.svg'] : ['https://res.cloudinary.com/dg3gyk0gu/image/upload/v1567198446/og-image-assets/eggo.svg'];
}