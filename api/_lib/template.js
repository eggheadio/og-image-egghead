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

var _core = require("@emotion/core");

import { jsx as ___EmotionJSX } from "@emotion/core";

/** @jsx jsx */
var reset =
/*#__PURE__*/
process.env.NODE_ENV === "production" ? {
  name: "1qnv2dq-reset",
  styles: "*,*:before,*:after{box-sizing:border-box;}html,body{font-style:normal;padding:0;margin:0;color:#21262f;}html{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;}body{background-color:white;}h1,h2,h3,h4,h5,h6{margin:0;line-height:1.1;}h2{font-size:4rem;}h3{font-size:2rem;}label:reset;"
} : {
  name: "1qnv2dq-reset",
  styles: "*,*:before,*:after{box-sizing:border-box;}html,body{font-style:normal;padding:0;margin:0;color:#21262f;}html{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;}body{background-color:white;}h1,h2,h3,h4,h5,h6{margin:0;line-height:1.1;}h2{font-size:4rem;}h3{font-size:2rem;}label:reset;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQiIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzIxMjYyZjtcbiAgfVxuICBodG1sIHtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYFxuXG5mdW5jdGlvbiBBcHAoeyByZXNvdXJjZSwgcGFyc2VkUmVxIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPi0tLS0te3BhcnNlZFJlcS50ZXh0fTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKFwiUEFSU0VEIFJFUVVFU1RcIiwgcGFyc2VkUmVxKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtyZXNldH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWZcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI4NnB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjY1cHhcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwXG5cbiAgY29uc29sZS5sb2cocGFyc2VkUmVxKVxuICBzd2l0Y2ggKHBhcnNlZFJlcS5yZXNvdXJjZVR5cGUpIHtcbiAgICBjYXNlIFwiaW5zdHJ1Y3Rvci1ndWlkZVwiOlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoPEluc3RydWN0b3JHdWlkZSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJzZXJpZXNcIjpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgICAgICA8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+XG4gICAgICApXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgPEFwcCByZXNvdXJjZT17cmVzb3VyY2V9IHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPlxuICAgICAgKVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

function App(_ref) {
  var resource = _ref.resource,
      parsedReq = _ref.parsedReq;
  return (0, _core.jsx)("div", null, (0, _core.jsx)("h1", null, "-----", parsedReq.text));
}

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "x297lt-InstructorGuide",
  styles: "display:flex;flex-direction:column;font-family:Helvetica, Arial, Sans-Serif;padding:30px;height:100%;background-size:contain;label:InstructorGuide;"
} : {
  name: "x297lt-InstructorGuide",
  styles: "display:flex;flex-direction:column;font-family:Helvetica, Arial, Sans-Serif;padding:30px;height:100%;background-size:contain;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEUSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzIxMjYyZjtcbiAgfVxuICBodG1sIHtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYFxuXG5mdW5jdGlvbiBBcHAoeyByZXNvdXJjZSwgcGFyc2VkUmVxIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPi0tLS0te3BhcnNlZFJlcS50ZXh0fTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKFwiUEFSU0VEIFJFUVVFU1RcIiwgcGFyc2VkUmVxKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtyZXNldH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWZcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI4NnB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjY1cHhcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwXG5cbiAgY29uc29sZS5sb2cocGFyc2VkUmVxKVxuICBzd2l0Y2ggKHBhcnNlZFJlcS5yZXNvdXJjZVR5cGUpIHtcbiAgICBjYXNlIFwiaW5zdHJ1Y3Rvci1ndWlkZVwiOlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoPEluc3RydWN0b3JHdWlkZSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJzZXJpZXNcIjpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgICAgICA8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+XG4gICAgICApXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgPEFwcCByZXNvdXJjZT17cmVzb3VyY2V9IHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPlxuICAgICAgKVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "1swz0mz-InstructorGuide",
  styles: "display:flex;align-items:center;justify-content:center;height:100%;font-size:86px;padding-bottom:65px;label:InstructorGuide;"
} : {
  name: "1swz0mz-InstructorGuide",
  styles: "display:flex;align-items:center;justify-content:center;height:100%;font-size:86px;padding-bottom:65px;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9FVSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyByZW5kZXJUb1N0YXRpY01hcmt1cCB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCJcblxuY29uc3QgcmVzZXQgPSBjc3NgXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIGh0bWwsXG4gIGJvZHkge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzIxMjYyZjtcbiAgfVxuICBodG1sIHtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICB9XG4gIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4gIGgxLFxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbiAgaDMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuYFxuXG5mdW5jdGlvbiBBcHAoeyByZXNvdXJjZSwgcGFyc2VkUmVxIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPi0tLS0te3BhcnNlZFJlcS50ZXh0fTwvaDE+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKFwiUEFSU0VEIFJFUVVFU1RcIiwgcGFyc2VkUmVxKVxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxHbG9iYWwgc3R5bGVzPXtyZXNldH0gLz5cbiAgICAgIDxkaXZcbiAgICAgICAgY3NzPXt7XG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkhlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWZcIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjMwcHhcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI4NnB4XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjY1cHhcIlxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwXG5cbiAgY29uc29sZS5sb2cocGFyc2VkUmVxKVxuICBzd2l0Y2ggKHBhcnNlZFJlcS5yZXNvdXJjZVR5cGUpIHtcbiAgICBjYXNlIFwiaW5zdHJ1Y3Rvci1ndWlkZVwiOlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoPEluc3RydWN0b3JHdWlkZSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGNhc2UgXCJzZXJpZXNcIjpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChcbiAgICAgICAgICBgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YFxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKFxuICAgICAgICA8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+XG4gICAgICApXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cChcbiAgICAgICAgPEFwcCByZXNvdXJjZT17cmVzb3VyY2V9IHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPlxuICAgICAgKVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

function InstructorGuide(_ref2) {
  var parsedReq = _ref2.parsedReq;
  var text = parsedReq.text,
      theme = parsedReq.theme,
      md = parsedReq.md,
      fontSize = parsedReq.fontSize,
      images = parsedReq.images,
      widths = parsedReq.widths,
      heights = parsedReq.heights;
  console.log("PARSED REQUEST", parsedReq);
  return (0, _core.jsx)(_react["default"].Fragment, null, (0, _core.jsx)(_core.Global, {
    styles: reset
  }), (0, _core.jsx)("div", {
    css: _ref3
  }, (0, _core.jsx)("div", {
    css: _ref4
  }, text)));
}

function getHtml(_x) {
  return _getHtml.apply(this, arguments);
}

function _getHtml() {
  _getHtml = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(parsedReq) {
    var markup, resource;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(parsedReq);
            _context.t0 = parsedReq.resourceType;
            _context.next = _context.t0 === "instructor-guide" ? 4 : _context.t0 === "series" ? 6 : 11;
            break;

          case 4:
            markup = (0, _server.renderToStaticMarkup)((0, _core.jsx)(InstructorGuide, {
              parsedReq: parsedReq
            }));
            return _context.abrupt("break", 12);

          case 6:
            _context.next = 8;
            return _axios["default"].get("https://egghead.io/api/v1/".concat(parsedReq.resourceType, "/").concat(parsedReq.text)).then(function (_ref5) {
              var data = _ref5.data;
              return data;
            });

          case 8:
            resource = _context.sent;
            markup = (0, _server.renderToStaticMarkup)((0, _core.jsx)(App, {
              resource: resource,
              parsedReq: parsedReq
            }));
            return _context.abrupt("break", 12);

          case 11:
            markup = (0, _server.renderToStaticMarkup)((0, _core.jsx)(App, {
              resource: resource,
              parsedReq: parsedReq
            }));

          case 12:
            console.log(markup);
            return _context.abrupt("return", markup);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getHtml.apply(this, arguments);
}