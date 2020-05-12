"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenshot = getScreenshot;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteerCore = _interopRequireDefault(require("puppeteer-core"));

var _options = require("./options");

var _page;

function getPage(_x) {
  return _getPage.apply(this, arguments);
}

function _getPage() {
  _getPage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(isDev) {
    var options, browser;
    return _regenerator["default"].wrap(function _callee$(_context) {
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
            return (0, _options.getOptions)(isDev);

          case 4:
            options = _context.sent;
            _context.next = 7;
            return _puppeteerCore["default"].launch(options);

          case 7:
            browser = _context.sent;
            _context.next = 10;
            return browser.newPage();

          case 10:
            _page = _context.sent;
            return _context.abrupt("return", _page);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getPage.apply(this, arguments);
}

function getScreenshot(_x2, _x3, _x4) {
  return _getScreenshot.apply(this, arguments);
}

function _getScreenshot() {
  _getScreenshot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, type, isDev) {
    var page, file;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return getPage(isDev);

          case 2:
            page = _context2.sent;
            _context2.next = 5;
            return page.setViewport({
              width: 1200,
              height: 628
            });

          case 5:
            _context2.next = 7;
            return page["goto"](url);

          case 7:
            _context2.next = 9;
            return page.screenshot({
              type: type
            });

          case 9:
            file = _context2.sent;
            return _context2.abrupt("return", file);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getScreenshot.apply(this, arguments);
}