"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtml = getHtml;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _axios = _interopRequireDefault(require("axios"));

function App(_ref) {
  var resource = _ref.resource,
      parsedReq = _ref.parsedReq;
  return _react["default"].createElement("div", null, _react["default"].createElement("h1", null, resource.title));
}

function getHtml(_x) {
  return _getHtml.apply(this, arguments);
}

function _getHtml() {
  _getHtml = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parsedReq) {
    var resource;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _axios["default"].get("https://egghead.io/api/v1/".concat(parsedReq.resourceType, "/").concat(parsedReq.text)).then(function (_ref2) {
              var data = _ref2.data;
              return data;
            });

          case 2:
            resource = _context.sent;
            return _context.abrupt("return", (0, _server.renderToStaticMarkup)(_react["default"].createElement(App, {
              resource: resource,
              parsedReq: parsedReq
            })));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getHtml.apply(this, arguments);
}