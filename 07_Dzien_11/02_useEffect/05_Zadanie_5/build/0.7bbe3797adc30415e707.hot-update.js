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
    if (isRunning) {
      var interval = setInterval(function () {
        setTime(function (prevState) {
          return prevState + 1;
        });
      }, 1000);
      return function () {
        clearInterval(interval);
      };
    } else {
      setTime(function (prevState) {
        return prevState;
      });
    }
  }, [isRunning]);
  var handleStop = function handleStop() {
    setIsRunning(function (prevState) {
      return !prevState;
    });
  };
  //
  // useEffect(() => {
  //     console.log("zmienilo sie")
  //     setTime(prevState => prevState);
  // }, [isRunning]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8c3950532d3e2e28c6d3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43YmJlMzc5N2FkYzMwNDE1ZTcwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVqRCxJQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQSxFQUFTO0VBQ3BCLElBQUFDLFNBQUEsR0FBd0JGLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFHLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQTVCRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBQ3BCLElBQUFJLFVBQUEsR0FBd0JQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQUFRLFVBQUEsR0FBQUosY0FBQSxDQUFBRyxVQUFBO0lBQTVCRSxJQUFJLEdBQUFELFVBQUE7SUFBRUUsT0FBTyxHQUFBRixVQUFBO0VBQ3BCLElBQUFHLFVBQUEsR0FBa0NYLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFZLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQXpDRSxTQUFTLEdBQUFELFVBQUE7SUFBRUUsWUFBWSxHQUFBRixVQUFBO0VBRTlCYixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJYyxTQUFTLEVBQUM7TUFDVixJQUFNRSxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQy9CVixPQUFPLENBQUMsVUFBQVcsU0FBUztVQUFBLE9BQUlBLFNBQVMsR0FBRyxDQUFDO1FBQUEsRUFBQztNQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsT0FBTyxZQUFNO1FBQ1RDLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO01BQzNCLENBQUM7SUFDTCxDQUFDLE1BQU07TUFDSFQsT0FBTyxDQUFDLFVBQUFXLFNBQVM7UUFBQSxPQUFJQSxTQUFTO01BQUEsRUFBQztJQUNuQztFQUVKLENBQUMsRUFBRSxDQUFDSixTQUFTLENBQUMsQ0FBQztFQUVmLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJMLFlBQVksQ0FBQyxVQUFBRyxTQUFTO01BQUEsT0FBSSxDQUFDQSxTQUFTO0lBQUEsRUFBQztFQUN6QyxDQUFDO0VBQ0Q7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQSxvQkFDSW5CLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFJLFFBQU0sRUFBQ08sSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUN2QlAsMERBQUEsaUJBQVEsS0FBVyxDQUFDLGVBQ3BCQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFRjtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQzFDckIsMERBQUEsaUJBQVEsT0FBYSxDQUFDLGVBQ3RCQSwwREFBQTtJQUFRdUIsT0FBTyxFQUFFRjtFQUFXLEdBQUMsT0FBYSxDQUFDLGVBQzNDckIsMERBQUEsV0FBUSxDQUNQLENBQUM7QUFFZCxDQUFDO0FBRUQsaUVBQWVHLFNBQVM7Ozs7Ozs7O1VDMUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wNV9aYWRhbmllXzUvanMvU3RvcHdhdGNoLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdG9wd2F0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xhcHMsIHNldExhcHNdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZyl7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWUocHJldlN0YXRlID0+IHByZXZTdGF0ZSk7XG4gICAgICAgIH1cblxuICAgIH0sIFtpc1J1bm5pbmddKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XG4gICAgfVxuICAgIC8vXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ6bWllbmlsbyBzaWVcIilcbiAgICAvLyAgICAgc2V0VGltZShwcmV2U3RhdGUgPT4gcHJldlN0YXRlKTtcbiAgICAvLyB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRpbWU6IHt0aW1lfSBzPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24+TGFwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDx1bD48L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjhjMzk1MDUzMmQzZTJlMjhjNmQzXCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9wd2F0Y2giLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aW1lIiwic2V0VGltZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibGFwcyIsInNldExhcHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlU3RvcCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==