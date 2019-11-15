"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenshot = getScreenshot;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _puppeteerCore = _interopRequireDefault(require("puppeteer-core"));

var _options = require("./options");

var _page;

function getPage(isDev) {
  var options, browser;
  return _regenerator["default"].async(function getPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!_page) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", _page);

        case 2:
          _context.next = 4;
          return _regenerator["default"].awrap((0, _options.getOptions)(isDev));

        case 4:
          options = _context.sent;
          _context.next = 7;
          return _regenerator["default"].awrap(_puppeteerCore["default"].launch(options));

        case 7:
          browser = _context.sent;
          _context.next = 10;
          return _regenerator["default"].awrap(browser.newPage());

        case 10:
          _page = _context.sent;
          return _context.abrupt("return", _page);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getScreenshot(url, type, isDev) {
  var page, file;
  return _regenerator["default"].async(function getScreenshot$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _regenerator["default"].awrap(getPage(isDev));

        case 2:
          page = _context2.sent;
          _context2.next = 5;
          return _regenerator["default"].awrap(page.setViewport({
            width: 1200,
            height: 628
          }));

        case 5:
          _context2.next = 7;
          return _regenerator["default"].awrap(page["goto"](url));

        case 7:
          _context2.next = 9;
          return _regenerator["default"].awrap(page.screenshot({
            type: type
          }));

        case 9:
          file = _context2.sent;
          return _context2.abrupt("return", file);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  });
}