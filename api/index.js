"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _parser = require("./_lib/parser");

var _chromium = require("./_lib/chromium");

var _template = require("./_lib/template");

var _file = require("./_lib/file");

var isDev = process.env.NOW_REGION === 'dev1';
var isHtmlDebug = process.env.OG_HTML_DEBUG === '1';

function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}

function _handler() {
  _handler = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var parsedReq, text, fileType, resourceType, html, filePath, fileUrl, file;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            parsedReq = (0, _parser.parseRequest)(req);
            text = parsedReq.text, fileType = parsedReq.fileType, resourceType = parsedReq.resourceType;
            _context.next = 5;
            return (0, _template.getHtml)(parsedReq);

          case 5:
            html = _context.sent;

            if (!isHtmlDebug) {
              _context.next = 11;
              break;
            }

            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Accept-Charset', 'utf-8');
            res.end(html);
            return _context.abrupt("return");

          case 11:
            _context.next = 13;
            return (0, _file.writeTempFile)(text, html);

          case 13:
            filePath = _context.sent;
            fileUrl = (0, _file.pathToFileURL)(filePath);
            _context.next = 17;
            return (0, _chromium.getScreenshot)(fileUrl, fileType, isDev);

          case 17:
            file = _context.sent;
            res.statusCode = 200;
            res.setHeader('Content-Type', "image/".concat(fileType));
            res.setHeader('Cache-Control', "public, immutable, no-transform, s-maxage=31536000, max-age=31536000");
            res.end(file);
            _context.next = 30;
            break;

          case 24:
            _context.prev = 24;
            _context.t0 = _context["catch"](0);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.setHeader('Accept-Charset', 'utf-8');
            res.end(_context.t0.stack);

          case 30:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 24]]);
  }));
  return _handler.apply(this, arguments);
}