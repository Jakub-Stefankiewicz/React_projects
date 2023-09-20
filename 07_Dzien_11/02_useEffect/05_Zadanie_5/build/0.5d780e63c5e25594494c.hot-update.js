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
  //puszcza stoper co sekundę, zatrzymuje go jak isRunning się zmieni i puszcza jak znowu się zmieni
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
/******/ 	__webpack_require__.h = () => ("655d5f96ea88cd2df098")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZDc4MGU2M2M1ZTI1NTk0NDk0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFFakQsSUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUEsRUFBUztFQUNwQixJQUFBQyxTQUFBLEdBQXdCRiwrQ0FBUSxDQUFDLENBQUMsQ0FBQztJQUFBRyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUE1QkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQXdCUCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUFBUSxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUE3QkUsSUFBSSxHQUFBRCxVQUFBO0lBQUVFLE9BQU8sR0FBQUYsVUFBQTtFQUNwQixJQUFBRyxVQUFBLEdBQWtDWCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBWSxVQUFBLEdBQUFSLGNBQUEsQ0FBQU8sVUFBQTtJQUF6Q0UsU0FBUyxHQUFBRCxVQUFBO0lBQUVFLFlBQVksR0FBQUYsVUFBQTtFQUNsQztFQUNJYixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJYyxTQUFTLEVBQUU7TUFDWCxJQUFNRSxRQUFRLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO1FBQy9CVixPQUFPLENBQUMsVUFBQVcsU0FBUztVQUFBLE9BQUlBLFNBQVMsR0FBRyxDQUFDO1FBQUEsRUFBQztNQUN2QyxDQUFDLEVBQUUsSUFBSSxDQUFDO01BQ1IsT0FBTyxZQUFNO1FBQ1RDLGFBQWEsQ0FBQ0gsUUFBUSxDQUFDO01BQzNCLENBQUM7SUFDTCxDQUFDLE1BQU07TUFDSFQsT0FBTyxDQUFDLFVBQUFXLFNBQVM7UUFBQSxPQUFJQSxTQUFTO01BQUEsRUFBQztJQUNuQztFQUNKLENBQUMsRUFBRSxDQUFDSixTQUFTLENBQUMsQ0FBQztFQUVmLElBQU1NLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7SUFDckJMLFlBQVksQ0FBQyxVQUFBRyxTQUFTO01BQUEsT0FBSSxDQUFDQSxTQUFTO0lBQUEsRUFBQztFQUN6QyxDQUFDO0VBRUQsSUFBTUcsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUEsRUFBUztJQUNyQlYsT0FBTyxDQUFDLFVBQUFPLFNBQVM7TUFBQSxVQUFBSSxNQUFBLENBQUFDLGtCQUFBLENBQVFMLFNBQVMsSUFBRVosSUFBSTtJQUFBLENBQUMsQ0FBQztFQUM5QyxDQUFDO0VBRUQsSUFBTWtCLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBLEVBQVM7SUFDdEJiLE9BQU8sQ0FBQyxFQUFFLENBQUM7SUFDWEosT0FBTyxDQUFDLENBQUMsQ0FBQztFQUNkLENBQUM7RUFFRCxvQkFDSVIsMERBQUEsMkJBQ0lBLDBEQUFBLGFBQUksUUFBTSxFQUFDTyxJQUFJLEVBQUMsSUFBTSxDQUFDLGVBQ3ZCUCwwREFBQTtJQUFRMkIsT0FBTyxFQUFFTDtFQUFXLEdBQUMsS0FBVyxDQUFDLGVBQ3pDdEIsMERBQUE7SUFBUTJCLE9BQU8sRUFBRU47RUFBVyxHQUFDLE1BQVksQ0FBQyxlQUMxQ3JCLDBEQUFBO0lBQVEyQixPQUFPLEVBQUVGO0VBQVksR0FBQyxPQUFhLENBQUMsZUFDNUN6QiwwREFBQTtJQUFRMkIsT0FBTyxFQUFFTjtFQUFXLEdBQUMsT0FBYSxDQUFDLEVBQzFDVixJQUFJLENBQUNpQixHQUFHLENBQUMsVUFBQUMsR0FBRyxFQUFJO0lBQ2Isb0JBQU83QiwwREFBQSxhQUFLNkIsR0FBUSxDQUFDO0VBQ3pCLENBQUMsQ0FDQSxDQUFDO0FBRWQsQ0FBQztBQUVELGlFQUFlMUIsU0FBUzs7Ozs7Ozs7VUMvQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LXJlYWN0Ly4vMDdfRHppZW5fMTEvMDJfdXNlRWZmZWN0LzA1X1phZGFuaWVfNS9qcy9TdG9wd2F0Y2guanMiLCJ3ZWJwYWNrOi8vZXM2LXJlYWN0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0b3B3YXRjaCA9ICgpID0+IHtcbiAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbGFwcywgc2V0TGFwc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW2lzUnVubmluZywgc2V0SXNSdW5uaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuLy9wdXN6Y3phIHN0b3BlciBjbyBzZWt1bmTEmSwgemF0cnp5bXVqZSBnbyBqYWsgaXNSdW5uaW5nIHNpxJkgem1pZW5pIGkgcHVzemN6YSBqYWsgem5vd3Ugc2nEmSB6bWllbmlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoaXNSdW5uaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lKHByZXZTdGF0ZSA9PiBwcmV2U3RhdGUgKyAxKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWUocHJldlN0YXRlID0+IHByZXZTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNSdW5uaW5nXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgICAgICBzZXRJc1J1bm5pbmcocHJldlN0YXRlID0+ICFwcmV2U3RhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUxhcHMgPSAoKSA9PiB7XG4gICAgICAgIHNldExhcHMocHJldlN0YXRlID0+IFsuLi5wcmV2U3RhdGUsIHRpbWVdKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xuICAgICAgICBzZXRMYXBzKFtdKTtcbiAgICAgICAgc2V0VGltZSgwKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgxPlRpbWU6IHt0aW1lfSBzPC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTGFwc30+TGFwPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlN0b3A8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9PlJlc2V0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN0b3B9PlN0YXJ0PC9idXR0b24+XG4gICAgICAgICAgICB7bGFwcy5tYXAobGFwID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPHVsPntsYXB9PC91bD5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3RvcHdhdGNoOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY1NWQ1Zjk2ZWE4OGNkMmRmMDk4XCIpIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTdG9wd2F0Y2giLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJ0aW1lIiwic2V0VGltZSIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibGFwcyIsInNldExhcHMiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJwcmV2U3RhdGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlU3RvcCIsImhhbmRsZUxhcHMiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJoYW5kbGVSZXNldCIsImNyZWF0ZUVsZW1lbnQiLCJvbkNsaWNrIiwibWFwIiwibGFwIl0sInNvdXJjZVJvb3QiOiIifQ==