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

var Stopwatch = function Stopwatch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    time = _useState2[0],
    setTime = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    laps = _useState4[0],
    setLaps = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    isRunning = _useState6[0],
    setIsRunning = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      setTime(function (prevState) {
        return prevState + 1;
      });
    }, 1000);
    return function () {
      clearInterval(interval);
    };
  }, []);
  var handleStop = function handleStop() {
    setIsRunning(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ced6626eedf976bcace9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5kMzJhYWNmNWUyYTUyMjBiZGVhYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBd0JQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBa0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQXpDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBRTlCYixnREFBUyxDQUFDLFlBQU07SUFDUixJQUFNZ0IsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtNQUMvQlYsT0FBTyxDQUFDLFVBQUFXLFNBQVM7UUFBQSxPQUFJQSxTQUFTLEdBQUcsQ0FBQztNQUFBLEVBQUM7SUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUNSLE9BQU8sWUFBTTtNQUNUQyxhQUFhLENBQUNILFFBQVEsQ0FBQztJQUMzQixDQUFDO0VBQ1QsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJMLFlBQVksQ0FBQyxLQUFLLENBQUM7RUFDdkIsQ0FBQztFQUVELG9CQUNJaEIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksUUFBTSxFQUFDTyxJQUFJLEVBQUMsSUFBTSxDQUFDLGVBQ3ZCUCwwREFBQSxpQkFBUSxLQUFXLENBQUMsZUFDcEJBLDBEQUFBO0lBQVF1QixPQUFPLEVBQUVGO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDMUNyQiwwREFBQSxpQkFBUSxPQUFhLENBQUMsZUFDdEJBLDBEQUFBLGlCQUFRLE9BQWEsQ0FBQyxlQUN0QkEsMERBQUEsV0FBUSxDQUNQLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVHLFNBQVM7Ozs7Ozs7O1VDaEN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wNV9aYWRhbmllXzUvanMvU3RvcHdhdGNoLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdG9wd2F0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xhcHMsIHNldExhcHNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5UaW1lOiB7dGltZX0gczwvaDE+XG4gICAgICAgICAgICA8YnV0dG9uPkxhcDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdG9wfT5TdG9wPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uPlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICA8dWw+PC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3B3YXRjaDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjZWQ2NjI2ZWVkZjk3NmJjYWNlOVwiKSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3RvcHdhdGNoIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwidGltZSIsInNldFRpbWUiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImxhcHMiLCJzZXRMYXBzIiwiX3VzZVN0YXRlNSIsIl91c2VTdGF0ZTYiLCJpc1J1bm5pbmciLCJzZXRJc1J1bm5pbmciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwicHJldlN0YXRlIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZVN0b3AiLCJjcmVhdGVFbGVtZW50Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=