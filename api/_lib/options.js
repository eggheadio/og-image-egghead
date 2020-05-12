"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = getOptions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _chromeAwsLambda = _interopRequireDefault(require("chrome-aws-lambda"));

var exePath = process.platform === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function getOptions(_x) {
  return _getOptions.apply(this, arguments);
}

function _getOptions() {
  _getOptions = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(isDev) {
    var options;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isDev) {
              _context.next = 4;
              break;
            }

            options = {
              args: [],
              executablePath: exePath,
              headless: true
            };
            _context.next = 10;
            break;

          case 4:
            _context.t0 = _chromeAwsLambda["default"].args;
            _context.next = 7;
            return _chromeAwsLambda["default"].executablePath;

          case 7:
            _context.t1 = _context.sent;
            _context.t2 = _chromeAwsLambda["default"].headless;
            options = {
              args: _context.t0,
              executablePath: _context.t1,
              headless: _context.t2
            };

          case 10:
            return _context.abrupt("return", options);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getOptions.apply(this, arguments);
}