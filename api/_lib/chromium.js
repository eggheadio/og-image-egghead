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

function getScreenshot(_x2, _x3, _x4, _x5) {
  return _getScreenshot.apply(this, arguments);
}

function _getScreenshot() {
  _getScreenshot = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(url, type, isDev, orientation) {
    var dimensions, page, response, file;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dimensions = orientation === 'landscape' ? {
              width: 1200,
              height: 628
            } : {
              width: 628,
              height: 1200
            };
            _context2.next = 3;
            return getPage(isDev);

          case 3:
            page = _context2.sent;
            _context2.next = 6;
            return page.setViewport(dimensions);

          case 6:
            _context2.next = 8;
            return page["goto"](url);

          case 8:
            response = _context2.sent;
            _context2.t0 = page;
            _context2.next = 12;
            return response.buffer();

          case 12:
            _context2.t1 = _context2.sent.toString('utf8');
            _context2.next = 15;
            return _context2.t0.setContent.call(_context2.t0, _context2.t1);

          case 15:
            _context2.next = 17;
            return page.screenshot({
              type: type
            });

          case 17:
            file = _context2.sent;
            return _context2.abrupt("return", file);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getScreenshot.apply(this, arguments);
}