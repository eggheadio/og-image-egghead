"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _parser = require("./_lib/parser");

var _chromium = require("./_lib/chromium");

var _template = require("./_lib/template");

var _file = require("./_lib/file");

var isDev = process.env.NOW_REGION === 'dev1';
var isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

function handler(req, res) {
  var parsedReq, text, fileType, resourceType, html, filePath, fileUrl, file;
  return _regenerator["default"].async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          parsedReq = (0, _parser.parseRequest)(req);
          text = parsedReq.text, fileType = parsedReq.fileType, resourceType = parsedReq.resourceType;
          _context.next = 5;
          return _regenerator["default"].awrap((0, _template.getHtml)(parsedReq));

        case 5:
          html = _context.sent;

          if (!isHtmlDebug) {
            _context.next = 10;
            break;
          }

          res.setHeader('Content-Type', 'text/html');
          res.end(html);
          return _context.abrupt("return");

        case 10:
          _context.next = 12;
          return _regenerator["default"].awrap((0, _file.writeTempFile)(text, html));

        case 12:
          filePath = _context.sent;
          fileUrl = (0, _file.pathToFileURL)(filePath);
          _context.next = 16;
          return _regenerator["default"].awrap((0, _chromium.getScreenshot)(fileUrl, fileType, isDev));

        case 16:
          file = _context.sent;
          res.statusCode = 200;
          res.setHeader('Content-Type', "image/".concat(fileType));
          res.setHeader('Cache-Control', "public, immutable, no-transform, s-maxage=31536000, max-age=31536000");
          res.end(file);
          _context.next = 28;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html');
          res.end(_context.t0.stack);

        case 28:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 23]]);
}