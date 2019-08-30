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

var _reactTextfit = require("react-textfit");

import { jsx as ___EmotionJSX } from "@emotion/core";

/** @jsx jsx */
function App(_ref) {
  var resource = _ref.resource,
      parsedReq = _ref.parsedReq;
  return (0, _core.jsx)("div", null, (0, _core.jsx)("h1", null, "-----", parsedReq.text));
}

var _ref3 = process.env.NODE_ENV === "production" ? {
  name: "b3m4i8-InstructorGuide",
  styles: "display:flex;flex-direction:column;font-family:Helvetica, Arial, Sans-Serif;height:100%;label:InstructorGuide;"
} : {
  name: "b3m4i8-InstructorGuide",
  styles: "display:flex;flex-direction:column;font-family:Helvetica, Arial, Sans-Serif;height:100%;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CTSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJUb1N0YXRpY01hcmt1cH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHtUZXh0Zml0fSBmcm9tICdyZWFjdC10ZXh0Zml0J1xuXG5mdW5jdGlvbiBBcHAoe3Jlc291cmNlLCBwYXJzZWRSZXF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4tLS0tLXtwYXJzZWRSZXEudGV4dH08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEluc3RydWN0b3JHdWlkZSh7cGFyc2VkUmVxfSkge1xuICBjb25zdCB7dGV4dCwgdGhlbWUsIG1kLCBmb250U2l6ZSwgaW1hZ2VzLCB3aWR0aHMsIGhlaWdodHN9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKCdQQVJTRUQgUkVRVUVTVCcsIHBhcnNlZFJlcSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxPmVnZ2hlYWQgaW5zdHJ1Y3RvciBndWlkZTwvaDE+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXt0ZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzg0cHgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc0NXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHRtbChwYXJzZWRSZXEpIHtcbiAgbGV0IG1hcmt1cFxuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSlcbiAgc3dpdGNoIChwYXJzZWRSZXEucmVzb3VyY2VUeXBlKSB7XG4gICAgY2FzZSAnaW5zdHJ1Y3Rvci1ndWlkZSc6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2VyaWVzJzpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+KVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

var _ref4 = process.env.NODE_ENV === "production" ? {
  name: "10c8hl3-InstructorGuide",
  styles: "display:flex;align-items:center;justify-content:center;height:100%;label:InstructorGuide;"
} : {
  name: "10c8hl3-InstructorGuide",
  styles: "display:flex;align-items:center;justify-content:center;height:100%;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCUSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJUb1N0YXRpY01hcmt1cH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHtUZXh0Zml0fSBmcm9tICdyZWFjdC10ZXh0Zml0J1xuXG5mdW5jdGlvbiBBcHAoe3Jlc291cmNlLCBwYXJzZWRSZXF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4tLS0tLXtwYXJzZWRSZXEudGV4dH08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEluc3RydWN0b3JHdWlkZSh7cGFyc2VkUmVxfSkge1xuICBjb25zdCB7dGV4dCwgdGhlbWUsIG1kLCBmb250U2l6ZSwgaW1hZ2VzLCB3aWR0aHMsIGhlaWdodHN9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKCdQQVJTRUQgUkVRVUVTVCcsIHBhcnNlZFJlcSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxPmVnZ2hlYWQgaW5zdHJ1Y3RvciBndWlkZTwvaDE+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXt0ZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzg0cHgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc0NXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHRtbChwYXJzZWRSZXEpIHtcbiAgbGV0IG1hcmt1cFxuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSlcbiAgc3dpdGNoIChwYXJzZWRSZXEucmVzb3VyY2VUeXBlKSB7XG4gICAgY2FzZSAnaW5zdHJ1Y3Rvci1ndWlkZSc6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2VyaWVzJzpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+KVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

var _ref5 = process.env.NODE_ENV === "production" ? {
  name: "do875v",
  styles: "width:450px;max-width:100%;max-height:450px;"
} : {
  name: "do875v",
  styles: "width:450px;max-width:100%;max-height:450px;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVDYyIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJUb1N0YXRpY01hcmt1cH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHtUZXh0Zml0fSBmcm9tICdyZWFjdC10ZXh0Zml0J1xuXG5mdW5jdGlvbiBBcHAoe3Jlc291cmNlLCBwYXJzZWRSZXF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4tLS0tLXtwYXJzZWRSZXEudGV4dH08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEluc3RydWN0b3JHdWlkZSh7cGFyc2VkUmVxfSkge1xuICBjb25zdCB7dGV4dCwgdGhlbWUsIG1kLCBmb250U2l6ZSwgaW1hZ2VzLCB3aWR0aHMsIGhlaWdodHN9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKCdQQVJTRUQgUkVRVUVTVCcsIHBhcnNlZFJlcSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxPmVnZ2hlYWQgaW5zdHJ1Y3RvciBndWlkZTwvaDE+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXt0ZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzg0cHgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc0NXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHRtbChwYXJzZWRSZXEpIHtcbiAgbGV0IG1hcmt1cFxuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSlcbiAgc3dpdGNoIChwYXJzZWRSZXEucmVzb3VyY2VUeXBlKSB7XG4gICAgY2FzZSAnaW5zdHJ1Y3Rvci1ndWlkZSc6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2VyaWVzJzpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+KVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
};

var _ref6 = process.env.NODE_ENV === "production" ? {
  name: "acy21t-InstructorGuide",
  styles: "font-size:84px;padding-left:45px;padding-right:25px;label:InstructorGuide;"
} : {
  name: "acy21t-InstructorGuide",
  styles: "font-size:84px;padding-left:45px;padding-right:25px;label:InstructorGuide;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fbGliL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtEVSIsImZpbGUiOiIuLi8uLi9zcmMvX2xpYi90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtyZW5kZXJUb1N0YXRpY01hcmt1cH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7anN4fSBmcm9tICdAZW1vdGlvbi9jb3JlJ1xuaW1wb3J0IHtUZXh0Zml0fSBmcm9tICdyZWFjdC10ZXh0Zml0J1xuXG5mdW5jdGlvbiBBcHAoe3Jlc291cmNlLCBwYXJzZWRSZXF9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT4tLS0tLXtwYXJzZWRSZXEudGV4dH08L2gxPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmZ1bmN0aW9uIEluc3RydWN0b3JHdWlkZSh7cGFyc2VkUmVxfSkge1xuICBjb25zdCB7dGV4dCwgdGhlbWUsIG1kLCBmb250U2l6ZSwgaW1hZ2VzLCB3aWR0aHMsIGhlaWdodHN9ID0gcGFyc2VkUmVxXG4gIGNvbnNvbGUubG9nKCdQQVJTRUQgUkVRVUVTVCcsIHBhcnNlZFJlcSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjc3M9e3tcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIFNhbnMtU2VyaWYnLFxuICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGgxPmVnZ2hlYWQgaW5zdHJ1Y3RvciBndWlkZTwvaDE+XG4gICAgICA8ZGl2XG4gICAgICAgIGNzcz17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjc3M9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzQ1MHB4JyxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgICAgYWx0PXt0ZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY3NzPXt7XG4gICAgICAgICAgICBmb250U2l6ZTogJzg0cHgnLFxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6ICc0NXB4JyxcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzI1cHgnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SHRtbChwYXJzZWRSZXEpIHtcbiAgbGV0IG1hcmt1cFxuXG4gIGNvbnNvbGUubG9nKHBhcnNlZFJlcSlcbiAgc3dpdGNoIChwYXJzZWRSZXEucmVzb3VyY2VUeXBlKSB7XG4gICAgY2FzZSAnaW5zdHJ1Y3Rvci1ndWlkZSc6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8SW5zdHJ1Y3Rvckd1aWRlIHBhcnNlZFJlcT17cGFyc2VkUmVxfSAvPilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc2VyaWVzJzpcbiAgICAgIGNvbnN0IHJlc291cmNlID0gYXdhaXQgYXhpb3NcbiAgICAgICAgLmdldChgaHR0cHM6Ly9lZ2doZWFkLmlvL2FwaS92MS8ke3BhcnNlZFJlcS5yZXNvdXJjZVR5cGV9LyR7cGFyc2VkUmVxLnRleHR9YClcbiAgICAgICAgLnRoZW4oKHtkYXRhfSkgPT4gZGF0YSlcbiAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RhdGljTWFya3VwKDxBcHAgcmVzb3VyY2U9e3Jlc291cmNlfSBwYXJzZWRSZXE9e3BhcnNlZFJlcX0gLz4pXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBtYXJrdXAgPSByZW5kZXJUb1N0YXRpY01hcmt1cCg8QXBwIHJlc291cmNlPXtyZXNvdXJjZX0gcGFyc2VkUmVxPXtwYXJzZWRSZXF9IC8+KVxuICB9XG4gIGNvbnNvbGUubG9nKG1hcmt1cClcbiAgcmV0dXJuIG1hcmt1cFxufVxuIl19 */"
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
  console.log('PARSED REQUEST', parsedReq);
  return (0, _core.jsx)("div", {
    css: _ref3
  }, (0, _core.jsx)("h1", null, "egghead instructor guide"), (0, _core.jsx)("div", {
    css: _ref4
  }, images.map(function (image) {
    return (0, _core.jsx)("img", {
      css: _ref5,
      src: image,
      alt: text
    });
  }), (0, _core.jsx)("div", {
    css: _ref6
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
            _context.next = _context.t0 === 'instructor-guide' ? 4 : _context.t0 === 'series' ? 6 : 11;
            break;

          case 4:
            markup = (0, _server.renderToStaticMarkup)((0, _core.jsx)(InstructorGuide, {
              parsedReq: parsedReq
            }));
            return _context.abrupt("break", 12);

          case 6:
            _context.next = 8;
            return _axios["default"].get("https://egghead.io/api/v1/".concat(parsedReq.resourceType, "/").concat(parsedReq.text)).then(function (_ref7) {
              var data = _ref7.data;
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