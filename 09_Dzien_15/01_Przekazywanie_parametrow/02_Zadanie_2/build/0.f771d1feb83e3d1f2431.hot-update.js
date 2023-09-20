"use strict";
self["webpackHotUpdatees6_react"](0,{

/***/ 34:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Box = function Box() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
      backgroundColor: "green",
      width: "500px",
      height: "200px"
    }),
    _useState2 = _slicedToArray(_useState, 2),
    style = _useState2[0],
    updateStyle = _useState2[1];
  var handleClick = function handleClick(width, height, color) {
    updateStyle(_objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: color,
      width: width,
      height: height
    }));
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("200", "300", "orange");
    }
  }, "200 i 300, pomarancz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("100", "700", "blue");
    }
  }, "100 i 700, niebieski"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return handleClick("500", "200", "green");
    }
  }, "500 i 200, zielony"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d2e53d19283ac1bb69b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNzcxZDFmZWI4M2UzZDFmMjQzMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxHQUFHLEdBQUcsU0FBTkEsR0FBR0EsQ0FBQSxFQUFTO0VBQ2QsSUFBQUMsU0FBQSxHQUEwQkYsK0NBQVEsQ0FBQztNQUMvQkcsZUFBZSxFQUFDLE9BQU87TUFDdkJDLEtBQUssRUFBQyxPQUFPO01BQ2JDLE1BQU0sRUFBQztJQUNYLENBQUMsQ0FBQztJQUFBQyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUwsU0FBQTtJQUpJTSxLQUFLLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBS3hCLElBQU1JLFdBQVcsR0FBRSxTQUFiQSxXQUFXQSxDQUFHTixLQUFLLEVBQUVDLE1BQU0sRUFBRU0sS0FBSyxFQUFLO0lBQ3pDRixXQUFXLENBQUFHLGFBQUEsQ0FBQUEsYUFBQSxLQUNKSixLQUFLO01BQ1JMLGVBQWUsRUFBQ1EsS0FBSztNQUNyQlAsS0FBSyxFQUFDQSxLQUFLO01BQ1hDLE1BQU0sRUFBQ0E7SUFBTSxFQUNoQixDQUFDO0VBQ04sQ0FBQztFQUVELG9CQUNJTiwwREFBQTtJQUFLUyxLQUFLLEVBQUVBO0VBQU0sZ0JBQ2RULDBEQUFBO0lBQVFlLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUosV0FBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO0lBQUE7RUFBQyxHQUFFLHNCQUE0QixDQUFDLGVBQzFGWCwwREFBQTtJQUFRZSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1KLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztJQUFBO0VBQUMsR0FBQyxzQkFBNEIsQ0FBQyxlQUN2RlgsMERBQUE7SUFBUWUsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNSixXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUM7SUFBQTtFQUFDLEdBQUMsb0JBQTBCLENBQ3BGLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVULEdBQUc7Ozs7Ozs7O1VDMUJsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA5X0R6aWVuXzE1LzAxX1ByemVrYXp5d2FuaWVfcGFyYW1ldHJvdy8wMl9aYWRhbmllXzIvanMvQm94LmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQm94ID0gKCkgPT4ge1xuICAgIGNvbnN0W3N0eWxlLCB1cGRhdGVTdHlsZV09dXNlU3RhdGUoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJncmVlblwiLFxuICAgICAgICB3aWR0aDpcIjUwMHB4XCIsXG4gICAgICAgIGhlaWdodDpcIjIwMHB4XCJcbiAgICB9KVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrPSAod2lkdGgsIGhlaWdodCwgY29sb3IpID0+IHtcbiAgICAgICAgdXBkYXRlU3R5bGUoe1xuICAgICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6Y29sb3IsXG4gICAgICAgICAgICB3aWR0aDp3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDpoZWlnaHRcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKFwiMjAwXCIsIFwiMzAwXCIsIFwib3JhbmdlXCIpfSA+MjAwIGkgMzAwLCBwb21hcmFuY3o8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soXCIxMDBcIiwgXCI3MDBcIiwgXCJibHVlXCIpfT4xMDAgaSA3MDAsIG5pZWJpZXNraTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhcIjUwMFwiLCBcIjIwMFwiLCBcImdyZWVuXCIpfT41MDAgaSAyMDAsIHppZWxvbnk8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMmU1M2QxOTI4M2FjMWJiNjliNlwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQm94IiwiX3VzZVN0YXRlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJoZWlnaHQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzdHlsZSIsInVwZGF0ZVN0eWxlIiwiaGFuZGxlQ2xpY2siLCJjb2xvciIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=