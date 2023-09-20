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
    for (var i = 1; i <= number; i++) {
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        style: {
          backgroundColor: "red",
          height: "50px",
          width: "".concat(50 * i, "px")
        }
      }));
      return arr;
    }
  };
  var legoBuilder2 = function legoBuilder2(number) {
    var tab = [];
    for (var i = 1; i <= number; i++) {
      tab.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: i,
        style: {
          height: "50px",
          backgroundColor: "red",
          width: "".concat(50 * i, "px")
        }
      }));
    }
    return tab;
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "number",
    onChange: function onChange(e) {
      return changeHandler(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, legoBuilder2(lego)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynamicLego);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("51c2127acddb34ddec2a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZGZlZjBkYjMxYjZmODliMGVkNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzQztBQUV0QyxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0VBQ3RCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBYUEsQ0FBSUMsQ0FBQyxFQUFLO0lBQ3pCRixPQUFPLENBQUNFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUM7SUFDdkJGLENBQUMsQ0FBQ0csY0FBYyxDQUFDLENBQUM7RUFDdEIsQ0FBQztFQUVELElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFJQyxNQUFNLEVBQUs7SUFDNUIsSUFBTUMsR0FBRyxHQUFHLEVBQUU7SUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsTUFBTSxFQUFFRSxDQUFDLEVBQUUsRUFBRTtNQUM5QkQsR0FBRyxDQUFDRSxJQUFJLGVBQ0pqQiwwREFBQTtRQUFJbUIsR0FBRyxFQUFFSCxDQUFFO1FBQUNJLEtBQUssRUFBRTtVQUNmQyxlQUFlLEVBQUUsS0FBSztVQUN0QkMsTUFBTSxFQUFFLE1BQU07VUFDZEMsS0FBSyxLQUFBQyxNQUFBLENBQUssRUFBRSxHQUFDUixDQUFDO1FBQ2xCO01BQUUsQ0FBSyxDQUNYLENBQUM7TUFDRCxPQUFPRCxHQUFHO0lBQ2Q7RUFDSixDQUFDO0VBRUQsSUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUlYLE1BQU0sRUFBSztJQUM3QixJQUFNWSxHQUFHLEdBQUcsRUFBRTtJQUNkLEtBQUssSUFBSVYsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxJQUFJRixNQUFNLEVBQUVFLENBQUMsRUFBRSxFQUFFO01BQzlCVSxHQUFHLENBQUNULElBQUksZUFDSmpCLDBEQUFBO1FBQ0ltQixHQUFHLEVBQUVILENBQUU7UUFDUEksS0FBSyxFQUFFO1VBQ0hFLE1BQU0sRUFBRSxNQUFNO1VBQ2RELGVBQWUsRUFBRSxLQUFLO1VBQ3RCRSxLQUFLLEtBQUFDLE1BQUEsQ0FBSyxFQUFFLEdBQUNSLENBQUM7UUFDbEI7TUFBRSxDQUNMLENBQ0wsQ0FBQztJQUNMO0lBQ0EsT0FBT1UsR0FBRztFQUNkLENBQUM7RUFFRCxvQkFDSTFCLDBEQUFBLDJCQUNJQSwwREFBQSw0QkFDSUEsMERBQUE7SUFBTzJCLElBQUksRUFBQyxRQUFRO0lBQUNDLFFBQVEsRUFBRSxTQUFBQSxTQUFBbkIsQ0FBQztNQUFBLE9BQUlELGFBQWEsQ0FBQ0MsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFDLENBQ3BELENBQUMsZUFDUFQsMERBQUEsYUFBS3lCLFlBQVksQ0FBQ25CLElBQUksQ0FBTSxDQUMzQixDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlSixXQUFXOzs7Ozs7OztVQ25EMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtcmVhY3QvLi8xMV9Eemllbl8xOC8wMl9Gb3JtdWxhcnplXy1fY2lhZ19kYWxzenlfemFkYW4vMDNfWmFkYW5pZV8zL2pzL0R5bmFtaWNMZWdvLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRHluYW1pY0xlZ28gPSAoKSA9PiB7XG4gICAgY29uc3QgW2xlZ28sIGFkZExlZ29dID0gdXNlU3RhdGUoMSlcblxuICAgIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBhZGRMZWdvKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZ29CdWlsZGVyID0gKG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIGFyci5wdXNoKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZWRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkezUwKml9cHhgXG4gICAgICAgICAgICAgICAgfX0+PC9saT5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHJldHVybiBhcnI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBsZWdvQnVpbGRlcjIgPSAobnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYiA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXI7IGkrKykge1xuICAgICAgICAgICAgdGFiLnB1c2goXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7NTAqaX1weGBcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWI7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgb25DaGFuZ2U9e2UgPT4gY2hhbmdlSGFuZGxlcihlKX0vPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPHVsPntsZWdvQnVpbGRlcjIobGVnbyl9PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNMZWdvOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUxYzIxMjdhY2RkYjM0ZGRlYzJhXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEeW5hbWljTGVnbyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImxlZ28iLCJhZGRMZWdvIiwiY2hhbmdlSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibGVnb0J1aWxkZXIiLCJudW1iZXIiLCJhcnIiLCJpIiwicHVzaCIsImNyZWF0ZUVsZW1lbnQiLCJrZXkiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImhlaWdodCIsIndpZHRoIiwiY29uY2F0IiwibGVnb0J1aWxkZXIyIiwidGFiIiwidHlwZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==