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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DynamicLego = function DynamicLego() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
    _useState2 = _slicedToArray(_useState, 2),
    lego = _useState2[0],
    addLego = _useState2[1];
  var changeHandler = function changeHandler(e) {
    addLego(e.target.value);
    e.preventDefault();
  };
  var legoBuilder = function legoBuilder(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        style: {
          backgroundColor: "red",
          height: "100px",
          width: "".concat(i * 50, "px")
        }
      }));
      return arr;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    onChange: function onChange(e) {
      return changeHandler(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, legoBuilder(lego)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLego);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3adad9b5a2f327f2c6b2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4zNzAyODRjMmQ1N2JlYzE1YzJjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBcUJGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTFCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRW5CLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsQ0FBQyxFQUFJO0lBQ3hCRixPQUFPLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDdkJGLENBQUMsQ0FBQ0csY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxNQUFNLEVBQUs7SUFDNUIsSUFBTUMsR0FBRyxHQUFDLEVBQUU7SUFDWixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0YsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUM3QkQsR0FBRyxDQUFDRSxJQUFJLGVBQ0pqQiwwREFBQTtRQUFJbUIsR0FBRyxFQUFFSCxDQUFFO1FBQUNJLEtBQUssRUFBRTtVQUFDQyxlQUFlLEVBQUMsS0FBSztVQUFFQyxNQUFNLEVBQUMsT0FBTztVQUFFQyxLQUFLLEtBQUFDLE1BQUEsQ0FBSVIsQ0FBQyxHQUFDLEVBQUU7UUFBSTtNQUFFLENBQUssQ0FDdkYsQ0FBQztNQUNELE9BQU9ELEdBQUc7SUFDZDtFQUVKLENBQUM7RUFFRCxvQkFDSWYsMERBQUEsMkJBQ0lBLDBEQUFBLDRCQUNJQSwwREFBQTtJQUFPeUIsSUFBSSxFQUFDLFFBQVE7SUFBQ0MsUUFBUSxFQUFFLFNBQUFBLFNBQUFqQixDQUFDO01BQUEsT0FBRUQsYUFBYSxDQUFDQyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FDbkQsQ0FBQyxlQUNQVCwwREFBQSxhQUFLYSxXQUFXLENBQUNQLElBQUksQ0FBTSxDQUMxQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSixXQUFXOzs7Ozs7OztVQy9CMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDNfWmFkYW5pZV8zL2pzL0R5bmFtaWNMZWdvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRHluYW1pY0xlZ28gPSAoKSA9PiB7XG4gICAgY29uc3RbbGVnbywgYWRkTGVnb109dXNlU3RhdGUoMSlcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT57XG4gICAgICAgIGFkZExlZ28oZS50YXJnZXQudmFsdWUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY29uc3QgbGVnb0J1aWxkZXIgPSAobnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGFycj1bXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2goXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aX0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJyZWRcIiwgaGVpZ2h0OlwiMTAwcHhcIiwgd2lkdGg6YCR7aSo1MH1weGB9fT48L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIGFyclxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBvbkNoYW5nZT17ZT0+Y2hhbmdlSGFuZGxlcihlKX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDx1bD57bGVnb0J1aWxkZXIobGVnbyl9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNMZWdvOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjNhZGFkOWI1YTJmMzI3ZjJjNmIyXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEeW5hbWljTGVnbyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxlZ28iLCJhZGRMZWdvIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibGVnb0J1aWxkZXIiLCJudW1iZXIiLCJhcnIiLCJpIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiY29uY2F0IiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==