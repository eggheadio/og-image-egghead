"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.writeTempFile = writeTempFile;
exports.pathToFileURL = pathToFileURL;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _fs = require("fs");

var _path = require("path");

var _crypto = require("crypto");

var _util = require("util");

var _os = require("os");

var writeFileAsync = (0, _util.promisify)(_fs.writeFile);

function writeTempFile(name, contents) {
  var fileName, filePath;
  return _regenerator["default"].async(function writeTempFile$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fileName = (0, _crypto.createHash)('md5').update(name).digest('hex') + '.html';
          filePath = (0, _path.join)((0, _os.tmpdir)(), fileName);
          _context.next = 4;
          return _regenerator["default"].awrap(writeFileAsync(filePath, contents));

        case 4:
          return _context.abrupt("return", filePath);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function pathToFileURL(path) {
  var fileUrl = 'file://' + path;
  return fileUrl;
}