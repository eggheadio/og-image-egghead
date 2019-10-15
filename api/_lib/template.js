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
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1pQiIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IHJlc2V0ID0gY3NzYFxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMyMTI2MmY7XG4gIH1cbiAgaHRtbCB7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IHJlc291cmNlLCBwYXJzZWRSZXEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+LS0tLS17cGFyc2VkUmVxLnRleHR9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxO1xuICBjb25zb2xlLmxvZyhcIlBBUlNFRCBSRVFVRVNUXCIsIHBhcnNlZFJlcSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1TZXJpZlwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RnM2d5azBndS9pbWFnZS91cGxvYWQvdjE1NzExNDY2MjUvb2ctaW1hZ2UtYXNzZXRzL2luc3RydWN0b3ItZ3VpZGVfMngucG5nJylcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkYyRDU1XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4IDMycHhcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwJVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwO1xuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSk7XG4gIHN3aXRjaCAocGFyc2VkUmVxLnJlc291cmNlVHlwZSkge1xuICAgIGNhc2UgXCJpbnN0cnVjdG9yLWd1aWRlXCI6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2VyaWVzXCI6XG4gICAgICBjb25zdCByZXNvdXJjZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vZWdnaGVhZC5pby9hcGkvdjEvJHtwYXJzZWRSZXEucmVzb3VyY2VUeXBlfS8ke3BhcnNlZFJlcS50ZXh0fWBcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpO1xuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gIH1cbiAgY29uc29sZS5sb2cobWFya3VwKTtcbiAgcmV0dXJuIG1hcmt1cDtcbn1cbiJdfQ== */"
};

function App(_ref) {
  var resource = _ref.resource,
      parsedReq = _ref.parsedReq;
  return (0, _core.jsx)("div", null, (0, _core.jsx)("h1", null, "-----", parsedReq.text));
}

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "1iwnlrx-InstructorGuide",
  styles: "display:flex;justify-content:center;align-items:center;font-family:Helvetica, Arial, Sans-Serif;padding:30px;height:100%;background-image:url('https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571146625/og-image-assets/instructor-guide_2x.png');background-size:contain;label:InstructorGuide;"
} : {
  name: "1iwnlrx-InstructorGuide",
  styles: "display:flex;justify-content:center;align-items:center;font-family:Helvetica, Arial, Sans-Serif;padding:30px;height:100%;background-image:url('https://res.cloudinary.com/dg3gyk0gu/image/upload/v1571146625/og-image-assets/instructor-guide_2x.png');background-size:contain;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEUSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IHJlc2V0ID0gY3NzYFxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMyMTI2MmY7XG4gIH1cbiAgaHRtbCB7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IHJlc291cmNlLCBwYXJzZWRSZXEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+LS0tLS17cGFyc2VkUmVxLnRleHR9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxO1xuICBjb25zb2xlLmxvZyhcIlBBUlNFRCBSRVFVRVNUXCIsIHBhcnNlZFJlcSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1TZXJpZlwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RnM2d5azBndS9pbWFnZS91cGxvYWQvdjE1NzExNDY2MjUvb2ctaW1hZ2UtYXNzZXRzL2luc3RydWN0b3ItZ3VpZGVfMngucG5nJylcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkYyRDU1XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4IDMycHhcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwJVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwO1xuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSk7XG4gIHN3aXRjaCAocGFyc2VkUmVxLnJlc291cmNlVHlwZSkge1xuICAgIGNhc2UgXCJpbnN0cnVjdG9yLWd1aWRlXCI6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2VyaWVzXCI6XG4gICAgICBjb25zdCByZXNvdXJjZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vZWdnaGVhZC5pby9hcGkvdjEvJHtwYXJzZWRSZXEucmVzb3VyY2VUeXBlfS8ke3BhcnNlZFJlcS50ZXh0fWBcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpO1xuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gIH1cbiAgY29uc29sZS5sb2cobWFya3VwKTtcbiAgcmV0dXJuIG1hcmt1cDtcbn1cbiJdfQ== */"
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "ev921e-InstructorGuide",
  styles: "color:white;background-color:#FF2D55;font-size:60px;font-weight:600;text-align:center;line-height:1.25;padding:16px 32px;max-width:80%;label:InstructorGuide;"
} : {
  name: "ev921e-InstructorGuide",
  styles: "color:white;background-color:#FF2D55;font-size:60px;font-weight:600;text-align:center;line-height:1.25;padding:16px 32px;max-width:80%;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFVSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyVG9TdGF0aWNNYXJrdXAgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsganN4LCBjc3MsIEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5cbmNvbnN0IHJlc2V0ID0gY3NzYFxuICAqLFxuICAqOmJlZm9yZSxcbiAgKjphZnRlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBodG1sLFxuICBib2R5IHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMyMTI2MmY7XG4gIH1cbiAgaHRtbCB7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgfVxuICBoMiB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICB9XG4gIGgzIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIEFwcCh7IHJlc291cmNlLCBwYXJzZWRSZXEgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+LS0tLS17cGFyc2VkUmVxLnRleHR9PC9oMT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gSW5zdHJ1Y3Rvckd1aWRlKHsgcGFyc2VkUmVxIH0pIHtcbiAgY29uc3QgeyB0ZXh0LCB0aGVtZSwgbWQsIGZvbnRTaXplLCBpbWFnZXMsIHdpZHRocywgaGVpZ2h0cyB9ID0gcGFyc2VkUmVxO1xuICBjb25zb2xlLmxvZyhcIlBBUlNFRCBSRVFVRVNUXCIsIHBhcnNlZFJlcSk7XG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e3Jlc2V0fSAvPlxuICAgICAgPGRpdlxuICAgICAgICBjc3M9e3tcbiAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiSGVsdmV0aWNhLCBBcmlhbCwgU2Fucy1TZXJpZlwiLFxuICAgICAgICAgIHBhZGRpbmc6IFwiMzBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RnM2d5azBndS9pbWFnZS91cGxvYWQvdjE1NzExNDY2MjUvb2ctaW1hZ2UtYXNzZXRzL2luc3RydWN0b3ItZ3VpZGVfMngucG5nJylcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17e1xuICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRkYyRDU1XCIsXG4gICAgICAgICAgICBmb250U2l6ZTogXCI2MHB4XCIsXG4gICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjI1LFxuICAgICAgICAgICAgcGFkZGluZzogXCIxNnB4IDMycHhcIixcbiAgICAgICAgICAgIG1heFdpZHRoOiBcIjgwJVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRIdG1sKHBhcnNlZFJlcSkge1xuICBsZXQgbWFya3VwO1xuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSk7XG4gIHN3aXRjaCAocGFyc2VkUmVxLnJlc291cmNlVHlwZSkge1xuICAgIGNhc2UgXCJpbnN0cnVjdG9yLWd1aWRlXCI6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPik7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic2VyaWVzXCI6XG4gICAgICBjb25zdCByZXNvdXJjZSA9IGF3YWl0IGF4aW9zXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgYGh0dHBzOi8vZWdnaGVhZC5pby9hcGkvdjEvJHtwYXJzZWRSZXEucmVzb3VyY2VUeXBlfS8ke3BhcnNlZFJlcS50ZXh0fWBcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IGRhdGEpO1xuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbWFya3VwID0gcmVuZGVyVG9TdGF0aWNNYXJrdXAoXG4gICAgICAgIDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz5cbiAgICAgICk7XG4gIH1cbiAgY29uc29sZS5sb2cobWFya3VwKTtcbiAgcmV0dXJuIG1hcmt1cDtcbn1cbiJdfQ== */"
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