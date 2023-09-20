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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Time: ", time, " s"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleLaps
  }, "Lap"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleStop
  }, "Stop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", null, "Reset"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
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
/******/ 	__webpack_require__.h = () => ("9a4c36812858180bf3fe")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5hMTU1OWVjZTE0OWY3ZGE4NGRlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQixJQUFBQyxTQUFBLEdBQXdCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1QkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQXdCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE3QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQWtDWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF6Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUU5QmIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1osSUFBSWMsU0FBUyxFQUFFO01BQ1gsSUFBTUUsUUFBUSxHQUFHQyxXQUFXLENBQUMsWUFBTTtRQUMvQlYsT0FBTyxDQUFDLFVBQUFXLFNBQVM7VUFBQSxPQUFJQSxTQUFTLEdBQUcsQ0FBQztRQUFBLEVBQUM7TUFDdkMsQ0FBQyxFQUFFLElBQUksQ0FBQztNQUNSLE9BQU8sWUFBTTtRQUNUQyxhQUFhLENBQUNILFFBQVEsQ0FBQztNQUMzQixDQUFDO0lBQ0wsQ0FBQyxNQUFNO01BQ0hULE9BQU8sQ0FBQyxVQUFBVyxTQUFTO1FBQUEsT0FBSUEsU0FBUztNQUFBLEVBQUM7SUFDbkM7RUFDSixDQUFDLEVBQUUsQ0FBQ0osU0FBUyxDQUFDLENBQUM7RUFFZixJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0lBQ3JCTCxZQUFZLENBQUMsVUFBQUcsU0FBUztNQUFBLE9BQUksQ0FBQ0EsU0FBUztJQUFBLEVBQUM7RUFDekMsQ0FBQztFQUVELElBQU1HLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJWLE9BQU8sQ0FBQyxVQUFBTyxTQUFTO01BQUEsVUFBQUksTUFBQSxDQUFBQyxrQkFBQSxDQUFRTCxTQUFTLElBQUVaLElBQUk7SUFBQSxDQUFDLENBQUM7RUFDOUMsQ0FBQztFQUVELG9CQUNJUCwwREFBQSwyQkFDSUEsMERBQUEsYUFBSSxRQUFNLEVBQUNPLElBQUksRUFBQyxJQUFNLENBQUMsZUFDdkJQLDBEQUFBO0lBQVEwQixPQUFPLEVBQUVKO0VBQVcsR0FBQyxLQUFXLENBQUMsZUFDekN0QiwwREFBQTtJQUFRMEIsT0FBTyxFQUFFTDtFQUFXLEdBQUMsTUFBWSxDQUFDLGVBQzFDckIsMERBQUEsaUJBQVEsT0FBYSxDQUFDLGVBQ3RCQSwwREFBQTtJQUFRMEIsT0FBTyxFQUFFTDtFQUFXLEdBQUMsT0FBYSxDQUFDLEVBQzFDVixJQUFJLENBQUNnQixHQUFHLENBQUMsVUFBQUMsR0FBRyxFQUFJO0lBQ2Isb0JBQU81QiwwREFBQSxhQUFLNEIsR0FBUSxDQUFDO0VBQ3pCLENBQUMsQ0FDQSxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlekIsU0FBUzs7Ozs7Ozs7VUMxQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDdfRHppZW5fMTEvMDJfdXNlRWZmZWN0LzA1X1phZGFuaWVfNS9qcy9TdG9wd2F0Y2guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0b3B3YXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbGFwcywgc2V0TGFwc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKGlzUnVubmluZykge1xuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VGltZShwcmV2U3RhdGUgPT4gcHJldlN0YXRlICsgMSk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUpO1xuICAgICAgICB9XG4gICAgfSwgW2lzUnVubmluZ10pO1xuXG4gICAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKHByZXZTdGF0ZSA9PiAhcHJldlN0YXRlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVMYXBzID0gKCkgPT4ge1xuICAgICAgICBzZXRMYXBzKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCB0aW1lXSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRpbWU6IHt0aW1lfSBzPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTGFwc30+TGFwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU3RvcH0+U3RhcnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIHtsYXBzLm1hcChsYXAgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8dWw+e2xhcH08L3VsPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdG9wd2F0Y2g7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOWE0YzM2ODEyODU4MTgwYmYzZmVcIikiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlN0b3B3YXRjaCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInRpbWUiLCJzZXRUaW1lIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsYXBzIiwic2V0TGFwcyIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwiaXNSdW5uaW5nIiwic2V0SXNSdW5uaW5nIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZTdGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVTdG9wIiwiaGFuZGxlTGFwcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibWFwIiwibGFwIl0sInNvdXJjZVJvb3QiOiIifQ==