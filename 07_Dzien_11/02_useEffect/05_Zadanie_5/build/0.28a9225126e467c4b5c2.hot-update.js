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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
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
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
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
  var handleLaps = function handleLaps() {
    setLaps(function (prevState) {
      return [].concat(_toConsumableArray(prevState), [time]);
    });
  };
  var handleReset = function handleReset() {
    setLaps([]);
    setTime(0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLaps
  }, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleReset
  }, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Start"), laps.map(function (lap) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, lap);
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stopwatch);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5d780e63c5e25594494c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yOGE5MjI1MTI2ZTQ2N2M0YjVjMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQixJQUFBQyxTQUFBLEdBQXdCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1QkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQXdCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE3QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQWtDWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF6Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QmIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSWMsU0FBUyxFQUFFO01BQ1gsSUFBTUUsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtRQUMvQlYsT0FBTyxDQUFDLFVBQUFXLFNBQVM7VUFBQSxPQUFJQSxTQUFTLEdBQUcsQ0FBQztRQUFBLEVBQUM7TUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLE9BQU8sWUFBTTtRQUNUQyxhQUFhLENBQUNILFFBQVEsQ0FBQztNQUMzQixDQUFDO0lBQ0wsQ0FBQyxNQUFNO01BQ0hULE9BQU8sQ0FBQyxVQUFBVyxTQUFTO1FBQUEsT0FBSUEsU0FBUztNQUFBLEVBQUM7SUFDbkM7RUFDSixDQUFDLEVBQUUsQ0FBQ0osU0FBUyxDQUFDLENBQUM7RUFFZixJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCTCxZQUFZLENBQUMsVUFBQUcsU0FBUztNQUFBLE9BQUksQ0FBQ0EsU0FBUztJQUFBLEVBQUM7RUFDekMsQ0FBQztFQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJWLE9BQU8sQ0FBQyxVQUFBTyxTQUFTO01BQUEsVUFBQUksTUFBQSxDQUFBQyxrQkFBQSxDQUFRTCxTQUFTLElBQUVaLElBQUk7SUFBQSxDQUFDLENBQUM7RUFDOUMsQ0FBQztFQUVELElBQU1rQixXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQSxFQUFTO0lBQ3RCYixPQUFPLENBQUMsRUFBRSxDQUFDO0lBQ1hKLE9BQU8sQ0FBQyxDQUFDLENBQUM7RUFDZCxDQUFDO0VBRUQsb0JBQ0lSLDBEQUFBLDJCQUNJQSwwREFBQSxhQUFJLFFBQU0sRUFBQ08sSUFBSSxFQUFDLElBQU0sQ0FBQyxlQUN2QlAsMERBQUE7SUFBUTJCLE9BQU8sRUFBRUw7RUFBVyxHQUFDLEtBQVcsQ0FBQyxlQUN6Q3RCLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVOO0VBQVcsR0FBQyxNQUFZLENBQUMsZUFDMUNyQiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFRjtFQUFZLEdBQUMsT0FBYSxDQUFDLGVBQzVDekIsMERBQUE7SUFBUTJCLE9BQU8sRUFBRU47RUFBVyxHQUFDLE9BQWEsQ0FBQyxFQUMxQ1YsSUFBSSxDQUFDaUIsR0FBRyxDQUFDLFVBQUFDLEdBQUcsRUFBSTtJQUNiLG9CQUFPN0IsMERBQUEsYUFBSzZCLEdBQVEsQ0FBQztFQUN6QixDQUFDLENBQ0EsQ0FBQztBQUVkLENBQUM7QUFFRCxpRUFBZTFCLFNBQVM7Ozs7Ozs7O1VDL0N4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1yZWFjdC8uLzA3X0R6aWVuXzExLzAyX3VzZUVmZmVjdC8wNV9aYWRhbmllXzUvanMvU3RvcHdhdGNoLmpzIiwid2VicGFjazovL2VzNi1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdG9wd2F0Y2ggPSAoKSA9PiB7XG4gICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW2xhcHMsIHNldExhcHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWUocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZShwcmV2U3RhdGUgPT4gcHJldlN0YXRlKTtcbiAgICAgICAgfVxuICAgIH0sIFtpc1J1bm5pbmddKTtcblxuICAgIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgICAgIHNldElzUnVubmluZyhwcmV2U3RhdGUgPT4gIXByZXZTdGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTGFwcyA9ICgpID0+IHtcbiAgICAgICAgc2V0TGFwcyhwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgdGltZV0pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHNldExhcHMoW10pO1xuICAgICAgICBzZXRUaW1lKDApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+VGltZToge3RpbWV9IHM8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMYXBzfT5MYXA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RvcDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIHtsYXBzLm1hcChsYXAgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e2xhcH08L3VsPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWQ3ODBlNjNjNWUyNTU5NDQ5NGNcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3B3YXRjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXBzIiwic2V0TGFwcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTdG9wIiwiaGFuZGxlTGFwcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImhhbmRsZVJlc2V0IiwiY3JlYXRlRWxlbWVudCIsIm9uQ2xpY2siLCJtYXAiLCJsYXAiXSwic291cmNlUm9vdCI6IiJ9