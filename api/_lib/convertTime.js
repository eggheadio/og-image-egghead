"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = convertTimeTo;

function convertTimeTo(timeInSeconds) {
  var hours = ~~(timeInSeconds / 3600);
  var mins = ~~((timeInSeconds - hours * 3600) / 60); // const secs = (timeInSeconds - hours * 3600 - mins * 60) % 60

  if (hours > 0) {
    return "".concat(hours, "h ").concat(mins, "m");
  } else if (mins > 0) {
    return "".concat(mins, "m");
  }
}