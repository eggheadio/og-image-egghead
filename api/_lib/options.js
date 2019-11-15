"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = getOptions;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _chromeAwsLambda = _interopRequireDefault(require("chrome-aws-lambda"));

var exePath = process.platform === 'win32' ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function getOptions(isDev) {
  var options;
  return _regenerator["default"].async(function getOptions$(_context) {
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
          return _regenerator["default"].awrap(_chromeAwsLambda["default"].executablePath);

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
  });
}